import React from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Link } from 'react-router-dom';

export const CompanyProfile: React.FC = () => {
  return (
    <DefaultLayout>
      {/* 会社概要ヘッダー */}
      <section className="company-header py-16 relative">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520inviting%2520office%2520space%2520with%2520bookshelves%2520filled%2520with%2520childrens%2520books%252C%2520soft%2520natural%2520lighting%252C%2520wooden%2520furniture%252C%2520and%2520creative%2520workspace.%2520The%2520atmosphere%2520is%2520professional%2520yet%2520cozy%252C%2520perfect%2520for%2520a%2520childrens%2520book%2520publishing%2520company.%2520The%2520image%2520has%2520a%2520warm%2520color%2520palette%2520with%2520soft%2520focus%2520on%2520the%2520background.&width=1920&height=600&seq=1&orientation=landscape" 
            alt="親子の時間研究所オフィス" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <i className="ri-arrow-left-line"></i>
              </div>
              <span>戻る</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">会社概要</h1>
          <p className="text-white text-xl max-w-2xl">遊びを学ぶ。</p>
          <p className="text-white text-lg mt-4 max-w-2xl">私たちは、絵本と知育を通じて、子どもたちの創造性と感性を育みながら、大人も共に学び、成長できる豊かな文化を創造します。</p>
        </div>
      </section>

      {/* メディアコンテンツセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">親子の時間研究所とは</h2>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">親子の時間研究所は、人々が集う「場所」をつくり、<br />「いい時間」を提供するコンテンツやサービスを企画、編集、制作、販売する会社です。</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/c74982b90d7d0f308f80641faf733deb.png" alt="ほぼ日" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">親子の時間研究所</h3>
                    <p className="text-gray-600">「ほぼ日」のウェブサイト、アプリ、リアルイベント「生活のたのしみ展」など、さまざまなメディアを通じて、アート、デザイン、カルチャー、ライフスタイルに関する情報を発信しています。クリエイティブなアイデアと共に、人々の日々の「暮らし」をつくっていきます。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://public.readdy.ai/ai/img_res/913a4a13-87bb-440a-891f-7df6cd44d106.jpg" alt="LIFE=BOOK ほぼ日手帳" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">絵本のくつした</h3>
                    <p className="text-gray-600">「ほぼ日手帳」は2025年版の発売以来、毎年進化し続けるライフツールの集大成です。ビジネスシーンでの「仕事」で使いやすいだけでなく、日々の暮らしの中で「LIFE」のBOOKとして、クリエイティブな発想を刺激し、たくさんの人のヒントになっています。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/9986a5a4f251af58ec8bc67333338f16.png" alt="読書スペース" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">PICO</h3>
                    <p className="text-gray-600">子どもたちが自由に本を手に取り、ゆっくりと読書を楽しめる空間です。快適な座り心地のソファや、温かみのある照明で、リラックスした雰囲気の中で本との出会いを演出します。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/b4ba55a8dd414d9dd52ca1bcffe67f45.png" alt="クリエイティブワークショップ" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">えほんやさんMOE</h3>
                    <p className="text-gray-600">子どもたちの創造性を育むワークショップスペースです。絵本の世界を飛び出して、実際に手を動かし、想像力を形にする体験を提供します。アート、クラフト、音楽など、様々な表現活動を通じて感性を磨きます。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://readdy.ai/api/search-image?query=A%2520modern%2520cafe%2520space%2520with%2520wooden%2520furniture%252C%2520plants%252C%2520and%2520bookshelves.%2520The%2520atmosphere%2520is%2520bright%2520and%2520welcoming%252C%2520perfect%2520for%2520parents%2520and%2520children%2520to%2520spend%2520time%2520together.&width=400&height=400&seq=5&orientation=squarish" alt="カフェスペース" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">SKIP＆LALA</h3>
                    <p className="text-gray-600">親子でゆっくりと過ごせるカフェスペースです。オーガニックドリンクや健康的なスナックを提供し、読書の合間の休憩や、他の家族との交流の場として活用いただけます。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/297ab8644e83e30cdc8487f8cef02bda.jpeg" alt="触れる図鑑" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">触れる図鑑</h3>
                    <p className="text-gray-600">遊びながら学べる知育スペースです。年齢に応じた教育玩具や、想像力を刺激する遊具を用意し、楽しみながら考える力、創造する力を育みます。専門スタッフが子どもたちの成長をサポートします。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/25d98455c5b8d64a365d86ead2e64db3.png" alt="マルチパーパススペース" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Life is Art</h3>
                    <p className="text-gray-600">Life is Art.
                    人生は芸術。唯一無二。
                    同じ人生は二つとない一点もの。
                    作り手の"一点もの"を、あなたの"一点ものの人生"へ届けます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">会社情報</h2>
              <p className="text-gray-600 mt-4">遊びを学びに。親子をもっともっとおもしろくする社会を創ります。</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col items-start mb-8">
                <img src="https://public.readdy.ai/ai/img_res/e00f3a60-5847-48ad-ae9e-f86b6954da96.png" alt="PICO カルチャー&ブックカフェ" className="h-24 mb-6" />
              </div>
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">株式会社親子の時間研究所</h3>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">所在地</div>
                  <div className="w-full md:w-2/3 text-gray-600">〒560-0021 大阪府豊中市本町1-2-3 PICOビル3階</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">設立</div>
                  <div className="w-full md:w-2/3 text-gray-600">2018年4月</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">資本金</div>
                  <div className="w-full md:w-2/3 text-gray-600">1,000万円</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">代表者</div>
                  <div className="w-full md:w-2/3 text-gray-600">代表取締役 塩野竜一</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">従業員数</div>
                  <div className="w-full md:w-2/3 text-gray-600">10名（パート・アルバイト含む）</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">問い合わせ</div>
                  <div className="w-full md:w-2/3 text-gray-600">
                    <a href="mailto:pico@oyakonojikanlabo.jp" className="text-primary hover:underline flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-mail-line"></i>
                      </div>
                      pico@oyakonojikanlabo.jp
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">PICO旗艦店事業</h3>
                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">豊中の地域に根ざし、遊びを通じて学びを育む、新しい形の文化発信拠点</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        <i className="ri-store-2-line text-primary"></i>
                      </div>
                      カルチャー＆ブックストア
                    </h4>
                    <p className="text-gray-600">「遊びながら学ぶ」体験を提供します。厳選された絵本や知育、人々の感性と創造性を育むとともに、大人の方にも新たな発見と学びの喜びをお届けします。</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        <i className="ri-calendar-event-line text-primary"></i>
                      </div>
                      コミュニティ＆カルチャースクール
                    </h4>
                    <p className="text-gray-600">地域の方々と共に創る参加型プログラム。絵本作家との対話、親子で楽しむワークショップに加え、アート、音楽、デザインなど多彩なカルチャースクールを提供します。</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        <i className="ri-home-office-line text-primary"></i>
                      </div>
                      地域の文化拠点
                    </h4>
                    <p className="text-gray-600">大阪豊中市の文化発信基地として、地域の人々が集い、遊び、学びと合える温かな空間を提供します。子どもたちの創造性を育む各種イベントや、地域コミュニティの活動の場を提供いたします。</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        <i className="ri-book-open-line text-primary"></i>
                      </div>
                      絵本サロン
                    </h4>
                    <p className="text-gray-600">専門スタッフがお子様の興味や成長に合わせた絵本選びをサポートし、豊かな読書体験を作ります。季節のイベントや特別講座を通じて、遊びながら文化・芸術に触れる機会を創出しています。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 関連会社セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">関連会社</h2>
              <p className="text-gray-600 mt-4">絵本グッズの企画・製造・流通・販売を手がける関連会社</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col items-center mb-8">
              </div>
              <div className="space-y-8">
                <div>
                  <img src="https://public.readdy.ai/ai/img_res/8cb9be02-af42-4511-97b7-17f5cb2a92e4.png" alt="ライブエンタープライズ" className="h-48 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">株式会社ライブエンタープライズ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">URL</div>
                          <div className="flex-1">
                            <a href="https://liveenterprise.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://liveenterprise.jp/</a>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">所在地</div>
                          <div className="flex-1 text-gray-600">〒167-0034 東京都杉並区桃井1-39-1 キャロット杉並 4階</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">設立</div>
                          <div className="flex-1 text-gray-600">2015年6月</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">資本金</div>
                          <div className="flex-1 text-gray-600">2,000万円</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">代表者</div>
                          <div className="flex-1 text-gray-600">代表取締役 藤井周</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">従業員数</div>
                          <div className="flex-1 text-gray-600">45名</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-24 font-medium text-gray-700">問い合わせ</div>
                          <div className="flex-1">
                            <a href="mailto:info@liveenterprise.co.jp" className="text-primary hover:underline">info@liveenterprise.co.jp</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-8">事業内容</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-2">
                          <i className="ri-store-2-line text-primary"></i>
                        </div>
                        絵本グッズ卸
                      </h4>
                      <p className="text-gray-600">絵本関連グッズの卸売りを行っています。「えほんやさんMOE」は全国1400店舗の書店や雑貨店に売場と商品を提供しています。</p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-2">
                          <i className="ri-shopping-cart-line text-primary"></i>
                        </div>
                        オンラインショップ
                      </h4>
                      <p className="text-gray-600">オンラインストアを運営し、お客様に絵本や関連グッズをお届けしています。</p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-2">
                          <i className="ri-newspaper-line text-primary"></i>
                        </div>
                        メディア掲載・業務提携
                      </h4>
                      <p className="text-gray-600">絵本や子育てに関する情報発信、メディア掲載、広告、スポンサーシップなど、様々な形での協業を行っています。</p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-2">
                          <i className="ri-book-open-line text-primary"></i>
                        </div>
                        絵本事業支援
                      </h4>
                      <p className="text-gray-600">作家、出版社、取次、書店と相談を超えた企画タイアップやイベント支援し（絵本事業と絵本文化の発展）を推進しています。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">お問い合わせ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="mb-8">
                <div className="text-center text-gray-800 space-y-2 mb-8">
                  <p className="text-2xl font-bold mb-6">お問い合わせの種類によって連絡先が異なります</p>
                  <div className="flex flex-col items-center gap-2 mt-4">
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-bold text-lg bg-gray-100">主な内容</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-bold text-lg bg-gray-100">問い合わせ先</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-4 align-top">
                          <p className="font-bold">PICO旗艦店事業</p>
                          <p className="text-sm text-gray-600">・店舗運営<br />・店舗イベント企画<br />・スクール運営<br />・サービス開発</p>
                        </td>
                        <td className="border border-gray-200 px-4 py-4 align-top">
                          <p className="text-xl font-bold text-primary mb-2">豊中直営店舗に関するお問い合わせ</p>
                          <p className="font-bold">株式会社 親子の時間研究所</p>
                          <div className="flex items-center mt-2">
                            <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary">
                              <i className="ri-mail-line"></i>
                            </div>
                            <a href="mailto:pico@oyakonojikanlabo.jp" className="text-primary hover:underline">pico@oyakonojikanlabo.jp</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-4 align-top">
                          <p className="font-bold">対法人事業</p>
                          <p className="text-sm text-gray-600">・絵本グッズ卸事業<br />・オンラインショップ運営<br />・メディア運営<br />・商品企画開発</p>
                        </td>
                        <td className="border border-gray-200 px-4 py-4 align-top">
                          <p className="text-xl font-bold text-primary mb-2">商品について・取材・法人様、その他のお問い合わせ</p>
                          <p className="font-bold">株式会社 ライブエンタープライズ</p>
                          <div className="flex items-center mt-2">
                            <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary">
                              <i className="ri-mail-line"></i>
                            </div>
                            <a href="mailto:info@liveenterprise.co.jp" className="text-primary hover:underline">info@liveenterprise.co.jp</a>
                          </div>
                          <div className="flex items-center mt-2">
                            <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary">
                              <i className="ri-global-line"></i>
                            </div>
                            <a href="https://liveenterprise.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://liveenterprise.jp/</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセスマップセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">アクセス</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="mb-8 h-80 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')" }}></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">株式会社親子の時間研究所</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>〒560-0021</p>
                    <p>大阪府豊中市本町1-2-3 PICOビル3階</p>
                    <p className="mt-4">TEL: 06-1234-5678</p>
                    <p>FAX: 06-1234-5679</p>
                    <div className="mt-6">
                      <h4 className="font-bold mb-2">交通アクセス</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>阪急宝塚線「豊中駅」より徒歩5分</li>
                        <li>大阪モノレール「少路駅」より徒歩15分</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">PICO Toyonaka</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>〒560-0021</p>
                    <p>大阪府豊中市本町1-2-3 PICOビル1階</p>
                    <p className="mt-4">TEL: 06-1234-5677</p>
                    <div className="mt-6">
                      <h4 className="font-bold mb-2">営業時間</h4>
                      <p>10:00〜19:00（年中無休）</p>
                      <p className="text-sm mt-1">※イベント開催日は変更になる場合があります</p>
                    </div>
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