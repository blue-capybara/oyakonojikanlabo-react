import React, { useState, useEffect } from 'react';
import { fetchGraphQL } from '../lib/graphql';
import { GET_LATEST_POSTS } from '../lib/queries/getLatestPosts';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { ArticleCard } from '../components/ui/ArticleCard';

interface Tag {
  name: string;
  slug: string;
}

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  uri: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    }
  };
  tags: {
    nodes: Tag[];
  };
  categories: {
    nodes: Array<{
      name: string;
    }>
  };
}

export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    childAge: '',
    email: '',
    adultCount: '1',
    childCount: '1',
    privacy: false
  });
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchGraphQL(GET_LATEST_POSTS);
        
        if (data && data.posts && data.posts.nodes) {
          const formattedArticles = data.posts.nodes.map((post: Post) => {
            // Format tags for display
            const tags = post.tags?.nodes.map(tag => ({
              name: tag.name,
              color: getTagColor(tag.slug)
            })) || [];

            return {
              id: post.id,
              title: post.title,
              date: new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }),
              description: post.excerpt.replace(/<[^>]*>/g, ''), // Remove HTML tags
              image: post.featuredImage?.node?.sourceUrl || 'https://readdy.ai/api/search-image?query=A%20cozy%20reading%20corner%20with%20bookshelves%20filled%20with%20childrens%20books%2C%20comfortable%20seating%2C%20and%20soft%20lighting.%20The%20space%20should%20look%20inviting%20and%20perfect%20for%20parent-child%20reading%20time.&width=400&height=250&seq=5&orientation=landscape',
              category: { 
                name: post.categories?.nodes[0]?.name || 'コラム', 
                color: getCategoryColor(post.categories?.nodes[0]?.name) 
              },
              tags: tags
            };
          });
          
          setArticles(formattedArticles);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('記事の取得に失敗しました。');
        // Fallback to default articles if fetch fails
        setArticles([
          {
            id: '1',
            title: '絵本作家 佐藤まりこさん',
            date: '2025年6月5日',
            description: '人気シリーズ「もりのともだち」の作者が語る、創作の秘密と子どもたちへのメッセージ。',
            image: 'https://readdy.ai/api/search-image?query=A%20cozy%20reading%20corner%20with%20bookshelves%20filled%20with%20childrens%20books%2C%20comfortable%20seating%2C%20and%20soft%20lighting.%20The%20space%20should%20look%20inviting%20and%20perfect%20for%20parent-child%20reading%20time.&width=400&height=250&seq=5&orientation=landscape',
            category: { name: 'インタビュー', color: 'purple' },
            tags: [{ name: '特集', color: 'yellow' }],
          },
          {
            id: '2',
            title: '寝る前の読み聞かせが子どもに与える影響',
            date: '2025年6月8日',
            description: '発達心理学の観点から見る、就寝前の読み聞かせの重要性と効果的な方法について解説します。',
            image: 'https://readdy.ai/api/search-image?query=A%20parent%20reading%20a%20book%20with%20a%20child%2C%20both%20looking%20engaged%20and%20happy.%20The%20scene%20should%20be%20warm%20and%20intimate%2C%20showing%20the%20special%20bond%20created%20during%20reading%20time.%20Natural%20lighting%20and%20comfortable%20home%20setting.&width=400&height=250&seq=6&orientation=landscape',
            category: { name: 'コラム', color: 'blue' },
          },
          {
            id: '3',
            title: '2025年上半期 注目の新刊絵本5選',
            date: '2025年6月10日',
            description: '今年前半に出版された絵本の中から、特に評価の高い作品をピックアップしてレビューします。',
            image: 'https://readdy.ai/api/search-image?query=A%20collection%20of%20new%20childrens%20books%20arranged%20attractively%2C%20showing%20their%20colorful%20covers.%20The%20image%20should%20look%20like%20a%20curated%20selection%20of%20recent%20publications%2C%20professionally%20photographed%20with%20good%20lighting.&width=400&height=250&seq=7&orientation=landscape',
            category: { name: 'レビュー', color: 'green' },
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper function to determine category color
  const getCategoryColor = (categoryName: string | undefined): string => {
    if (!categoryName) return 'blue';
    
    const categoryColors: Record<string, string> = {
      'インタビュー': 'purple',
      'コラム': 'blue',
      'レビュー': 'green',
      '特集': 'yellow',
      'イベント': 'red',
    };
    
    return categoryColors[categoryName] || 'blue';
  };

  // Helper function to determine tag color based on slug
  const getTagColor = (tagSlug: string | undefined): string => {
    if (!tagSlug) return 'gray';
    
    // Assign colors based on tag slug or use a hash function to generate consistent colors
    const tagColors: Record<string, string> = {
      'feature': 'yellow',
      'interview': 'purple',
      'review': 'green',
      'event': 'red',
      'column': 'blue',
      'new': 'pink',
      'recommended': 'indigo',
      'popular': 'orange',
      'seasonal': 'teal',
    };
    
    // Return the color if it exists in the map, otherwise use a hash function
    if (tagColors[tagSlug]) {
      return tagColors[tagSlug];
    }
    
    // Simple hash function to generate consistent colors for tags
    const hash = tagSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
    return colors[hash % colors.length];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('プライバシーポリシーに同意してください');
      return;
    }
    alert('予約を受け付けました。ご登録いただいたメールアドレスに確認メールをお送りしました');
    setModalOpen(false);
    setFormData({
      name: '',
      childAge: '',
      email: '',
      adultCount: '1',
      childCount: '1',
      privacy: false
    });
  };

  return (
    <DefaultLayout>
      {/* メインビジュアル */}
      <section className="relative min-h-[800px] overflow-hidden bg-gradient-to-br from-primary/90 to-primary">
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[800px] py-20">
            <div className="w-full lg:w-1/2 text-white z-10">
              <div className="flex gap-2 mb-6">
                <span className="inline-block bg-white/20 text-white px-4 py-1 text-sm rounded-full">ヨシタケシンスケ</span>
                <span className="inline-block bg-white/20 text-white px-4 py-1 text-sm rounded-full">特集</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in">
                絵本の懐は深いぞ。
              </h2>
              <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
                開催記念イベントとして、ヨシタケシンスケさんとのミニトークがおこなわれました。このときの話がおもしろかったので、「親子時間」でもご紹介します。テーマは「絵本の懐の深さについて」です。
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <button className="bg-white text-primary px-10 py-4 font-bold rounded-button whitespace-nowrap hover:bg-yellow-300 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  記事を読む
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative z-10">
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/45ad2b081cb92f4b255ef95c9f7e6f99.png" 
                  alt="夏休み絵本特集" 
                  className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特集セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">特集</h2>
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-8 [&>*:last-child]:min-[600px]:col-span-2 [&>*:last-child]:lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/921de84646a0d38dfa688f1d826685e6.jpeg" 
                alt="絵本特集" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-3">特集</span>
                <h3 className="text-xl font-bold mb-2">なかやみわさんとの"ものづくり"対談</h3>
                <p className="text-gray-600 mb-4">子どもたちが大好きな絵本「くれよんのくろくん」と「そらまめくん」。どちらも絵本作家なかや みわさんの作品です。</p>
                <a href="#" className="text-primary font-medium flex items-center">
                  詳しく見る
                  <div className="w-5 h-5 flex items-center justify-center ml-1">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/39c218e1ea5141eda8c0b5015336b212.jpeg" 
                alt="親子ワークショップ" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-3">特集</span>
                <h3 className="text-xl font-bold mb-2">画家・湯浅景子さんの版画。</h3>
                <p className="text-gray-600 mb-4">「weeksdays」がひさしぶりにアート作品の販売をします。今回は、画家・湯浅景子さんの版画。</p>
                <a href="#" className="text-primary font-medium flex items-center">
                  詳しく見る
                  <div className="w-5 h-5 flex items-center justify-center ml-1">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Educational%20wooden%20toys%20and%20learning%20materials%20arranged%20neatly%20on%20a%20white%20surface.%20The%20image%20should%20showcase%20colorful%2C%20high-quality%20childrens%20toys%20that%20promote%20development%20and%20creativity.%20Clean%2C%20professional%20product%20photography%20style.&width=400&height=250&seq=4&orientation=landscape" 
                alt="知育玩具特集" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-3">特集</span>
                <h3 className="text-xl font-bold mb-2">年齢別 おすすめ知育玩具</h3>
                <p className="text-gray-600 mb-4">0歳から6歳まで、発達段階に合わせた知育玩具を専門家が厳選。子どもの好奇心と能力を伸ばす商品をご紹介します。</p>
                <a href="#" className="text-primary font-medium flex items-center">
                  詳しく見る
                  <div className="w-5 h-5 flex items-center justify-center ml-1">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よみものセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">記事一覧</h2>
            <a href="#" className="text-primary font-medium flex items-center">
              すべて見る
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg text-center">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* イベントセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col min-[600px]:flex-row justify-between items-start min-[600px]:items-center gap-4 min-[600px]:gap-0 mb-8">
            <h2 className="text-3xl font-bold">全国の絵本アートイベント情報</h2>
            <a href="/events" className="text-primary font-medium flex items-center whitespace-nowrap">
              イベントページへ
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/bf36d3a66d2c4495d815daab6a95c131.png" 
                alt="絵本読み聞かせイベント" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 text-xs rounded-full">作家イベント</span>
                  <span className="text-gray-500 text-sm">東京都</span>
                </div>
                <h3 className="text-xl font-bold mb-2">山田ゆうこさん 絵本読み聞かせ会</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>2025年6月20日(金) 14:00〜15:30</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>丸の内ブックセンター</span>
                </div>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  イベント詳細
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=An%20art%20exhibition%20featuring%20childrens%20book%20illustrations%2C%20with%20framed%20artwork%20displayed%20on%20walls%20and%20visitors%20viewing%20the%20pieces.%20The%20space%20should%20look%20like%20a%20professional%20gallery%20with%20good%20lighting.&width=400&height=250&seq=9&orientation=landscape" 
                alt="原画展" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">原画展</span>
                  <span className="text-gray-500 text-sm">大阪府</span>
                </div>
                <h3 className="text-xl font-bold mb-2">「動物たちの世界」絵本原画展</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>2025年7月1日(火)〜7月15日(火)</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>大阪市立美術館</span>
                </div>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  イベント詳細
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20workshop%20setting%20with%20children%20and%20parents%20engaged%20in%20a%20creative%20activity%20together%2C%20such%20as%20making%20crafts%20related%20to%20a%20childrens%20book.%20The%20space%20should%20look%20organized%20with%20art%20supplies%20and%20a%20friendly%20instructor.&width=400&height=250&seq=10&orientation=landscape" 
                alt="ワークショップ" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">ワークショップ</span>
                  <span className="text-gray-500 text-sm">愛知県</span>
                </div>
                <h3 className="text-xl font-bold mb-2">親子で作る！絵本の主人公フィギュア</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>2025年6月25日(水) 10:00〜12:00</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>名古屋市児童文化センター</span>
                </div>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap"
                >
                  イベント詳細
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 親子の時間研究所とは？ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">親子の時間研究所とは？</h2>
              <div className="space-y-4 text-gray-600">
                <p>親子の時間研究所は、子どもたちの創造性と感性を育むことを目指す、絵本とアートのライフスタイルメディアです。</p>
                <p>絵本を通じて、子どもたちの想像力を育み、アートを通じて感性を磨き、親子で共に成長できる場を提供しています。</p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center text-primary">
                      <i className="ri-book-open-line ri-lg"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold mb-2">絵本セレクト</h3>
                      <p className="text-sm">専門家が厳選した良質な絵本をご紹介</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center text-primary">
                      <i className="ri-palette-line ri-lg"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold mb-2">アート体験</h3>
                      <p className="text-sm">感性を育むアートプログラム</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center text-primary">
                      <i className="ri-group-line ri-lg"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold mb-2">コミュニティ</h3>
                      <p className="text-sm">親子の学び合いの場を提供</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center text-primary">
                      <i className="ri-store-line ri-lg"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold mb-2">直営店PICO</h3>
                      <p className="text-sm">リアルな体験の場を展開</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20warm%20and%20inviting%20scene%20of%20parents%20and%20children%20engaged%20in%20creative%20activities%20together%20in%20a%20modern%2C%20well-lit%20space.%20The%20environment%20features%20bookshelves%20with%20childrens%20books%2C%20art%20supplies%2C%20and%20comfortable%20seating%20areas.%20Natural%20lighting%20and%20contemporary%20Japanese%20interior%20design%20elements.&width=600&height=400&seq=21&orientation=landscape" 
                alt="親子の時間研究所の活動" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* おかいものセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">おかいもの</h2>
            <a href="#" className="text-primary font-medium flex items-center">
              商品一覧へ
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href="https://shop.oyakonojikanlabo.jp/products/4560453177828">
                <img 
                  src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/039840db66e0b48510d5918393f62451.jpeg" 
                  alt="絵本の靴下" 
                  className="w-full h-64 object-cover object-center"
                />
              </a>
              <div className="p-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full mb-2">新商品</span>
                <h3 className="text-lg font-bold mb-2">もりのともだち キッズソックス</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,200</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  商品詳細
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href="https://shop.oyakonojikanlabo.jp/products/4560453185571">
                <img 
                  src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/1f4ea3b18144ce790c07c76e60afc568.jpeg" 
                  alt="絵本" 
                  className="w-full h-64 object-cover object-center"
                />
              </a>
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-2">人気商品</span>
                <h3 className="text-lg font-bold mb-2">おやすみ、ぞうさん（サイン入り）</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,650</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  商品詳細
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20framed%20illustration%20from%20a%20childrens%20book%2C%20showing%20a%20beautiful%20artwork%20suitable%20for%20a%20childs%20room.%20The%20frame%20should%20be%20simple%20and%20elegant%2C%20and%20the%20image%20should%20be%20photographed%20against%20a%20clean%20background.&width=300&height=300&seq=13&orientation=squarish" 
                alt="原画" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full mb-2">限定品</span>
                <h3 className="text-lg font-bold mb-2">「森のどうぶつたち」原画プリント</h3>
                <p className="text-gray-700 font-bold mb-3">¥8,800</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  商品詳細
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20wooden%20educational%20toy%20for%20children%2C%20such%20as%20alphabet%20blocks%20or%20a%20puzzle%2C%20photographed%20on%20a%20clean%20white%20background.%20The%20toy%20should%20look%20high-quality%20and%20designed%20for%20learning%20through%20play.&width=300&height=300&seq=14&orientation=squarish" 
                alt="知育玩具" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full mb-2">おすすめ</span>
                <h3 className="text-lg font-bold mb-2">木製 ひらがなブロック 50ピース</h3>
                <p className="text-gray-700 font-bold mb-3">¥3,980</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  商品詳細
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 豊中PICOバナー */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/4d75a49af6fc29ff5c1b0b5c783a3be8.jpeg" 
                  alt="豊中PICO" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">PICO豊中</h2>
                <p className="text-lg text-gray-600 mb-6">大阪豊中市の直営店です。絵本や絵本グッズの販売に加え、読み聞かせや作家との交流イベント、アート原画の展示も開催。親子はもちろん、大人の方だけでもゆっくり楽しめる空間です。</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-primary">
                      <i className="ri-book-open-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">絵本サロン＆カフェ</h3>
                      <p className="text-sm text-gray-600">1,000冊以上の絵本が並ぶ専門書店</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-primary">
                      <i className="ri-palette-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">キッズスクール</h3>
                      <p className="text-sm text-gray-600">創造性を育む子ども向けプログラム</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-primary">
                      <i className="ri-cup-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">カルチャースクール</h3>
                      <p className="text-sm text-gray-600">大人もPICO！地域密着型カルチャースクール。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-primary">
                      <i className="ri-store-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">レンタルスペース</h3>
                      <p className="text-sm text-gray-600">イベントや教室に利用可能な空間</p>
                    </div>
                  </div>
                </div>
                <a href="/pico" className="bg-primary text-white px-6 py-3 font-medium self-start rounded-button whitespace-nowrap inline-block">
                  詳しく見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PICOイベント */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-store-2-line text-2xl text-primary"></i>
            </div>
            <h2 className="text-3xl font-bold">PICOイベント</h2>
          </div>
          <p className="text-gray-600 mb-12">直営店PICOが企画・運営するイベント情報！</p>
          <div className="bg-orange-50 rounded-lg p-8">
            <div className="flex justify-between items-start mb-4">
              <img 
                src="https://public.readdy.ai/ai/img_res/4597b7b6-0a80-4b78-9762-15f8d7532fe9.png" 
                alt="PICO豊中" 
                className="h-16"
              />
            </div>
            <p className="text-gray-600 mb-8">豊中市にある絵本とアートの複合施設。絵本の販売、展示会、ワークショップなど、様々な文化イベントを開催しています。</p>
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child]:min-[600px]:col-span-2 [&>*:last-child]:lg:col-span-1">
              <a href="#" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <img 
                    src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/30e5f268453d5644679393e8b3b473c7.jpeg" 
                    alt="たなかしん作品展" 
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-3">たなかしん作品展【守りたいもの】</h4>
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full mb-4">開催中</span>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-calendar-line"></i>
                        </div>
                        <span>2025年05月30日 〜 07月13日</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <img 
                    src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/bf36d3a66d2c4495d815daab6a95c131.png" 
                    alt="ひびのこえ展覧会 2025" 
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-3">ひびのこえ展覧会 2025</h4>
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full mb-4">開催中</span>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-calendar-line"></i>
                        </div>
                        <span>2025年06月06日 〜 06月22日</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <img 
                    src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/c745886ed760cdcb14b3e397f0746449.png" 
                    alt="蓮尾佳由 個展" 
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-3">蓮尾佳由 個展</h4>
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full mb-4">開催中</span>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-calendar-line"></i>
                        </div>
                        <span>2025年06月06日 〜 06月25日</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center mt-8">
              <a href="/pico" className="inline-flex items-center text-primary hover:text-primary/80">
                PICOでのイベントを見る
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* コラボレーションバナー */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-[400px] md:h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%20dreamy%20and%20artistic%20scene%20of%20a%20Japanese%20illustrator%20working%20in%20a%20modern%20studio%20with%20traditional%20elements%2C%20soft%20natural%20lighting%2C%20and%20creative%20atmosphere.%20The%20composition%20shows%20both%20traditional%20art%20materials%20and%20digital%20tools%2C%20with%20a%20warm%20color%20palette%20and%20professional%20setting.&width=800&height=400&seq=19&orientation=landscape" 
                alt="イラストレーターコラボ" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-white/90 text-primary px-3 py-1 text-sm rounded-full mb-3">コラボレーション</span>
                  <h3 className="text-2xl font-bold text-white mb-2">佐々木彩子の世界展</h3>
                  <p className="text-white/90">人気イラストレーターとのスペシャルコラボレーション。限定グッズや直筆サイン会も開催。</p>
                </div>
                <button className="bg-white text-primary px-6 py-2 rounded-button whitespace-nowrap self-start hover:bg-yellow-300 hover:text-white transition-all duration-300">
                  詳しく見る
                </button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-[400px] md:h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 z-10"></div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%20cozy%20and%20inviting%20scene%20of%20a%20childrens%20book%20author%20reading%20to%20a%20group%20of%20children%20in%20a%20modern%20library%20setting.%20The%20space%20features%20contemporary%20design%20with%20warm%20lighting%2C%20comfortable%20seating%2C%20and%20bookshelves.%20The%20atmosphere%20is%20engaging%20and%20interactive.&width=800&height=400&seq=20&orientation=landscape" 
                alt="作家コラボ" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-white/90 text-secondary px-3 py-1 text-sm rounded-full mb-3">特別企画</span>
                  <h3 className="text-2xl font-bold text-white mb-2">絵本作家 中村至男と描く</h3>
                  <p className="text-white/90">ベストセラー作家による特別ワークショップ。子どもたちと一緒に物語を作り上げます。</p>
                </div>
                <button className="bg-white text-secondary px-6 py-2 rounded-button whitespace-nowrap self-start hover:bg-primary hover:text-white transition-all duration-300">
                  詳しくみる
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-2xl mx-4 overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">ワークショップ予約</h3>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-close-line ri-lg"></i>
                  </div>
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 text-sm" 
                      placeholder="山田 花子"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お子様の年齢</label>
                    <input 
                      type="number" 
                      required 
                      min="0" 
                      max="12" 
                      value={formData.childAge}
                      onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 text-sm" 
                      placeholder="6"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">連絡先（メールアドレス）</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 text-sm" 
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">参加人数</label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">大人</span>
                    <select 
                      required 
                      value={formData.adultCount}
                      onChange={(e) => setFormData({...formData, adultCount: e.target.value})}
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 text-sm"
                    >
                      <option value="1">1名</option>
                      <option value="2">2名</option>
                      <option value="3">3名</option>
                    </select>
                    <span className="text-sm">子ども</span>
                    <select 
                      required 
                      value={formData.childCount}
                      onChange={(e) => setFormData({...formData, childCount: e.target.value})}
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 text-sm"
                    >
                      <option value="1">1名</option>
                      <option value="2">2名</option>
                      <option value="3">3名</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">開催日時</label>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm">2025年6月25日(水) 10:00〜12:00</p>
                    <p className="text-sm text-gray-500 mt-1">※当日は10分前までにお越しください</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">注意事項</h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
                    <p>・キャンセルは3日前までにご連絡ください</p>
                    <p>・汚れても良い服装でお越しください</p>
                    <p>・アレルギーをお持ちの方は事前にご相談ください</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    required 
                    checked={formData.privacy}
                    onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                    className="mt-1"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    <a href="#" className="text-primary hover:underline">プライバシーポリシー</a>に同意します
                  </label>
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-button whitespace-nowrap hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-primary text-white rounded-button whitespace-nowrap hover:bg-primary/90"
                >
                  予約を確定する
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};