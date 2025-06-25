import React, { useState, useEffect } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Link } from 'react-router-dom';

export const PicoTop: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaqItems, setActiveFaqItems] = useState<string[]>([]);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [eventInfo, setEventInfo] = useState({ title: '', date: '' });
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '', caption: '' });

  const totalSlides = 4; // Total number of slides in the event slider

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleFaqItem = (id: string) => {
    if (activeFaqItems.includes(id)) {
      setActiveFaqItems(activeFaqItems.filter(item => item !== id));
    } else {
      setActiveFaqItems([...activeFaqItems, id]);
    }
  };

  const handleEventDayClick = (event: string, day: string) => {
    setEventInfo({
      title: event,
      date: `2025年6月${day}日`
    });
    setShowEventPopup(true);
  };

  const handleGalleryItemClick = (src: string, alt: string, caption: string) => {
    setModalImage({ src, alt, caption });
    setShowGalleryModal(true);
  };

  return (
    <DefaultLayout theme="pico">
      {/* パンくずリスト */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">ホーム</Link>
            <div className="w-4 h-4 flex items-center justify-center mx-1">
              <i className="ri-arrow-right-s-line"></i>
            </div>
            <span className="font-medium text-gray-800">豊中PICO</span>
          </div>
        </div>
      </div>

      {/* メインビジュアル */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center py-16 min-h-[600px]">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="mb-6">
                <span className="block text-sm text-gray-600 mb-2">
                  <Link to="/" className="hover:text-primary">←HOMEにもどる</Link>
                </span>
                <span className="block text-2xl md:text-3xl font-medium text-gray-800">親子の時間研究所</span>
                <span className="block text-4xl md:text-5xl font-bold mt-3 text-primary">カルチャー＆ブックカフェ<br />PICO</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">絵本とアートが織りなす文化的な複合施設。<br />絵本の販売やアートイベント、ワークショップなど、<br />大人も親子も楽しめる、絵本＆アートカルチャーのお店です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">営業時間</h3>
                  </div>
                  <p className="text-gray-600">10:00 - 18:00</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-calendar-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">定休日</h3>
                  </div>
                  <p className="text-gray-600">月曜日</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-phone-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">電話番号</h3>
                  </div>
                  <p className="text-gray-600">06-XXXX-XXXX</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">住所</h3>
                  </div>
                  <p className="text-gray-600">大阪府豊中市〇〇町X-X-X</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link to="/pico/access">
                  <button className="inline-flex items-center bg-white border border-primary text-primary px-6 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-map-2-line"></i>
                    </div>
                    アクセスマップ
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <Link to="/pico/gallery">
                <img 
                  src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/30e5f268453d5644679393e8b3b473c7.jpeg" 
                  alt="豊中PICO内観" 
                  className="w-full h-auto rounded-2xl shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
              </Link>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-md p-4 max-w-[240px]">
                <div className="flex items-center text-primary mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-check-line"></i>
                  </div>
                  <span className="font-medium">今月のイベント</span>
                </div>
                <p className="text-sm text-gray-600">絵本作家のサイン会や親子ワークショップなど、楽しいイベントを開催中！</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス紹介タブ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">サービス紹介</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b">
              <button 
                className={`tab-button flex-1 py-6 px-6 text-lg font-bold text-center hover:bg-primary/5 transition-colors border-b-4 ${activeTab === 'tab1' ? 'border-primary' : 'border-transparent'} relative group`}
                onClick={() => setActiveTab('tab1')}
              >
                <div className="flex items-center justify-center">
                  <div className={`w-6 h-6 flex items-center justify-center ${activeTab === 'tab1' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'} mr-2`}>
                    <i className="ri-book-open-line"></i>
                  </div>
                  <span>絵本＆カフェ</span>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform ${activeTab === 'tab1' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></div>
              </button>
              <button 
                className={`tab-button flex-1 py-6 px-6 text-lg font-bold text-center hover:bg-primary/5 transition-colors border-b-4 ${activeTab === 'tab3' ? 'border-primary' : 'border-transparent'} relative group`}
                onClick={() => setActiveTab('tab3')}
              >
                <div className="flex items-center justify-center">
                  <div className={`w-6 h-6 flex items-center justify-center ${activeTab === 'tab3' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'} mr-2`}>
                    <i className="ri-palette-line"></i>
                  </div>
                  <span>カルチャーサークル</span>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform ${activeTab === 'tab3' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></div>
              </button>
              <button 
                className={`tab-button flex-1 py-6 px-6 text-lg font-bold text-center hover:bg-primary/5 transition-colors border-b-4 ${activeTab === 'tab2' ? 'border-primary' : 'border-transparent'} relative group`}
                onClick={() => setActiveTab('tab2')}
              >
                <div className="flex items-center justify-center">
                  <div className={`w-6 h-6 flex items-center justify-center ${activeTab === 'tab2' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'} mr-2`}>
                    <i className="ri-parent-line"></i>
                  </div>
                  <span>キッズスクール</span>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform ${activeTab === 'tab2' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></div>
              </button>
              <button 
                className={`tab-button flex-1 py-6 px-6 text-lg font-bold text-center hover:bg-primary/5 transition-colors border-b-4 ${activeTab === 'tab4' ? 'border-primary' : 'border-transparent'} relative group`}
                onClick={() => setActiveTab('tab4')}
              >
                <div className="flex items-center justify-center">
                  <div className={`w-6 h-6 flex items-center justify-center ${activeTab === 'tab4' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'} mr-2`}>
                    <i className="ri-home-4-line"></i>
                  </div>
                  <span>レンタルスペース</span>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform ${activeTab === 'tab4' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></div>
              </button>
            </div>
            <div className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img src="https://readdy.ai/api/search-image?query=A%2520cozy%2520children%2527s%2520bookstore%2520with%2520wooden%2520bookshelves%2520filled%2520with%2520colorful%2520picture%2520books%252C%2520comfortable%2520reading%2520nooks%2520with%2520small%2520chairs%2520and%2520cushions%252C%2520warm%2520lighting%252C%2520and%2520a%2520welcoming%2520atmosphere.%2520The%2520space%2520should%2520look%2520professional%2520and%2520well-organized%252C%2520perfect%2520for%2520children%2520and%2520parents%2520to%2520explore%2520books%2520together.&width=600&height=400&seq=103&orientation=landscape" alt="絵本サロン" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">絵本＆カフェサロン</h3>
                  <p className="text-gray-600 mb-6">1,000冊以上の厳選された絵本や児童書が並ぶ専門書店とカフェを併設。ゆっくりと絵本を楽しみながら、ドリンクをお楽しみいただけます。</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本と絵本アーティストグッズの販売</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本の読み聞かせスペース</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本作家によるサイン会</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本に関する相談・アドバイス</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-4">絵本＆カフェの特徴</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">専門スタッフによる絵本選びのアドバイス</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">季節や年齢に合わせた絵本の特集コーナー</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">親子でゆっくり絵本を楽しめる読書スペース</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-4">定期イベント</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                            <i className="ri-book-open-line"></i>
                          </div>
                          <h5 className="font-bold">おはなし会</h5>
                        </div>
                        <p className="text-gray-600 text-sm">毎週土曜日 11:00-11:30<br />対象年齢：2-4歳</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2">
                            <i className="ri-palette-line"></i>
                          </div>
                          <h5 className="font-bold">絵本づくり教室</h5>
                        </div>
                        <p className="text-gray-600 text-sm">毎月第2週目日 14:00-15:30<br />対象年齢：5-8歳</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-4">利用案内</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-bold text-gray-700">営業時間</p>
                        <p className="text-gray-600">10:00 - 18:00</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">読書カフェスペース利用料</p>
                        <p className="text-gray-600">1時間 500円</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">会員特典</p>
                        <p className="text-gray-600">イベント優先予約<br />絵本10%オフ</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">支払方法</p>
                        <p className="text-gray-600">現金・クレジットカード<br />電子マネー各種</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img src="https://readdy.ai/api/search-image?query=A%2520bright%252C%2520colorful%2520classroom%2520space%2520designed%2520for%2520children%252C%2520with%2520small%2520tables%2520and%2520chairs%252C%2520educational%2520materials%252C%2520art%2520supplies%252C%2520and%2520creative%2520learning%2520tools.%2520The%2520room%2520has%2520good%2520natural%2520lighting%252C%2520cheerful%2520decorations%252C%2520and%2520is%2520set%2520up%2520for%2520workshops%2520or%2520classes.%2520The%2520space%2520looks%2520professional%2520and%2520well-organized.&width=600&height=400&seq=104&orientation=landscape" alt="キッズスクール" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">PICO読書スクール ヨンデミー</h3>
                  <p className="text-gray-600 mb-6">子どもたちの読書習慣を育む、月1回の読書スクールです。本を読む楽しさを知り、継続的な読書習慣を身につけることができます。</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">月額 2,980円で月1回のレッスンとアプリによるレクチャー</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">対象年齢：6歳～12歳</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">継続的な読書習慣の形成</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-4">ヨンデミーの特徴</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">読書を通じた思考力・想像力の育成</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">年齢に合わせた本の選書とガイダンス</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">読書記録の作成と振り返り</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-4">入会案内</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-bold text-gray-700">月会費</p>
                        <p className="text-gray-600">2,980円<br />（教材費込）</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">開催頻度</p>
                        <p className="text-gray-600">月1回<br />（90分/回）</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">対象年齢</p>
                        <p className="text-gray-600">6歳～12歳</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">持ち物</p>
                        <p className="text-gray-600">筆記用具<br />読書ノート</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img src="https://readdy.ai/api/search-image?query=A%2520modern%2520cultural%2520learning%2520space%2520with%2520various%2520creative%2520activities%2520in%2520progress%252C%2520including%2520art%252C%2520crafts%252C%2520and%2520cultural%2520workshops.%2520The%2520space%2520has%2520a%2520professional%2520and%2520welcoming%2520atmosphere%2520with%2520good%2520lighting%2520and%2520comfortable%2520seating%2520arrangements.&width=600&height=400&seq=105&orientation=landscape" alt="カルチャースクール" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">カルチャーサークル＆スクール</h3>
                  <p className="text-gray-600 mb-6">絵本を通じて、芸術、文化、クラフトなど、様々な分野の学びと創造の場を提供しています。子どもから大人まで楽しめる多彩なプログラムをご用意しています。</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本講座「大人のための絵本入門」（月1回）</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本作家・編集者によるトークイベント</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本の読み聞かせ実践講座（全6回）</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">絵本好きのための交流会（隔月開催）</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-4">カルチャーサークルの特徴</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">少人数制で丁寧な指導（1クラス最大12名）</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">経験豊富な講師陣による質の高い講座</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">初心者から上級者まで対応可能なカリキュラム</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-1">
                          <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <p className="text-gray-600">会員同士の交流会や作品展示会の開催</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/culture" className="block bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 transition-all duration-300 rounded-lg p-6 group">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">カルチャーサークル＆スクール</h4>
                          <p className="text-gray-600">講座の詳細や受講案内、スケジュールなど、詳しい情報はこちら</p>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full group-hover:scale-110 transition-transform">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-4">受講案内</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-bold text-gray-700">入会金</p>
                        <p className="text-gray-600">5,000円（無料キャンペーン中！）<br />（年会費無料）</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">体験レッスン</p>
                        <p className="text-gray-600">1回 2,000円<br />（入会時返金）</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">会員特典</p>
                        <p className="text-gray-600">講座優先予約<br /></p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">支払方法</p>
                        <p className="text-gray-600">口座引き落とし<br />クレジットカード</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === 'tab4' ? 'active' : ''}`} id="tab4">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img src="https://readdy.ai/api/search-image?query=A%2520versatile%2520and%2520modern%2520event%2520space%2520with%2520movable%2520furniture%252C%2520good%2520lighting%252C%2520and%2520a%2520clean%2520design.%2520The%2520room%2520should%2520look%2520like%2520it%2520could%2520be%2520configured%2520for%2520different%2520types%2520of%2520events%2520such%2520as%2520workshops%252C%2520meetings%252C%2520or%2520small%2520gatherings.%2520The%2520space%2520appears%2520professional%2520and%2520well-maintained.&width=600&height=400&seq=106&orientation=landscape" alt="レンタルスペース" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">レンタルスペース</h3>
                  <p className="text-gray-600 mb-6">絵本や子どもの文化に関わる活動のためのレンタルスペースを提供しています。ワークショップ、読書会、小規模イベントなど、様々な用途にご利用いただけます。</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">多目的スペース（最大30名収容）</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">プロジェクター、音響設備完備</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">キッチンスペース利用可能</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <i className="ri-check-line ri-lg"></i>
                      </div>
                      <p className="text-gray-700">利用料金：1時間 3,000円〜</p>
                    </div>
                  </div>
                  <div className="space-y-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カルチャーサークル */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">PICOカルチャーサークル＆スクール</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img src="https://readdy.ai/api/search-image?query=A%2520vibrant%2520community%2520space%2520with%2520diverse%2520groups%2520of%2520people%2520engaged%2520in%2520various%2520cultural%2520and%2520hobby%2520activities.%2520The%2520space%2520features%2520different%2520areas%2520for%2520art%252C%2520crafts%252C%2520music%252C%2520and%2520social%2520gatherings.%2520The%2520atmosphere%2520is%2520warm%2520and%2520welcoming%252C%2520showing%2520people%2520of%2520different%2520ages%2520interacting%2520and%2520learning%2520together%2520in%2520a%2520modern%252C%2520well-lit%2520setting.&width=600&height=400&seq=115&orientation=landscape" alt="カルチャーサークル" className="w-full h-[400px] object-cover object-top" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block bg-primary/10 text-primary text-sm px-4 py-1.5 rounded-full mb-4 w-fit">メンバー募集中</span>
              <h3 className="text-2xl font-bold mb-4">地域の皆様の交流と学びの場</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">趣味や学びを通じて、地域の皆様が交流できる場を提供しています。様々な文化活動やサークル活動を通じて、新しい出会いと発見のある豊かな時間をお過ごしください。</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">手芸、料理、園芸など多彩な趣味のサークル活動</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">地域の方々による文化講座や技能交換会</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">季節のイベントや作品展示会の開催</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/culture">
                  <button className="bg-primary text-white px-8 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </button>
                </Link>
                <button className="border border-primary text-primary px-8 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors">
                  無料体験に申し込む
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PICOイベント */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">PICOイベント</h2>
          <div className="relative">
            <div className="event-slider overflow-hidden">
              <div 
                className="event-slider-container flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (window.innerWidth >= 768 ? 33.333 : 100)}%)` }}
              >
                <div className="event-slide w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/d61e47a17561ebb345d8e7e62074495d.jpeg" alt="絵本作家サイン会" className="w-full h-48 object-cover object-top" />
                    <div className="p-6">
                      <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">6月8日 14:00-16:00</span>
                      <h3 className="text-xl font-bold mb-3">絵本作家 山田太郎さん サイン会</h3>
                      <p className="text-gray-600 mb-4">人気絵本「もりのともだち」シリーズの作者によるサイン会を開催。新刊の読み聞かせも行います。</p>
                      <Link to="/events/1">
                        <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">詳細を見る</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="event-slide w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/30e5f268453d5644679393e8b3b473c7.jpeg" alt="親子ワークショップ" className="w-full h-48 object-cover object-top" />
                    <div className="p-6">
                      <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">6月15日 10:30-12:00</span>
                      <h3 className="text-xl font-bold mb-3">たなかしん作品展【守りたいもの】</h3>
                      <p className="text-gray-600 mb-4">絵本の世界から広がる創作活動を親子で楽しみましょう。対象年齢：4-6歳</p>
                      <Link to="/events/2">
                        <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">詳細を見る</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="event-slide w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img src="https://readdy.ai/api/search-image?query=A%2520professional%2520lecture%2520setup%2520for%2520adults%2520with%2520picture%2520books%2520displayed%252C%2520comfortable%2520seating%252C%2520and%2520presentation%2520equipment.%2520The%2520atmosphere%2520is%2520sophisticated%2520and%2520focused%2520on%2520learning.&width=400&height=250&seq=117&orientation=landscape" alt="大人の絵本講座" className="w-full h-48 object-cover object-top" />
                    <div className="p-6">
                      <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">6月21日 19:00-20:30</span>
                      <h3 className="text-xl font-bold mb-3">大人のための絵本講座</h3>
                      <p className="text-gray-600 mb-4">絵本の奥深さを知り、大人の視点から絵本を楽しむ講座です。今回のテーマ：世界の絵本</p>
                      <Link to="/events/3">
                        <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">詳細を見る</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="event-slide w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img src="https://readdy.ai/api/search-image?query=An%2520English%2520storytime%2520session%2520setup%2520with%2520English%2520picture%2520books%252C%2520educational%2520materials%252C%2520and%2520a%2520welcoming%2520reading%2520area.%2520The%2520space%2520looks%2520engaging%2520and%2520perfect%2520for%2520language%2520learning.&width=400&height=250&seq=118&orientation=landscape" alt="英語で楽しむ絵本" className="w-full h-48 object-cover object-top" />
                    <div className="p-6">
                      <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">6月22日 11:00-12:00</span>
                      <h3 className="text-xl font-bold mb-3">英語で楽しむ絵本の時間</h3>
                      <p className="text-gray-600 mb-4">ネイティブ講師と一緒に、英語の絵本を通じて楽しく学びます。対象年齢：5-8歳</p>
                      <Link to="/events/4">
                        <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">詳細を見る</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              className="slider-button prev absolute top-1/2 -translate-y-1/2 -left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <i className="ri-arrow-left-s-line ri-lg"></i>
            </button>
            <button 
              className="slider-button next absolute top-1/2 -translate-y-1/2 -right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - (window.innerWidth >= 768 ? 1 : 3)}
            >
              <i className="ri-arrow-right-s-line ri-lg"></i>
            </button>
          </div>
        </div>
      </section>

      {/* イベントカレンダー */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">PICOイベントカレンダー</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <div className="flex justify-between items-center mb-6">
              <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <h3 className="text-xl font-bold">2025年 6月</h3>
              <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4 text-center">
              <div className="text-sm font-medium text-gray-500">日</div>
              <div className="text-sm font-medium text-gray-500">月</div>
              <div className="text-sm font-medium text-gray-500">火</div>
              <div className="text-sm font-medium text-gray-500">水</div>
              <div className="text-sm font-medium text-gray-500">木</div>
              <div className="text-sm font-medium text-gray-500">金</div>
              <div className="text-sm font-medium text-gray-500">土</div>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-6">
              {/* Calendar days */}
              {Array.from({ length: 42 }).map((_, index) => {
                const day = index - 5; // Adjust for starting on the 26th of previous month
                const displayDay = day <= 0 ? day + 31 : day > 30 ? day - 30 : day;
                const isCurrentMonth = day > 0 && day <= 30;
                const isToday = day === 11;
                const hasEvent = [8, 15, 21, 22, 29].includes(day);
                
                let eventName = '';
                if (day === 8) eventName = '絵本作家 山田太郎さん サイン会';
                else if (day === 15) eventName = '親子で楽しむ絵本ワークショップ';
                else if (day === 21) eventName = '大人のための絵本講座';
                else if (day === 22) eventName = '英語で楽しむ絵本の時間';
                else if (day === 29) eventName = '季節の絵本フェア';
                
                return (
                  <div 
                    key={index}
                    className={`calendar-day ${isToday ? 'today' : ''} ${hasEvent ? 'event-day has-event' : ''} ${!isCurrentMonth ? 'text-gray-400' : ''}`}
                    onClick={() => {
                      if (hasEvent && isCurrentMonth) {
                        handleEventDayClick(eventName, displayDay.toString());
                      }
                    }}
                  >
                    {displayDay}
                  </div>
                );
              })}
            </div>
            {showEventPopup && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold">{eventInfo.title}</h4>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowEventPopup(false)}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-close-line"></i>
                    </div>
                  </button>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{eventInfo.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-time-line"></i>
                  </div>
                  <span>14:00 - 16:00</span>
                </div>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  詳細・予約はこちら
                </button>
              </div>
            )}
            <h3 className="font-bold text-lg mb-4">近日中（開催中含む）のPICOイベント</h3>
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 flex flex-col items-center justify-center bg-primary/90 text-white rounded-lg mr-4 flex-shrink-0">
                  <span className="text-xs">6月</span>
                  <span className="text-lg font-bold">8</span>
                </div>
                <div>
                  <h4 className="font-bold">絵本作家 山田太郎さん サイン会</h4>
                  <p className="text-sm text-gray-600">人気絵本「もりのともだち」シリーズの作者によるサイン会を開催します。</p>
                </div>
              </div>
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
            </div>
            <div className="mt-6 text-center">
              <Link to="/events" className="inline-flex items-center text-primary font-medium hover:underline">
                すべてのイベントを見る
                <div className="w-5 h-5 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* フォトギャラリー */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">フォトギャラリー</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                src: "https://readdy.ai/api/search-image?query=A%2520cozy%2520children%2527s%2520bookstore%2520interior%2520with%2520wooden%2520bookshelves%2520filled%2520with%2520colorful%2520picture%2520books%252C%2520warm%2520lighting%252C%2520and%2520a%2520welcoming%2520reading%2520area%2520with%2520small%2520chairs%2520and%2520cushions.%2520The%2520space%2520looks%2520professional%2520and%2520well-designed.&width=400&height=300&seq=107&orientation=landscape",
                alt: "絵本サロン内観",
                caption: "絵本サロン内観"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520children%2527s%2520workshop%2520in%2520progress%252C%2520with%2520kids%2520and%2520adults%2520engaged%2520in%2520creative%2520activities%2520related%2520to%2520books%2520or%2520storytelling.%2520The%2520space%2520is%2520bright%2520and%2520colorful%252C%2520with%2520art%2520supplies%2520and%2520books%2520visible.%2520The%2520atmosphere%2520looks%2520fun%2520and%2520educational.&width=400&height=300&seq=108&orientation=landscape",
                alt: "キッズワークショップの様子",
                caption: "キッズワークショップの様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=An%2520author%2520event%2520or%2520book%2520signing%2520in%2520a%2520bookstore%252C%2520with%2520an%2520author%2520seated%2520at%2520a%2520table%2520with%2520books%252C%2520speaking%2520to%2520or%2520signing%2520books%2520for%2520an%2520audience.%2520The%2520setting%2520looks%2520professional%2520and%2520well-organized.&width=400&height=300&seq=109&orientation=landscape",
                alt: "絵本作家サイン会",
                caption: "絵本作家サイン会"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520group%2520of%2520adults%2520in%2520a%2520book%2520discussion%2520or%2520literary%2520event%252C%2520seated%2520in%2520a%2520circle%2520or%2520around%2520tables%2520with%2520picture%2520books.%2520The%2520setting%2520looks%2520professional%2520and%2520focused%2520on%2520serious%2520discussion%2520about%2520children%2527s%2520literature.&width=400&height=300&seq=110&orientation=landscape",
                alt: "大人のための絵本講座",
                caption: "大人のための絵本講座"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520storytime%2520or%2520reading%2520session%2520for%2520children%252C%2520with%2520a%2520teacher%2520or%2520librarian%2520reading%2520a%2520picture%2520book%2520to%2520a%2520group%2520of%2520attentive%2520children%2520seated%2520on%2520the%2520floor.%2520The%2520setting%2520is%2520cozy%2520and%2520engaging.&width=400&height=300&seq=111&orientation=landscape",
                alt: "読み聞かせの時間",
                caption: "読み聞かせの時間"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520special%2520book%2520display%2520or%2520exhibition%2520featuring%2520children%2527s%2520books%252C%2520with%2520books%2520arranged%2520attractively%2520on%2520tables%2520or%2520special%2520displays.%2520The%2520presentation%2520looks%2520professional%2520and%2520designed%2520to%2520showcase%2520the%2520books.&width=400&height=300&seq=112&orientation=landscape",
                alt: "季節の絵本フェア",
                caption: "季節の絵本フェア"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520creative%2520space%2520with%2520art%2520supplies%2520and%2520materials%2520for%2520making%2520books%2520or%2520illustrations%252C%2520set%2520up%2520for%2520a%2520workshop.%2520The%2520space%2520looks%2520organized%2520and%2520inspiring%2520for%2520creative%2520activities.&width=400&height=300&seq=113&orientation=landscape",
                alt: "創作活動スペース",
                caption: "創作活動スペース"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520rental%2520space%2520or%2520meeting%2520room%2520set%2520up%2520for%2520an%2520event%252C%2520with%2520chairs%2520arranged%2520in%2520rows%2520or%2520around%2520tables.%2520The%2520space%2520looks%2520professional%2520and%2520versatile%2520for%2520different%2520types%2520of%2520gatherings.&width=400&height=300&seq=114&orientation=landscape",
                alt: "レンタルスペース",
                caption: "レンタルスペース"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => handleGalleryItemClick(item.src, item.alt, item.caption)}
              >
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover object-top" />
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-700">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                id: 'faq1',
                question: '営業時間・定休日について教えてください',
                answer: '営業時間は10:00から18:00まで、定休日は月曜日となっております。祝日の場合は営業し、翌日が休業となる場合があります。詳しくはカレンダーをご確認ください。'
              },
              {
                id: 'faq2',
                question: '絵本サロンでは何ができますか？',
                answer: '絵本サロンでは、絵本の販売のほか、館内での読み聞かせコーナーの利用、絵本に関する相談、定期的に開催される読み聞かせイベントやサイン会などにご参加いただけます。'
              },
              {
                id: 'faq3',
                question: 'キッズスクールの参加費用はいくらですか？',
                answer: 'キッズスクールの参加費用はプログラムによって異なります。単発のワークショップは1回2,000円〜3,500円、定期的な教室は月額6,000円〜8,000円となっております。詳細は各プログラムのページをご確認ください。'
              },
              {
                id: 'faq4',
                question: 'レンタルスペースの予約方法を教えてください',
                answer: 'レンタルスペースのご予約は、公式ウェブサイトの予約フォーム、お電話、または直接店舗にてお申し込みいただけます。ご利用の2週間前までにお申し込みください。空き状況はウェブサイトのカレンダーでご確認いただけます。'
              },
              {
                id: 'faq5',
                question: '駐車場はありますか？',
                answer: '専用駐車場は5台分ご用意しております。満車の場合は、近隣のコインパーキングをご利用ください。3,000円以上のお買い上げで、1時間分の駐車料金サービスを行っております。'
              },
              {
                id: 'faq6',
                question: 'イベントの予約はキャンセルできますか？',
                answer: 'イベントのキャンセルは、開催日の3日前までにご連絡いただければ可能です。それ以降のキャンセルは、参加費の50%をキャンセル料として申し受けます。当日のキャンセルは全額のキャンセル料が発生いたしますのでご了承ください。'
              }
            ].map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className={`faq-item ${activeFaqItems.includes(faq.id) ? 'active' : ''}`}>
                  <button 
                    className="faq-question w-full flex justify-between items-center p-5 font-medium text-left whitespace-nowrap overflow-hidden text-ellipsis"
                    onClick={() => toggleFaqItem(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <div className="w-5 h-5 flex items-center justify-center ml-2 transition-transform flex-shrink-0">
                      <i className={`${activeFaqItems.includes(faq.id) ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                    </div>
                  </button>
                  <div className={`faq-answer px-5 pb-5 ${activeFaqItems.includes(faq.id) ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 予約・問い合わせ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Instagram</h3>
            <p className="text-gray-600 mb-8 text-center">豊中PICOの日常やイベントの様子をInstagramで発信しています</p>
            <div className="flex justify-center">
              {/* Instagram embed placeholder */}
              <div className="w-[400px] h-[480px] bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Instagram Feed</span>
              </div>
            </div>
            <div className="text-center mt-6">
              <a href="https://www.instagram.com/toyonaka_pico/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-instagram-line"></i>
                </div>
                @toyonaka_pico をフォロー
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* アクセスマップ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">アクセス</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-[400px] relative overflow-hidden">
                <div style={{ backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')", backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "100%" }}></div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-6">豊中PICO へのアクセス</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                      <i className="ri-train-line"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">電車でお越しの場合</h4>
                      <p className="text-gray-600">阪急宝塚線「豊中駅」より徒歩8分<br />大阪モノレール「少路駅」より徒歩12分</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                      <i className="ri-bus-line"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">バスでお越しの場合</h4>
                      <p className="text-gray-600">阪急バス「豊中市役所前」バス停より徒歩3分</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                      <i className="ri-car-line"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">お車でお越しの場合</h4>
                      <p className="text-gray-600">中国自動車道「豊中IC」より約10分<br />専用駐車場5台完備（先着順）</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center bg-primary text-white px-6 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-map-2-line"></i>
                      </div>
                      Google マップで見る
                    </button>
                  </a>
                  <button className="flex items-center border border-primary text-primary px-6 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-smartphone-line"></i>
                    </div>
                    ルート案内
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 画像モーダル */}
      {showGalleryModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setShowGalleryModal(false)}
        >
          <div className="max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img src={modalImage.src} alt={modalImage.alt} className="w-full h-auto" />
                <button 
                  className="absolute top-4 right-4 bg-white bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-opacity-100 transition-colors"
                  onClick={() => setShowGalleryModal(false)}
                >
                  <i className="ri-close-line ri-lg"></i>
                </button>
              </div>
              <div className="p-4">
                <p className="text-gray-700">{modalImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};