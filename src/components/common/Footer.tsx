import React from 'react';
import clsx from 'clsx';

interface FooterProps {
  color?: 'red' | 'orange' | 'teal';
}

export const Footer: React.FC<FooterProps> = ({ color = 'red' }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">
              <img 
                src="https://public.readdy.ai/ai/img_res/35857e6b-21d5-41ce-9f29-aa2ddfa06fc3.png" 
                alt="親子の時間研究所" 
                className="h-12 w-auto"
              />
            </h3>
            <p className="text-gray-400 mb-4">創造性と感性を育むライフスタイルメディア</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-twitter-x-line ri-lg"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-instagram-line ri-lg"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-facebook-circle-line ri-lg"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-youtube-line ri-lg"></i>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">コンテンツ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">おかいもの</a></li>
              <li><a href="https://ehonyasan-moe.oyakonojikanlabo.jp/socks/" className="text-gray-400 hover:text-white">絵本の靴下</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">イベント</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">豊中PICO</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">絵本サロン</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">キッズスクール</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">カルチャースクール</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">レンタルスペース</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">アクセス</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">企業情報</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">会社概要</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2025 親子の時間研究所 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};