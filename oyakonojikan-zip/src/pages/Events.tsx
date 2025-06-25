import React, { useState } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';

export const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [searchOpen, setSearchOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('全国');

  return (
    <DefaultLayout>
      {/* ページヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center text-gray-600 hover:text-primary">
            <div className="w-5 h-5 flex items-center justify-center mr-1">
              <i className="ri-arrow-left-line"></i>
            </div>
            <span>戻る</span>
          </a>
          <h1 className="text-xl font-bold">イベント情報</h1>
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-8 h-8 flex items-center justify-center text-gray-600"
          >
            <i className="ri-search-line ri-lg"></i>
          </button>
        </div>
      </div>

      {/* 検索バー */}
      {searchOpen && (
        <div className="bg-white shadow-md py-4 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
              <div className="w-5 h-5 flex items-center justify-center text-gray-400 mr-2">
                <i className="ri-search-line"></i>
              </div>
              <input type="text" placeholder="イベントを検索" className="w-full bg-transparent border-none text-sm" />
            </div>
          </div>
        </div>
      )}

      {/* フィルターセクション */}
      <div className="bg-white shadow-sm sticky top-24 z-10">
        <div className="container mx-auto px-4 py-3">
          {/* カテゴリータグ */}
          <div className="category-scroll overflow-x-auto whitespace-nowrap pb-2 mb-3">
            <div className="inline-flex space-x-2">
              <button className="bg-primary text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">全て</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">作家イベント</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">原画展</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">読み聞かせ</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">ワークショップ</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">トークイベント</button>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">サイン会</button>
            </div>
          </div>
          
          {/* 表示切替と地域選択 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-full p-1">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-list-check"></i>
                  </div>
                </button>
                <button 
                  onClick={() => setViewMode('calendar')}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${viewMode === 'calendar' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-calendar-line"></i>
                  </div>
                </button>
              </div>
              <div className="relative">
                <button 
                  onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                  className="flex items-center text-sm font-medium bg-white border border-gray-200 rounded-lg px-3 py-1.5"
                >
                  <span>{selectedRegion}</span>
                  <div className="w-5 h-5 flex items-center justify-center ml-1">
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </button>
                {regionDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg w-48 z-20">
                    <ul className="py-1">
                      {['全国', '北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄'].map((region) => (
                        <li key={region}>
                          <button 
                            onClick={() => {
                              setSelectedRegion(region);
                              setRegionDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                          >
                            {region}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span>最新順</span>
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* イベントリスト表示 */}
      {viewMode === 'list' && (
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            {/* イベント1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative">
                  <div className="aspect-[3/2] w-full">
                    <img 
                      src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/bf36d3a66d2c4495d815daab6a95c131.png" 
                      alt="山田ゆうこさん 絵本読み聞かせ会" 
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 text-xs rounded-full">作家イベント</span>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">読み聞かせ</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">山田ゆうこさん 絵本読み聞かせ会</h2>
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
                    <span>東京都 | 丸の内ブックセンター</span>
                  </div>
                  <p className="text-gray-600 mb-4">人気絵本作家の山田ゆうこさんによる読み聞かせイベント。新作「もりのなかまたち」の朗読と、子どもたちとの交流会を行います。サイン会も予定しています。</p>
                  <a href="#" className="inline-block bg-primary text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>

            {/* イベント2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative">
                  <div className="aspect-[3/2] w-full">
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20Japanese%20art%20gallery%20exhibition%20featuring%20original%20illustrations%20from%20childrens%20picture%20books.%20The%20gallery%20has%20white%20walls%20with%20framed%20colorful%20artwork%20displayed%20at%20eye%20level.%20Visitors%20are%20viewing%20the%20illustrations%20with%20interest.%20The%20lighting%20is%20professional%20and%20highlights%20the%20artwork%20beautifully.&width=600&height=400&seq=2&orientation=landscape" 
                      alt="「動物たちの世界」絵本原画展" 
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">原画展</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">「動物たちの世界」絵本原画展</h2>
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
                    <span>大阪府 | 大阪市立美術館</span>
                  </div>
                  <p className="text-gray-600 mb-4">人気絵本作家5名による動物をテーマにした原画展。普段は見ることのできない制作過程の資料や、未公開作品も展示します。会期中には作家によるギャラリートークも開催予定です。</p>
                  <a href="#" className="inline-block bg-primary text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>

            {/* もっと見るボタン */}
            <div className="flex justify-center mt-8">
              <button className="bg-white text-primary border border-primary px-8 py-3 rounded-button whitespace-nowrap hover:bg-gray-50 transition-colors">
                もっと見る
              </button>
            </div>
          </div>
        </div>
      )}

      {/* カレンダー表示 */}
      {viewMode === 'calendar' && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* カレンダーヘッダー */}
            <div className="flex justify-between items-center mb-6">
              <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full">
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <h2 className="text-xl font-bold">2025年 6月</h2>
              <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
            
            {/* 曜日ヘッダー */}
            <div className="grid grid-cols-7 text-center mb-2">
              <div className="text-red-500 font-medium">日</div>
              <div className="font-medium">月</div>
              <div className="font-medium">火</div>
              <div className="font-medium">水</div>
              <div className="font-medium">木</div>
              <div className="font-medium">金</div>
              <div className="text-blue-500 font-medium">土</div>
            </div>
            
            {/* カレンダー本体 */}
            <div className="grid grid-cols-7 gap-1">
              {/* 前月分 */}
              <div className="calendar-day flex items-center justify-center text-gray-400">26</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">27</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">28</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">29</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">30</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">31</div>
              
              {/* 6月分 */}
              <div className="calendar-day flex items-center justify-center text-blue-500">1</div>
              <div className="calendar-day flex items-center justify-center">2</div>
              <div className="calendar-day flex items-center justify-center">3</div>
              <div className="calendar-day flex items-center justify-center">4</div>
              <div className="calendar-day flex items-center justify-center">5</div>
              <div className="calendar-day flex items-center justify-center has-event relative">6</div>
              <div className="calendar-day flex items-center justify-center text-blue-500 has-event relative">7</div>
              <div className="calendar-day flex items-center justify-center text-red-500">8</div>
              <div className="calendar-day flex items-center justify-center">9</div>
              <div className="calendar-day flex items-center justify-center has-event relative">10</div>
              <div className="calendar-day flex items-center justify-center">11</div>
              <div className="calendar-day flex items-center justify-center">12</div>
              <div className="calendar-day flex items-center justify-center">13</div>
              <div className="calendar-day flex items-center justify-center text-blue-500">14</div>
              <div className="calendar-day flex items-center justify-center text-red-500">15</div>
              <div className="calendar-day flex items-center justify-center">16</div>
              <div className="calendar-day flex items-center justify-center">17</div>
              <div className="calendar-day flex items-center justify-center">18</div>
              <div className="calendar-day flex items-center justify-center">19</div>
              <div className="calendar-day flex items-center justify-center has-event relative">20</div>
              <div className="calendar-day flex items-center justify-center text-blue-500">21</div>
              <div className="calendar-day flex items-center justify-center text-red-500">22</div>
              <div className="calendar-day flex items-center justify-center">23</div>
              <div className="calendar-day flex items-center justify-center">24</div>
              <div className="calendar-day flex items-center justify-center has-event relative">25</div>
              <div className="calendar-day flex items-center justify-center">26</div>
              <div className="calendar-day flex items-center justify-center">27</div>
              <div className="calendar-day flex items-center justify-center text-blue-500">28</div>
              <div className="calendar-day flex items-center justify-center text-red-500">29</div>
              <div className="calendar-day flex items-center justify-center has-event relative">30</div>
              
              {/* 翌月分 */}
              <div className="calendar-day flex items-center justify-center text-gray-400">1</div>
              <div className="calendar-day flex items-center justify-center text-gray-400 has-event relative">2</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">3</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">4</div>
              <div className="calendar-day flex items-center justify-center text-gray-400">5</div>
            </div>
            
            {/* 選択日のイベント一覧 */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">6月20日のイベント</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 text-xs rounded-full">作家イベント</span>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">読み聞かせ</span>
                  </div>
                  <h4 className="font-bold mb-2">山田ゆうこさん 絵本読み聞かせ会</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    <span>14:00〜15:30</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <span>東京都 | 丸の内ブックセンター</span>
                  </div>
                  <a href="#" className="text-primary font-medium flex items-center mt-2">
                    詳細を見る
                    <div className="w-5 h-5 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* イベント掲載募集 */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">イベント掲載店を募集します</h2>
                <p className="text-gray-600 mb-6">絵本作家、書店、図書館、美術館などの皆様からのイベント情報を募集しています。読み聞かせ会、原画展、ワークショップなど、絵本に関するイベントをお持ちの方は、ぜひご登録ください。</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">掲載無料</h3>
                      <p className="text-sm text-gray-500">イベント情報の掲載は完全無料です</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">簡単登録</h3>
                      <p className="text-sm text-gray-500">必要事項を入力するだけで掲載できます</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">幅広い発信</h3>
                      <p className="text-sm text-gray-500">全国の絵本ファンにイベントをお届けします</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <a href="#" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors w-full md:w-auto">
                  <span className="mr-2">イベントを掲載する</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};