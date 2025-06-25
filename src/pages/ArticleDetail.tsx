import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { fetchGraphQL } from '@/lib/graphql';
import { GET_ARTICLE_BY_ID } from '@/lib/queries/getArticleById';

interface Tag {
  name: string;
  slug: string;
}

interface ArticleData {
  id: string;
  databaseId: number;
  title: string;
  date: string;
  content: string;
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
  author: {
    node: {
      name: string;
      description: string;
      avatar: {
        url: string;
      }
    }
  };
}

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        console.log("Fetching article with ID:", id);
        
        // WordPressのGraphQLはBase64エンコードされたIDを使用
        // IDタイプをIDに設定し、そのままIDを渡す
        const data = await fetchGraphQL(GET_ARTICLE_BY_ID, { id });
        console.log("GraphQL response:", data);
        
        if (data && data.post) {
          setArticle(data.post);
          
          // Fetch related articles based on tags or categories
          // This would be a separate query in a real implementation
          setRelatedArticles([
            {
              id: '1',
              title: 'ヨシタケシンスケさんと考える「絵本の可能性」',
              date: '2025年6月10日',
              excerpt: '人気絵本作家ヨシタケシンスケさんによる特別ワークショップのレポート。子どもたちと一緒に「もしも」の世界を描きました。',
              image: 'https://readdy.ai/api/search-image?query=A%2520professional%2520photograph%2520of%2520a%2520Japanese%2520male%2520children%2527s%2520book%2520author%2520in%2520his%252040s%2520engaged%2520in%2520a%2520creative%2520workshop%2520with%2520children.%2520He%2520is%2520showing%2520them%2520how%2520to%2520draw%2520or%2520illustrate%2520in%2520a%2520bright%252C%2520colorful%2520classroom%2520setting.%2520The%2520atmosphere%2520is%2520educational%2520and%2520fun%252C%2520with%2520children%2527s%2520artwork%2520visible%2520in%2520the%2520background.&width=400&height=250&seq=9&orientation=landscape',
              category: { name: 'イベントレポート', color: 'blue' }
            },
            {
              id: '2',
              title: '子どもに読んであげたい人気絵本シリーズ10選',
              date: '2025年5月25日',
              excerpt: '長く愛され続ける絵本シリーズを厳選してご紹介。「くれよんのくろくん」や「そらまめくん」シリーズも含む必読の作品たち。',
              image: 'https://readdy.ai/api/search-image?query=A%2520colorful%2520display%2520of%2520children%2527s%2520books%2520featuring%2520bean%2520characters%2520and%2520crayon%2520characters%252C%2520arranged%2520attractively%2520in%2520a%2520bookstore%2520or%2520library%2520setting.%2520The%2520books%2520are%2520prominently%2520displayed%2520with%2520related%2520merchandise%2520like%2520stuffed%2520toys%2520of%2520the%2520characters.%2520The%2520setting%2520is%2520bright%2520and%2520inviting%2520with%2520good%2520lighting%2520to%2520showcase%2520the%2520vibrant%2520book%2520covers.&width=400&height=250&seq=10&orientation=landscape',
              category: { name: '特集', color: 'green' }
            },
            {
              id: '3',
              title: '絵本の読み聞かせで大切にしたい5つのこと',
              date: '2025年6月5日',
              excerpt: '子どもの想像力と言語能力を育む読み聞かせ。効果を最大限に引き出すためのポイントを専門家が解説します。',
              image: 'https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520engaging%2520scene%2520of%2520a%2520parent%2520reading%2520a%2520picture%2520book%2520to%2520a%2520child%2520in%2520a%2520cozy%2520home%2520setting.%2520The%2520parent%2520and%2520child%2520are%2520sitting%2520together%2520on%2520a%2520comfortable%2520couch%2520or%2520reading%2520nook%2520with%2520soft%2520lighting.%2520Bookshelves%2520with%2520children%2527s%2520books%2520are%2520visible%2520in%2520the%2520background.%2520The%2520atmosphere%2520conveys%2520the%2520special%2520bond%2520created%2520during%2520reading%2520time.&width=400&height=250&seq=11&orientation=landscape',
              category: { name: 'コラム', color: 'purple' }
            }
          ]);
        } else {
          setError('記事データが見つかりませんでした。');
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('記事の取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  // Helper function to determine tag color based on slug
  const getTagColor = (tagSlug: string): string => {
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

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </DefaultLayout>
    );
  }

  if (error || !article) {
    return (
      <DefaultLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 text-red-800 p-6 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">エラーが発生しました</h2>
            <p>{error || '記事が見つかりませんでした。'}</p>
            <Link to="/" className="inline-flex items-center mt-4 text-primary">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <i className="ri-arrow-left-line"></i>
              </div>
              ホームに戻る
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {/* 記事ヘッダー */}
      <section className="pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-primary">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <i className="ri-arrow-left-line"></i>
              </div>
              <span>特集一覧に戻る</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categories?.nodes?.map((category, index) => (
              <span key={`cat-${index}`} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">
                {category.name}
              </span>
            ))}
            {article.tags?.nodes?.map((tag, index) => {
              const color = getTagColor(tag.slug);
              return (
                <span key={`tag-${index}`} className={`inline-block bg-${color}-100 text-${color}-800 px-3 py-1 text-xs rounded-full`}>
                  {tag.name}
                </span>
              );
            })}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img 
                src={article.author?.node?.avatar?.url || "https://readdy.ai/api/search-image?query=A%2520professional%2520headshot%2520of%2520a%2520female%2520Japanese%2520editor%2520in%2520her%252030s%2520with%2520short%2520black%2520hair%2520and%2520glasses%252C%2520looking%2520confident%2520and%2520approachable%2520against%2520a%2520neutral%2520background.%2520The%2520photo%2520should%2520be%2520well-lit%2520with%2520soft%2520lighting%2520and%2520professional%2520quality.&width=200&height=200&seq=1&orientation=squarish"} 
                alt={article.author?.node?.name || "編集部"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{article.author?.node?.name || "編集部"}</p>
              <p className="text-sm text-gray-500">{formatDate(article.date)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* メイン画像 */}
      <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden relative">
        <img 
          src={article.featuredImage?.node?.sourceUrl || "https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520inviting%2520interview%2520setting%2520with%2520a%2520famous%2520Japanese%2520children%2527s%2520book%2520author%2520and%2520illustrator%2520showing%2520her%2520artwork%2520and%2520books%2520to%2520an%2520interviewer.%2520The%2520space%2520has%2520natural%2520lighting%252C%2520bookshelves%2520with%2520colorful%2520children%2527s%2520books%252C%2520and%2520art%2520supplies.%2520The%2520atmosphere%2520is%2520creative%2520and%2520professional%2520with%2520a%2520touch%2520of%2520whimsy.&width=1200&height=600&seq=2&orientation=landscape"} 
          alt={article.featuredImage?.node?.altText || article.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 記事本文 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* SNSシェアボタン */}
            <div className="flex items-center justify-end space-x-4 mb-8">
              <span className="text-sm text-gray-500">シェアする：</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href={`https://line.me/R/msg/text/?${encodeURIComponent(article.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#06C755] text-white">
                <i className="ri-line-fill"></i>
              </a>
            </div>

            {/* 記事導入部 */}
            <div className="mb-10">
              <div 
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.excerpt }}
              />
            </div>

            {/* 記事本文 */}
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* 著者プロフィール */}
            {article.author?.node && (
              <div className="mt-16 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={article.author.node.avatar?.url || "https://readdy.ai/api/search-image?query=A%2520professional%2520headshot%2520of%2520a%2520female%2520Japanese%2520children%2527s%2520book%2520author%2520and%2520illustrator%2520in%2520her%252050s%2520with%2520a%2520warm%2520smile%2520and%2520creative%2520appearance.%2520She%2520has%2520medium-length%2520black%2520hair%2520and%2520is%2520wearing%2520casual%2520but%2520professional%2520attire.%2520The%2520background%2520is%2520simple%2520and%2520neutral%252C%2520and%2520the%2520lighting%2520is%2520soft%2520and%2520flattering.&width=200&height=200&seq=8&orientation=squarish"} 
                      alt={article.author.node.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{article.author.node.name}</h3>
                    <p className="text-gray-600 mb-3">{article.author.node.description}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-primary hover:underline">公式サイト</a>
                      <a href="#" className="text-primary hover:underline">Twitter</a>
                      <a href="#" className="text-primary hover:underline">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SNSシェアボタン（下部） */}
            <div className="flex items-center justify-center space-x-4 mt-12 border-t border-b border-gray-200 py-6">
              <span className="text-gray-500">この記事をシェアする：</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href={`https://line.me/R/msg/text/?${encodeURIComponent(article.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#06C755] text-white">
                <i className="ri-line-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <a key={index} href="#" className="block group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title} 
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <span className={`inline-block bg-${relatedArticle.category.color}-100 text-${relatedArticle.category.color}-800 px-3 py-1 text-xs rounded-full mb-3`}>
                      {relatedArticle.category.name}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{relatedArticle.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedArticle.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{relatedArticle.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ商品 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">おすすめ商品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520Japanese%2520children%2527s%2520picture%2520book%2520featuring%2520a%2520black%2520crayon%2520character%2520on%2520the%2520cover.%2520The%2520book%2520is%2520displayed%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520cover%2520is%2520colorful%2520and%2520appealing%2520to%2520children%2520with%2520a%2520simple%2520illustration%2520style.&width=300&height=300&seq=12&orientation=squarish" 
                alt="くれよんのくろくん" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-2">ベストセラー</span>
                <h3 className="text-lg font-bold mb-2">くれよんのくろくん</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,320</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520Japanese%2520children%2527s%2520picture%2520book%2520featuring%2520a%2520cute%2520bean%2520character%2520on%2520the%2520cover.%2520The%2520book%2520is%2520displayed%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520cover%2520is%2520colorful%2520and%2520appealing%2520to%2520children%2520with%2520a%2520simple%2520illustration%2520style.&width=300&height=300&seq=13&orientation=squarish" 
                alt="そらまめくんのベッド" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full mb-2">人気商品</span>
                <h3 className="text-lg font-bold mb-2">そらまめくんのベッド</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,320</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520cute%2520plush%2520toy%2520of%2520a%2520black%2520crayon%2520character%2520from%2520a%2520Japanese%2520children%2527s%2520book.%2520The%2520plush%2520toy%2520is%2520displayed%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520toy%2520has%2520a%2520simple%2520design%2520with%2520embroidered%2520features%2520and%2520is%2520made%2520of%2520soft%2520fabric.&width=300&height=300&seq=14&orientation=squarish" 
                alt="くろくんぬいぐるみ" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full mb-2">限定品</span>
                <h3 className="text-lg font-bold mb-2">くろくん ぬいぐるみ</h3>
                <p className="text-gray-700 font-bold mb-3">¥2,750</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520set%2520of%2520colorful%2520children%2527s%2520socks%2520featuring%2520crayon%2520characters%2520from%2520a%2520Japanese%2520picture%2520book.%2520The%2520socks%2520are%2520arranged%2520neatly%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520socks%2520have%2520cute%2520designs%2520and%2520bright%2520colors%2520appealing%2520to%2520children.&width=300&height=300&seq=15&orientation=squarish" 
                alt="くれよんのくろくん靴下" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full mb-2">新商品</span>
                <h3 className="text-lg font-bold mb-2">くれよんのくろくん 靴下</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,100</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
          </div>
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