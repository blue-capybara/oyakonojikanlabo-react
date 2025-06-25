import React, { useState } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Link } from 'react-router-dom';

export const YogaCourse: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const breadcrumbItems = [
    { label: 'ホーム', href: '/' },
    { label: '豊中PICO', href: '/pico' },
    { label: 'カルチャーサークル＆スクールPICO', href: '/culture' },
    { label: 'エイジレス・ヨガ' }
  ];

  return (
    <DefaultLayout theme="culture">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* イベント詳細ヘッダー */}
      <section className="hero-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Link to="/culture" className="inline-flex items-center text-gray-600 hover:text-primary mb-4">
                <div className="w-5 h-5 flex items-center justify-center mr-1">
                  <i className="ri-arrow-left-line"></i>
                </div>
                カルチャーサークル＆スクールPICO
                に戻る
              </Link>
              <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">2025年6月より新規開講</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">エイジレス・ヨガ<br />～心と体の若さを保つ～</h1>
              <p className="text-lg text-gray-700 mb-8">年齢を重ねても楽しく続けられるヨガクラスです。呼吸法とやさしいポーズを組み合わせて、柔軟性と筋力を無理なく向上させます。心身の健康維持に役立つプログラムを、少人数制で丁寧に指導いたします。</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-calendar-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">開講日時</h3>
                  </div>
                  <p className="text-gray-600 mb-2">毎週火曜日・金曜日<br />朝クラス：9:30～10:45<br />昼クラス：11:00～12:15<br />夕クラス：18:30～19:45</p>
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
                  <p className="text-gray-600 mb-2">豊中PICO カルチャースクール<br />アートスタジオ</p>
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
                    <h3 className="font-bold text-gray-800">受講料</h3>
                  </div>
                  <p className="text-gray-600">月額 7,700円（税込）<br />※ヨガマットレンタル無料</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-group-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">定員</h3>
                  </div>
                  <p className="text-gray-600">各クラス12名<br />（先着順）</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="bg-primary text-white px-8 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors flex-1 flex justify-center items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-calendar-check-line"></i>
                    </div>
                    無料体験お申込み
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
                    <p className="text-gray-600 text-sm leading-relaxed">私たちのサービスにご満足いただけましたら、ぜひGoogle口コミにご協力をお願いします。皆さまからの温かいご意見が、私たちの励みになります！</p>
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
                      src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/b43238d65703b6c37b252ca7691ddf63.jpeg" 
                      alt="エイジレス・ヨガ" 
                      className="w-full h-auto flex-shrink-0"
                    />
                    <img 
                      src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/e5410bca94199904b1cf19b292dfea5b.jpeg" 
                      alt="エイジレス・ヨガの様子" 
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
                  <h2 className="text-2xl font-bold mb-4">講座詳細</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    年齢や体力に合わせて無理なく楽しめるヨガプログラムです。呼吸法を基本に、ゆっくりとしたペースで体を動かしていきます。柔軟性の向上や筋力維持だけでなく、心の安定やストレス解消にも効果的です。経験豊富なインストラクターが、一人ひとりの体調や体力に合わせて丁寧にサポートいたします。
                  </p>
                  <h3 className="text-xl font-bold mb-3">こんな方におすすめです</h3>
                  <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 whitespace-nowrap">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full flex-shrink-0">
                        <i className="ri-heart-pulse-line"></i>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-sm">健康維持を目指す方</h4>
                        <p className="text-gray-700 text-xs">運動不足解消</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 whitespace-nowrap">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full flex-shrink-0">
                        <i className="ri-mental-health-line"></i>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-sm">ストレス解消したい方</h4>
                        <p className="text-gray-700 text-xs">心身のリフレッシュ</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 whitespace-nowrap">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full flex-shrink-0">
                        <i className="ri-body-scan-line"></i>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-sm">姿勢改善したい方</h4>
                        <p className="text-gray-700 text-xs">体の歪み改善</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 whitespace-nowrap">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full flex-shrink-0">
                        <i className="ri-group-line"></i>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-sm">仲間と楽しみたい方</h4>
                        <p className="text-gray-700 text-xs">健康的な趣味作り</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">カリキュラム・内容</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">基礎編</span>
                        <span className="text-gray-700">呼吸法の基本、やさしいストレッチ、座位のポーズ</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">バランス編</span>
                        <span className="text-gray-700">立位のポーズ、バランス力向上、体幹強化</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">リラックス編</span>
                        <span className="text-gray-700">メディテーション、リストラティブヨガ、自律神経の調整</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-24 flex-shrink-0">実践編</span>
                        <span className="text-gray-700">フローヨガ、シニアヨガ、季節に応じたプログラム</span>
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
                        <span className="text-gray-700">動きやすい服装（ジャージ、レギンスなど）</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">タオル、飲み物</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <span className="text-gray-700">ヨガマット（レンタル無料）</span>
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
                        <span className="text-gray-700">体調がすぐれない場合は、無理せずお休みください</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">食事は、レッスン開始2時間前までにお済ませください</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">開始10分前までにお越しください。準備体操から始めます</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-information-line"></i>
                        </div>
                        <span className="text-gray-700">持病のある方は、事前に担当インストラクターにご相談ください</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 受講者の声 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">受講者の声</h2>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                      </div>
                      <span className="text-gray-600">4.8/5.0（28件）</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-user-smile-line text-primary ri-xl"></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold">佐藤 美咲さん（42歳）</h3>
                            <span className="text-gray-500 text-sm">2025年5月</span>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                          </div>
                          <p className="text-gray-700 leading-relaxed">年齢や体力に不安がありましたが、丁寧な指導のおかげで安心して参加できています。ゆっくりとしたペースで無理なく体を動かせるので、体が硬い私でも楽しく続けられています。特に呼吸法を意識することで、日常生活でもリラックスできるようになりました。</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-user-smile-line text-primary ri-xl"></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold">中村 健一さん（65歳）</h3>
                            <span className="text-gray-500 text-sm">2025年4月</span>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                          </div>
                          <p className="text-gray-700 leading-relaxed">退職後の健康維持のために始めましたが、予想以上に充実した時間を過ごせています。同年代の方々との交流も楽しく、毎回のレッスンが待ち遠しいです。肩こりや腰痛が改善され、姿勢も良くなってきたと家族にも言われました。</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-user-smile-line text-primary ri-xl"></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold">山本 恵子さん（58歳）</h3>
                            <span className="text-gray-500 text-sm">2025年4月</span>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                          </div>
                          <p className="text-gray-700 leading-relaxed">インストラクターの方の説明がとても分かりやすく、初心者の私でも安心して参加できています。少人数制なので、一人一人の体調や体力に合わせて指導していただけるのが嬉しいです。継続することで、体が少しずつ柔らかくなってきているのを実感しています。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center justify-center">
                      すべての口コミを見る
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* サイドバー */}
            <div className="w-full md:w-1/3">
              {/* 予約フォーム */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-primary text-white p-4">
                  <h2 className="text-xl font-bold">無料体験お申込み</h2>
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
              
              {/* 関連スクール */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">関連スクール</h2>
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
                    <Link to="/culture" className="inline-flex items-center text-primary font-medium hover:underline">
                      すべてのスクールを見る
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </Link>
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