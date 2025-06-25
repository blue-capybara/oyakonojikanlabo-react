import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface HeaderProps {
  color?: 'red' | 'orange' | 'teal';
}

export const Header: React.FC<HeaderProps> = ({ color = 'red' }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const bg = {
    red: 'bg-brand-red',
    orange: 'bg-brand-orange',
    teal: 'bg-brand-teal'
  }[color];

  const sampleResults = [
    { title: 'ヨシタケシンスケさんとのミニトーク', type: 'イベント', date: '2025-06-19' },
    { title: '絵本作家 佐藤まりこさんインタビュー', type: '記事', date: '2025-06-05' },
    { title: '「もりのともだち」シリーズ特集', type: '特集', date: '2025-06-10' },
    { title: '夏休み親子ワークショップ', type: 'イベント', date: '2025-07-01' },
    { title: '2025年上半期 注目の新刊絵本5選', type: 'レビュー', date: '2025-06-10' }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = sampleResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.type.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <header className={clsx(bg, 'text-white fixed top-0 left-0 right-0 z-50 shadow-md')}>
      <div className="container mx-auto px-4">
        <div className="py-3 flex justify-between items-center">
          <div className="w-24"></div>
          <h1 className="flex justify-center">
            <Link to="/">
              <img 
                src="https://public.readdy.ai/ai/img_res/f99757ef-08c3-43d5-b778-d956445f2972.png" 
                alt="親子の時間研究所" 
                className="h-8 w-auto"
              />
            </Link>
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-200"
              >
                <i className="ri-search-line ri-lg"></i>
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg p-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="キーワードを入力" 
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 text-gray-800"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400">
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                  {searchQuery.length > 0 && (
                    <div className="mt-4 max-h-80 overflow-y-auto">
                      <div className="space-y-4">
                        <div className="border-b pb-2">
                          <h4 className="text-sm font-medium text-gray-900 mb-1">カテゴリー</h4>
                          <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-primary hover:text-white">絵本</button>
                            <button className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-primary hover:text-white">イベント</button>
                            <button className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-primary hover:text-white">インタビュー</button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-gray-900">検索結果</h4>
                          <div>
                            {searchResults.length > 0 ? (
                              searchResults.map((result, index) => (
                                <a key={index} href="#" className="block p-3 hover:bg-gray-50 rounded-lg">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h5 className="text-sm font-medium text-gray-900">{result.title}</h5>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500">{result.type}</span>
                                        <span className="text-xs text-gray-400">{result.date}</span>
                                      </div>
                                    </div>
                                    <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                                      <i className="ri-arrow-right-line"></i>
                                    </div>
                                  </div>
                                </a>
                              ))
                            ) : (
                              <p className="text-sm text-gray-500 p-3">検索結果が見つかりませんでした</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-user-line ri-lg"></i>
            </div>
          </div>
        </div>
        <nav className="flex justify-center space-x-6 sm:space-x-12 py-3">
          <a href="https://shop.oyakonojikanlabo.jp/" className="text-white hover:text-gray-200 font-medium text-sm tracking-tighter whitespace-nowrap px-2">おかいもの</a>
          <a href="https://ehonyasan-moe.oyakonojikanlabo.jp/socks/" className="text-white hover:text-gray-200 font-medium text-sm tracking-tighter whitespace-nowrap px-2">絵本のくつした</a>
          <Link to="/events" className="text-white hover:text-gray-200 font-medium text-sm tracking-tighter whitespace-nowrap px-2">イベント</Link>
          <Link to="/pico" className="text-white hover:text-gray-200 font-medium text-sm tracking-tighter whitespace-nowrap px-2">PICO豊中</Link>
        </nav>
      </div>
    </header>
  );
};