import React from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';

export const Pico: React.FC = () => {
  return (
    <DefaultLayout theme="pico">
      {/* PICO豊中 セクション */}
      <section className="py-16 bg-gray-50">
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
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-brand-orange">
                      <i className="ri-book-open-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">絵本サロン＆カフェ</h3>
                      <p className="text-sm text-gray-600">1,000冊以上の絵本が並ぶ専門書店</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-brand-orange">
                      <i className="ri-palette-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">キッズスクール</h3>
                      <p className="text-sm text-gray-600">創造性を育む子ども向けプログラム</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-brand-orange">
                      <i className="ri-cup-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">カルチャースクール</h3>
                      <p className="text-sm text-gray-600">大人もPICO！地域密着型カルチャースクール。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-brand-orange">
                      <i className="ri-store-line"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">レンタルスペース</h3>
                      <p className="text-sm text-gray-600">イベントや教室に利用可能な空間</p>
                    </div>
                  </div>
                </div>
                <a href="#" className="bg-brand-orange text-white px-6 py-3 font-medium self-start rounded-button whitespace-nowrap inline-block">
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
              <i className="ri-store-2-line text-2xl text-brand-orange"></i>
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
              <a href="#" className="inline-flex items-center text-brand-orange hover:text-brand-orange/80">
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
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/90 to-brand-orange/70 z-10"></div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%20dreamy%20and%20artistic%20scene%20of%20a%20Japanese%20illustrator%20working%20in%20a%20modern%20studio%20with%20traditional%20elements%2C%20soft%20natural%20lighting%2C%20and%20creative%20atmosphere.%20The%20composition%20shows%20both%20traditional%20art%20materials%20and%20digital%20tools%2C%20with%20a%20warm%20color%20palette%20and%20professional%20setting.&width=800&height=400&seq=19&orientation=landscape" 
                alt="イラストレーターコラボ" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-white/90 text-brand-orange px-3 py-1 text-sm rounded-full mb-3">コラボレーション</span>
                  <h3 className="text-2xl font-bold text-white mb-2">佐々木彩子の世界展</h3>
                  <p className="text-white/90">人気イラストレーターとのスペシャルコラボレーション。限定グッズや直筆サイン会も開催。</p>
                </div>
                <button className="bg-white text-brand-orange px-6 py-2 rounded-button whitespace-nowrap self-start hover:bg-yellow-300 hover:text-white transition-all duration-300">
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
                <button className="bg-white text-secondary px-6 py-2 rounded-button whitespace-nowrap self-start hover:bg-brand-orange hover:text-white transition-all duration-300">
                  詳しくみる
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};