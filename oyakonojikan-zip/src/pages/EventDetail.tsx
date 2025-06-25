import React, { useState } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Breadcrumb } from '../components/common/Breadcrumb';

export const EventDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const breadcrumbItems = [
    { label: 'イベント', href: '/events' },
    { label: '近畿' },
    { label: '大阪府' },
    { label: '山田太郎さんサイン会' }
  ];

  return (
    <DefaultLayout>
      <Breadcrumb items={breadcrumbItems} />
      
      {/* イベント詳細ヘッダー */}
      <section className="hero-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <a href="/events" className="inline-flex items-center text-gray-600 hover:text-primary mb-4">
                <div className="w-5 h-5 flex items-center justify-center mr-1">
                  <i className="ri-arrow-left-line"></i>
                </div>
                イベント一覧に戻る
              </a>
              <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">2025年6月8日 14:00-16:00</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">絵本作家 山田太郎さん<br />サイン会</h1>
              <p className="text-lg text-gray-700 mb-8">人気絵本「もりのともだち」シリーズの作者、山田太郎さんによるサイン会を開催します。新刊「もりのともだち おおきなき」の読み聞かせも行います。子どもから大人まで楽しめるイベントです。</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-calendar-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">開催日時・連絡先</h3>
                  </div>
                  <p className="text-gray-600 mb-2">2025年6月8日（日）<br />14:00～16:00</p>
                  <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-store-2-line"></i>
                    </div>お問い合わせ
                  </a>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">開催場所</h3>
                  </div>
                  <p className="text-gray-600 mb-2">カルチャー＆ブックカフェPICO<br />イベントスペース</p>
                  <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-map-2-line"></i>
                    </div>
                    Googleマップで見る
                  </a>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-money-yen-circle-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">参加費</h3>
                  </div>
                  <p className="text-gray-600">無料<br />※書籍購入者優先</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-group-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">枠</h3>
                  </div>
                  <p className="text-gray-600">30名<br />（要事前予約）</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="bg-primary text-white px-8 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors flex-1 flex justify-center items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-calendar-check-line"></i>
                    </div>
                    予約する
                  </a>
                  <button className="border border-primary text-primary px-8 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors flex items-center justify-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-share-line"></i>
                    </div>
                    シェアする
                  </button>
                </div>
                <a href="#" className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-500 rounded-full flex-shrink-0">
                    <i className="ri-star-line ri-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">🌟 お客様の声をぜひお聞かせください！</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">サービスにご満足いただけましたら、ぜひGoogle口コミにご協力をお願いします。皆さまからの温かいご意見が、私たちの励みになります！</p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-gray-400 flex-shrink-0">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <div 
                    className="flex transition-transform duration-300" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    <img 
                      src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/d61e47a17561ebb345d8e7e62074495d.jpeg" 
                      alt="山田太郎さんサイン会" 
                      className="w-full h-auto flex-shrink-0"
                    />
                    <img 
                      src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/be2213dde77967281858da36b2342cff.jpeg" 
                      alt="山田太郎さんサイン会の様子" 
                      className="w-full h-auto flex-shrink-0"
                    />
                  </div>
                </div>
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <i className="ri-arrow-left-s-line ri-2x"></i>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <i className="ri-arrow-right-s-line ri-2x"></i>
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[...Array(totalSlides)].map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full bg-white ${currentSlide === index ? 'opacity-100' : 'opacity-60'} hover:opacity-100 transition-opacity`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* イベント詳細情報 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">イベント詳細</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    人気絵本作家の山田太郎さんをお招きし、サイン会を開催します。新刊「もりのともだち おおきなき」の出版を記念して、絵本の読み聞かせや創作秘話のトークセッションも予定しています。山田さんの温かな世界観に触れる貴重な機会です。お子様から大人まで、絵本ファンの皆様のご参加をお待ちしています。
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">タイムスケジュール</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">14:00～14:15</span>
                        <span className="text-gray-700">開場・ご挨拶</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">14:15～14:45</span>
                        <span className="text-gray-700">新刊「もりのともだち おおきなき」読み聞かせ</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">14:45～15:15</span>
                        <span className="text-gray-700">山田太郎さんトークセッション（創作秘話・質問タイム）</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">15:15～16:00</span>
                        <span className="text-gray-700">サイン会</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">参加特典</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">山田太郎さん直筆サイン入り新刊「もりのともだち おおきなき」をご購入いただけます</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">オリジナルしおりプレゼント（先着30名様）</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">山田太郎さんとの記念撮影（書籍購入者限定）</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">持ち物</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">予約確認メール（印刷したもの、またはスマートフォンでの表示）</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">サインをご希望の方は、山田太郎さんの著書（既刊をお持ちの方）</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">注意事項</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">サインは、お一人様2冊までとさせていただきます</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">イベント中の写真撮影は、記念撮影の時間以外はご遠慮ください</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">当日は13:45より受付を開始します。開始10分前までにお越しください</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">予約状況により、当日参加も可能ですが、事前予約の方を優先させていただきます</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 作家プロフィール */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">作家プロフィール</h2>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3">
                      <img 
                        src="https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520of%2520a%2520friendly%2520Japanese%2520male%2520children%2527s%2520book%2520author%2520in%2520his%252040s%2520with%2520a%2520warm%2520smile.%2520He%2520is%2520wearing%2520casual%2520but%2520smart%2520attire%2520and%2520has%2520a%2520kind%252C%2520approachable%2520expression.%2520The%2520background%2520is%2520simple%2520and%2520neutral%252C%2520focusing%2520on%2520his%2520friendly%2520face.%2520The%2520image%2520has%2520professional%2520lighting%2520and%2520a%2520clean%252C%2520modern%2520look.&width=300&height=400&seq=1002&orientation=portrait" 
                        alt="山田太郎" 
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <h3 className="text-xl font-bold mb-3">山田 太郎（やまだ たろう）</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        1980年大阪府生まれ。絵本作家、イラストレーター。大学で美術を学んだ後、出版社で編集者として勤務。2010年に独立し、絵本作家としてデビュー。代表作「もりのともだち」シリーズは累計50万部を超えるベストセラーとなり、「日本絵本賞」「講談社出版文化賞」など数々の賞を受賞。温かみのある絵と、子どもの心に寄り添うストーリーが特徴で、国内外で高い評価を得ている。近年は絵本創作ワークショップも積極的に開催し、次世代の育成にも力を入れている。
                      </p>
                      <h4 className="font-bold mb-2">代表作</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="text-gray-700">「もりのともだち」シリーズ（全6巻）</li>
                        <li className="text-gray-700">「おばけのトントン」</li>
                        <li className="text-gray-700">「ぼくのいえ きみのいえ」</li>
                        <li className="text-gray-700">「まちのおと」</li>
                      </ul>
                      <div className="flex space-x-4">
                        <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                          <div className="w-5 h-5 flex items-center justify-center mr-1">
                            <i className="ri-global-line"></i>
                          </div>
                          公式サイト
                        </a>
                        <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                          <div className="w-5 h-5 flex items-center justify-center mr-1">
                            <i className="ri-twitter-x-line"></i>
                          </div>
                          Twitter
                        </a>
                        <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                          <div className="w-5 h-5 flex items-center justify-center mr-1">
                            <i className="ri-instagram-line"></i>
                          </div>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 関連書籍情報 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">関連書籍</h2>
                  <h3 className="text-xl font-bold mb-4">新刊</h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="w-full md:w-1/3">
                      <img 
                        src="https://readdy.ai/api/search-image?query=A%2520children%2527s%2520picture%2520book%2520cover%2520featuring%2520a%2520large%2520tree%2520with%2520friendly%2520forest%2520animals%2520gathered%2520around%2520it.%2520The%2520illustration%2520style%2520is%2520warm%2520and%2520inviting%2520with%2520soft%2520colors.%2520The%2520book%2520appears%2520to%2520be%2520titled%2520%2522Forest%2520Friends%253A%2520The%2520Big%2520Tree%2522%2520in%2520Japanese.%2520The%2520cover%2520design%2520is%2520professional%2520and%2520appealing%2520to%2520children.&width=300&height=400&seq=1003&orientation=portrait" 
                        alt="もりのともだち おおきなき" 
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h4 className="text-lg font-bold mb-2">もりのともだち おおきなき</h4>
                      <p className="text-sm text-gray-500 mb-3">作・絵：山田太郎 / 出版社：はるかぜ出版 / 2025年5月発売</p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        「もりのともだち」シリーズ最新作。森の中心にそびえる大きな木を舞台に、動物たちの友情と助け合いを描いた心温まる物語。季節の移り変わりとともに変化する大きな木と、そこに集まる動物たちの暮らしを通して、自然との共生や命のつながりを優しく伝えます。山田太郎さんの繊細なタッチで描かれた美しい森の風景と、個性豊かな動物たちの表情が魅力的な一冊です。
                      </p>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-fill"></i>
                        </div>
                        <span className="ml-2 text-gray-600">4.8/5.0（32件のレビュー）</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">1,650円（税込）</span>
                        <button className="bg-primary text-white px-6 py-2 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                          購入する
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">その他の作品</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="book-card bg-white rounded-lg shadow-sm overflow-hidden group relative">
                      <img 
                        src="https://readdy.ai/api/search-image?query=A%2520children%2527s%2520picture%2520book%2520cover%2520showing%2520various%2520forest%2520animals%2520playing%2520together%2520in%2520a%2520woodland%2520setting.%2520The%2520illustration%2520style%2520is%2520warm%2520and%2520inviting%2520with%2520soft%2520colors.%2520The%2520book%2520appears%2520to%2520be%2520titled%2520%2522Forest%2520Friends%2522%2520in%2520Japanese.%2520The%2520cover%2520design%2520is%2520professional%2520and%2520appealing%2520to%2520children.&width=300&height=400&seq=1004&orientation=portrait" 
                        alt="もりのともだち" 
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <h4 className="font-bold mb-1">もりのともだち</h4>
                        <p className="text-sm text-gray-600">1,430円（税込）</p>
                      </div>
                      <div className="book-hover absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300">
                        <button className="bg-white text-primary px-4 py-2 rounded-button font-medium">
                          詳細を見る
                        </button>
                      </div>
                    </div>
                    <div className="book-card bg-white rounded-lg shadow-sm overflow-hidden group relative">
                      <img 
                        src="https://readdy.ai/api/search-image?query=A%2520children%2527s%2520picture%2520book%2520cover%2520showing%2520forest%2520animals%2520gathering%2520food%2520in%2520autumn.%2520The%2520illustration%2520style%2520is%2520warm%2520and%2520inviting%2520with%2520soft%2520fall%2520colors.%2520The%2520book%2520appears%2520to%2520be%2520titled%2520%2522Forest%2520Friends%253A%2520Autumn%2520Harvest%2522%2520in%2520Japanese.%2520The%2520cover%2520design%2520is%2520professional%2520and%2520appealing%2520to%2520children.&width=300&height=400&seq=1005&orientation=portrait" 
                        alt="もりのともだち あきのおくりもの" 
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <h4 className="font-bold mb-1">もりのともだち あきのおくりもの</h4>
                        <p className="text-sm text-gray-600">1,430円（税込）</p>
                      </div>
                      <div className="book-hover absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300">
                        <button className="bg-white text-primary px-4 py-2 rounded-button font-medium">
                          詳細を見る
                        </button>
                      </div>
                    </div>
                    <div className="book-card bg-white rounded-lg shadow-sm overflow-hidden group relative">
                      <img 
                        src="https://readdy.ai/api/search-image?query=A%2520children%2527s%2520picture%2520book%2520cover%2520showing%2520forest%2520animals%2520playing%2520in%2520snow.%2520The%2520illustration%2520style%2520is%2520warm%2520and%2520inviting%2520with%2520soft%2520winter%2520colors.%2520The%2520book%2520appears%2520to%2520be%2520titled%2520%2522Forest%2520Friends%253A%2520Winter%2520Fun%2522%2520in%2520Japanese.%2520The%2520cover%2520design%2520is%2520professional%2520and%2520appealing%2520to%2520children.&width=300&height=400&seq=1006&orientation=portrait" 
                        alt="もりのともだち ふゆのあそび" 
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <h4 className="font-bold mb-1">もりのともだち ふゆのあそび</h4>
                        <p className="text-sm text-gray-600">1,430円（税込）</p>
                      </div>
                      <div className="book-hover absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300">
                        <button className="bg-white text-primary px-4 py-2 rounded-button font-medium">
                          詳細を見る
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* サイドバー */}
            <div className="w-full md:w-1/3">
              {/* 予約フォーム */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-primary text-white p-4">
                  <h2 className="text-xl font-bold">イベント予約</h2>
                </div>
                <div className="p-6">
                  <iframe src="https://forms.gle/GPRBKmtyWnMbKBkC9" className="w-full h-[800px] border-none"></iframe>
                </div>
              </div>
              
              {/* お問い合わせ情報 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">お問い合わせ</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-phone-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">電話</h3>
                        <p className="text-gray-600">06-XXXX-XXXX</p>
                        <p className="text-sm text-gray-500">（受付時間：10:00-18:00 ※月曜定休）</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-mail-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">メール</h3>
                        <p className="text-gray-600">event@toyonaka-pico.jp</p>
                        <p className="text-sm text-gray-500">（24時間受付・返信は営業時間内）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 関連イベント */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">関連イベント</h2>
                  <div className="space-y-4">
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 flex flex-col items-center justify-center bg-primary/90 text-white rounded-lg mr-4 flex-shrink-0">
                        <span className="text-xs">6月</span>
                        <span className="text-lg font-bold">15</span>
                      </div>
                      <div>
                        <h4 className="font-bold">親子で楽しむ絵本ワークショップ</h4>
                        <p className="text-sm text-gray-600">絵本の世界から広がる創作活動を親子で楽しみましょう。</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 flex flex-col items-center justify-center bg-primary/90 text-white rounded-lg mr-4 flex-shrink-0">
                        <span className="text-xs">6月</span>
                        <span className="text-lg font-bold">21</span>
                      </div>
                      <div>
                        <h4 className="font-bold">大人のための絵本講座</h4>
                        <p className="text-sm text-gray-600">絵本の奥深さを知り、大人の視点から絵本を楽しむ講座です。</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 flex flex-col items-center justify-center bg-primary/90 text-white rounded-lg mr-4 flex-shrink-0">
                        <span className="text-xs">6月</span>
                        <span className="text-lg font-bold">29</span>
                      </div>
                      <div>
                        <h4 className="font-bold">季節の絵本フェア</h4>
                        <p className="text-sm text-gray-600">夏をテーマにした絵本を集めた特別フェアを開催します。</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a href="/events" className="inline-flex items-center text-primary font-medium hover:underline">
                      すべてのイベントを見る
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};