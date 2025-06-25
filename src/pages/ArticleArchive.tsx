import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { fetchGraphQL } from '@/lib/graphql';
import { GET_ALL_POSTS } from '@/lib/queries/getAllPosts';

interface Tag {
  name: string;
  slug: string;
}

interface Post {
  id: string;
  databaseId: number;
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

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export const ArticleArchive: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo>({ hasNextPage: false, endCursor: '' });

  const fetchPosts = async (cursor?: string) => {
    try {
      const isInitialLoad = !cursor;
      if (isInitialLoad) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const data = await fetchGraphQL(GET_ALL_POSTS, { 
        first: 12, // 一度に取得する記事数
        after: cursor || null 
      });
      
      if (data && data.posts) {
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
        
        if (isInitialLoad) {
          setArticles(formattedArticles);
        } else {
          setArticles(prev => [...prev, ...formattedArticles]);
        }
        
        setPageInfo({
          hasNextPage: data.posts.pageInfo.hasNextPage,
          endCursor: data.posts.pageInfo.endCursor
        });
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('記事の取得に失敗しました。');
      
      // エラー時にダミーデータを表示（本番環境では削除）
      if (!articles.length) {
        setArticles(getDummyArticles());
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
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
    
    if (tagColors[tagSlug]) {
      return tagColors[tagSlug];
    }
    
    // Simple hash function to generate consistent colors for tags
    const hash = tagSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
    return colors[hash % colors.length];
  };

  // ダミーデータ（API取得失敗時用）
  const getDummyArticles = () => {
    return [
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
      {
        id: '4',
        title: 'ヨシタケシンスケさんと考える「絵本の可能性」',
        date: '2025年6月10日',
        description: '人気絵本作家ヨシタケシンスケさんによる特別ワークショップのレポート。子どもたちと一緒に「もしも」の世界を描きました。',
        image: 'https://readdy.ai/api/search-image?query=A%2520professional%2520photograph%2520of%2520a%2520Japanese%2520male%2520children%2527s%2520book%2520author%2520in%2520his%252040s%2520engaged%2520in%2520a%2520creative%2520workshop%2520with%2520children.%2520He%2520is%2520showing%2520them%2520how%2520to%2520draw%2520or%2520illustrate%2520in%2520a%2520bright%252C%2520colorful%2520classroom%2520setting.%2520The%2520atmosphere%2520is%2520educational%2520and%2520fun%252C%2520with%2520children%2527s%2520artwork%2520visible%2520in%2520the%2520background.&width=400&height=250&seq=9&orientation=landscape',
        category: { name: 'イベントレポート', color: 'blue' }
      },
      {
        id: '5',
        title: '子どもに読んであげたい人気絵本シリーズ10選',
        date: '2025年5月25日',
        description: '長く愛され続ける絵本シリーズを厳選してご紹介。「くれよんのくろくん」や「そらまめくん」シリーズも含む必読の作品たち。',
        image: 'https://readdy.ai/api/search-image?query=A%2520colorful%2520display%2520of%2520children%2527s%2520books%2520featuring%2520bean%2520characters%2520and%2520crayon%2520characters%252C%2520arranged%2520attractively%2520in%2520a%2520bookstore%2520or%2520library%2520setting.%2520The%2520books%2520are%2520prominently%2520displayed%2520with%2520related%2520merchandise%2520like%2520stuffed%2520toys%2520of%2520the%2520characters.%2520The%2520setting%2520is%2520bright%2520and%2520inviting%2520with%2520good%2520lighting%2520to%2520showcase%2520the%2520vibrant%2520book%2520covers.&width=400&height=250&seq=10&orientation=landscape',
        category: { name: '特集', color: 'green' }
      },
      {
        id: '6',
        title: '絵本の読み聞かせで大切にしたい5つのこと',
        date: '2025年6月5日',
        description: '子どもの想像力と言語能力を育む読み聞かせ。効果を最大限に引き出すためのポイントを専門家が解説します。',
        image: 'https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520engaging%2520scene%2520of%2520a%2520parent%2520reading%2520a%2520picture%2520book%2520to%2520a%2520child%2520in%2520a%2520cozy%2520home%2520setting.%2520The%2520parent%2520and%2520child%2520are%2520sitting%2520together%2520on%2520a%2520comfortable%2520couch%2520or%2520reading%2520nook%2520with%2520soft%2520lighting.%2520Bookshelves%2520with%2520children%2527s%2520books%2520are%2520visible%2520in%2520the%2520background.%2520The%2520atmosphere%2520conveys%2520the%2520special%2520bond%2520created%2520during%2520reading%2520time.&width=400&height=250&seq=11&orientation=landscape',
        category: { name: 'コラム', color: 'purple' }
      },
    ];
  };

  const handleLoadMore = () => {
    if (pageInfo.hasNextPage) {
      fetchPosts(pageInfo.endCursor);
    }
  };

  return (
    <DefaultLayout>
      {/* ページヘッダー */}
      <section className="pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-primary">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <i className="ri-arrow-left-line"></i>
              </div>
              <span>ホームに戻る</span>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">記事一覧</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            親子の時間研究所が厳選した、絵本や子育てに関する記事をご紹介します。
            作家インタビュー、絵本レビュー、読み聞かせのコツなど、親子の時間を豊かにする情報が満載です。
          </p>
        </div>
      </section>

      {/* フィルターセクション */}
      <div className="bg-white shadow-sm sticky top-24 z-10">
        <div className="container mx-auto px-4 py-3">
          {/* カテゴリータグ */}
          <div className="category-scroll overflow-x-auto whitespace-nowrap pb-2">
            <div className="inline-flex space-x-2">
              <button className="bg-primary text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">全て</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">インタビュー</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">コラム</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">レビュー</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">特集</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">イベントレポート</button>
            </div>
          </div>
        </div>
      </div>

      {/* 記事一覧 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading && !loadingMore ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error && articles.length === 0 ? (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg text-center">
              {error}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {articles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
              
              {/* もっと見るボタン */}
              {(pageInfo.hasNextPage || loadingMore) && (
                <div className="flex justify-center mt-12">
                  <button 
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className={`inline-flex items-center px-8 py-3 rounded-button whitespace-nowrap ${
                      loadingMore 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-white text-primary border border-primary hover:bg-gray-50'
                    }`}
                  >
                    {loadingMore ? (
                      <>
                        <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-t-transparent border-primary"></div>
                        読み込み中...
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-refresh-line"></i>
                        </div>
                        もっと見る
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ニュースレター登録 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">親子の時間研究所ニュースレター会員（無料）</h2>
            <p className="mb-8">新作絵本やグッズのご紹介や作家インタビュー、お住まいの地域でのイベント案内など、カルチャーあふれるニュースレターを定期的にお届けします。</p>
            <form className="flex flex-col gap-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="メールアドレス" 
                  required 
                  className="px-4 py-3 rounded-lg border-none text-gray-800 w-full text-sm" 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <select 
                  name="prefecture" 
                  required 
                  className="px-4 py-3 rounded-lg border-none text-gray-800 w-full sm:w-40 text-sm appearance-none pr-8 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5H7z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-[calc(100%-8px)_center] bg-no-repeat"
                >
                  <option value="" disabled selected>都道府県</option>
                  <option value="北海道">北海道</option>
                  <option value="青森県">青森県</option>
                  <option value="岩手県">岩手県</option>
                  <option value="宮城県">宮城県</option>
                  <option value="秋田県">秋田県</option>
                  <option value="山形県">山形県</option>
                  <option value="福島県">福島県</option>
                  <option value="茨城県">茨城県</option>
                  <option value="栃木県">栃木県</option>
                  <option value="群馬県">群馬県</option>
                  <option value="埼玉県">埼玉県</option>
                  <option value="千葉県">千葉県</option>
                  <option value="東京都">東京都</option>
                  <option value="神奈川県">神奈川県</option>
                  <option value="新潟県">新潟県</option>
                  <option value="富山県">富山県</option>
                  <option value="石川県">石川県</option>
                  <option value="福井県">福井県</option>
                  <option value="山梨県">山梨県</option>
                  <option value="長野県">長野県</option>
                  <option value="岐阜県">岐阜県</option>
                  <option value="静岡県">静岡県</option>
                  <option value="愛知県">愛知県</option>
                  <option value="三重県">三重県</option>
                  <option value="滋賀県">滋賀県</option>
                  <option value="京都府">京都府</option>
                  <option value="大阪府">大阪府</option>
                  <option value="兵庫県">兵庫県</option>
                  <option value="奈良県">奈良県</option>
                  <option value="和歌山県">和歌山県</option>
                  <option value="鳥取県">鳥取県</option>
                  <option value="島根県">島根県</option>
                  <option value="岡山県">岡山県</option>
                  <option value="広島県">広島県</option>
                  <option value="山口県">山口県</option>
                  <option value="徳島県">徳島県</option>
                  <option value="香川県">香川県</option>
                  <option value="愛媛県">愛媛県</option>
                  <option value="高知県">高知県</option>
                  <option value="福岡県">福岡県</option>
                  <option value="佐賀県">佐賀県</option>
                  <option value="長崎県">長崎県</option>
                  <option value="熊本県">熊本県</option>
                  <option value="大分県">大分県</option>
                  <option value="宮崎県">宮崎県</option>
                  <option value="鹿児島県">鹿児島県</option>
                  <option value="沖縄県">沖縄県</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 hover:text-white transition-colors duration-300 whitespace-nowrap rounded-button"
              >
                登録する
              </button>
            </form>
            <p className="text-sm mt-4 text-white/80">※登録は無料です。いつでも解除できます。</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};