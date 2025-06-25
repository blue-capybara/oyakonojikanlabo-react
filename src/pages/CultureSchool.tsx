import React, { useState, useEffect } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Link } from 'react-router-dom';

export const CultureSchool: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeFaqItems, setActiveFaqItems] = useState<string[]>([]);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [eventInfo, setEventInfo] = useState({ title: '', date: '' });
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '', caption: '' });

  const breadcrumbItems = [
    { label: 'ホーム', href: '/' },
    { label: '豊中PICO', href: '/pico' },
    { label: 'カルチャーサークル＆スクールPICO' }
  ];

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
    <DefaultLayout theme="culture">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* メインビジュアル */}
      <section className="relative bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <Link to="/pico" className="inline-flex items-center text-gray-600 hover:text-primary mb-4">
                <div className="w-5 h-5 flex items-center justify-center mr-1">
                  <i className="ri-arrow-left-line"></i>
                </div>
                豊中PICOトップへ戻る
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">カルチャーサークル/カルチャースクール</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">絵本を通じて、芸術、文化、クラフトなど、様々な分野の学びと創造の場を提供しています。子どもから大人まで楽しめる多彩なプログラムをご用意しています。</p>
              <div className="flex flex-wrap gap-4">
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/768d0223ae81cd791f14ac0c9ec38b83.jpeg" alt="自分の本質を知る" className="w-full h-[480px] object-cover object-top" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    6月14日（金）10:30-12:00
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">絵本読み聞かせ講座</h3>
                  <p className="text-gray-600 text-sm mb-4">読み聞かせの基本から表現力まで、実践的なスキルを身につけられます。</p>
                  <div className="flex justify-end items-center">
                    <Link to="/culture/reading" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新のカルチャースクール */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">直近のカルチャーサークル＆スクール</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/b43238d65703b6c37b252ca7691ddf63.jpeg" alt="絵本創作講座" className="w-full h-72 object-cover object-top" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  6月12日（水）19:00-20:30
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">エイジレス・ヨガ</h3>
                <p className="text-gray-600 text-sm mb-4">自分だけの絵本を作ってみませんか？ストーリー作りから挿絵まで、プロの講師が丁寧に指導します。</p>
                <div className="flex justify-end items-center">
                  <Link to="/culture/yoga" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/a92976d454ad111841ae77d449541903.jpeg" alt="絵本読み聞かせ講座" className="w-full h-72 object-cover object-top" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  6月14日（金）10:30-12:00
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">絵本読み聞かせ講座</h3>
                <p className="text-gray-600 text-sm mb-4">読み聞かせの基本から表現力まで、実践的なスキルを身につけられます。</p>
                <div className="flex justify-end items-center">
                  <Link to="/culture/reading" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/60fb80015c542130c8174108371793b6.png" alt="キッズ絵本創作教室" className="w-full h-72 object-cover object-top" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  6月15日（土）10:00-11:30
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">小学生おかね教室</h3>
                <p className="text-gray-600 text-sm mb-4">お子様の想像力を育みながら、楽しく絵本作りにチャレンジします。</p>
                <div className="flex justify-end items-center">
                  <Link to="/culture/money" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://readdy.ai/api/search-image?query=An%2520English%2520picture%2520book%2520reading%2520session%2520for%2520children%252C%2520with%2520a%2520native%2520English%2520teacher%2520engaging%2520kids%2520through%2520interactive%2520storytelling.%2520The%2520space%2520is%2520decorated%2520with%2520English%2520learning%2520materials%2520and%2520picture%2520books.&width=400&height=600&seq=304&orientation=portrait" alt="英語で楽しむ絵本の時間" className="w-full h-72 object-cover object-top" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  6月16日（日）10:00-11:00
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">英語で楽しむ絵本の時間</h3>
                <p className="text-gray-600 text-sm mb-4">ネイティブ講師と一緒に、英語の絵本を通じて楽しく学びます。</p>
                <div className="flex justify-end items-center">
                  <Link to="/culture/english" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://readdy.ai/api/search-image?query=Children%2520in%2520an%2520art%2520class%2520creating%2520artwork%2520inspired%2520by%2520picture%2520books.%2520The%2520space%2520shows%2520various%2520art%2520materials%2520and%2520completed%2520projects%2520on%2520display.%2520The%2520atmosphere%2520is%2520creative%2520and%2520encouraging.&width=400&height=600&seq=305&orientation=portrait" alt="絵本アートクラブ" className="w-full h-72 object-cover object-top" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  6月19日（水）16:00-17:30
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">絵本アートクラブ</h3>
                <p className="text-gray-600 text-sm mb-4">絵本の世界からインスピレーションを得て、様々なアート作品を作ります。</p>
                <div className="flex justify-end items-center">
                  <Link to="/culture/art" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://readdy.ai/api/search-image?query=Adults%2520in%2520a%2520picture%2520book%2520appreciation%2520workshop%252C%2520discussing%2520and%2520analyzing%2520picture%2520books%2520from%2520an%2520adult%2520perspective.%2520The%2520setting%2520is%2520professional%2520and%2520intellectual%252C%2520with%2520participants%2520engaged%2520in%2520thoughtful%2520discussion.&width=400&height=600&seq=306&orientation=portrait" alt="大人のための絵本講座" className="w-full h-72 object-cover object-top" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  6月21日（金）19:00-20:30
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">大人のための絵本講座</h3>
                <p className="text-gray-600 text-sm mb-4">大人の視点から絵本の魅力を再発見する、月1回の特別講座です。</p>
                <div className="flex justify-end items-center">
                  <Link to="/culture/adult-books" className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center" id="loadMoreContainer">
            <button className="inline-flex items-center bg-white border border-primary text-primary px-6 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors">
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-refresh-line"></i>
              </div>
              もっと読み込む
            </button>
          </div>
        </div>
      </section>

      {/* スケジュールカレンダー */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">講座スケジュール</h2>
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
                const hasEvent = [1, 7, 10, 14, 15, 16, 20, 21, 22, 25, 29, 30].includes(day);
                
                return (
                  <div 
                    key={index}
                    className={`calendar-day ${isToday ? 'today' : ''} ${hasEvent ? 'event-day has-event' : ''} ${!isCurrentMonth ? 'text-gray-400' : ''}`}
                    onClick={() => {
                      if (hasEvent && isCurrentMonth) {
                        let eventName = '';
                        if (day === 8) eventName = '絵本作家 山田太郎さん サイン会';
                        else if (day === 15) eventName = '親子で楽しむ絵本ワークショップ';
                        else if (day === 21) eventName = '大人のための絵本講座';
                        else eventName = 'カルチャースクール';
                        
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
                  <span>詳細は各講座ページをご確認ください</span>
                </div>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">
                  詳細・予約はこちら
                </button>
              </div>
            )}
            <h3 className="font-bold text-lg mb-4">週間スケジュール</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-50 text-gray-700">
                    <th className="py-3 px-4 text-left font-medium">時間帯</th>
                    <th className="py-3 px-4 text-center font-medium">月曜日</th>
                    <th className="py-3 px-4 text-center font-medium">火曜日</th>
                    <th className="py-3 px-4 text-center font-medium">水曜日</th>
                    <th className="py-3 px-4 text-center font-medium">木曜日</th>
                    <th className="py-3 px-4 text-center font-medium">金曜日</th>
                    <th className="py-3 px-4 text-center font-medium">土曜日</th>
                    <th className="py-3 px-4 text-center font-medium">日曜日</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-gray-700 font-medium">午前<br />(10:00-12:00)</td>
                    <td className="py-3 px-4 text-center text-gray-300">休館日</td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">絵本読み聞かせ講座</p>
                      <p className="text-xs">10:30-12:00</p>
                    </td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">キッズ絵本創作教室</p>
                      <p className="text-xs">10:00-11:30</p>
                    </td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">英語で楽しむ絵本の時間</p>
                      <p className="text-xs">10:00-11:00</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 font-medium">午後<br />(13:00-17:00)</td>
                    <td className="py-3 px-4 text-center text-gray-300">休館日</td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">絵本アートクラブ</p>
                      <p className="text-xs">16:00-17:30</p>
                    </td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">読書力アップ教室</p>
                      <p className="text-xs">16:30-18:00</p>
                    </td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">絵本イラスト教室</p>
                      <p className="text-xs">13:00-15:00</p>
                    </td>
                    <td className="py-3 px-4 text-center"></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 font-medium">夜間<br />(18:00-21:00)</td>
                    <td className="py-3 px-4 text-center text-gray-300">休館日</td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">絵本創作講座</p>
                      <p className="text-xs">19:00-20:30</p>
                    </td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center bg-primary/5 text-gray-700">
                      <p className="font-medium">大人のための絵本講座</p>
                      <p className="text-xs">19:00-20:30<br />※第3金曜のみ</p>
                    </td>
                    <td className="py-3 px-4 text-center"></td>
                    <td className="py-3 px-4 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* フォトギャラリー */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">講座の様子</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                src: "https://readdy.ai/api/search-image?query=A%2520picture%2520book%2520creation%2520workshop%2520for%2520adults%2520in%2520progress%252C%2520with%2520participants%2520working%2520on%2520their%2520own%2520picture%2520book%2520projects.%2520The%2520space%2520is%2520bright%2520and%2520creative%2520with%2520art%2520supplies%252C%2520paper%252C%2520and%2520reference%2520books.%2520Participants%2520are%2520engaged%2520in%2520drawing%252C%2520writing%252C%2520or%2520discussing%2520their%2520work%2520with%2520a%2520professional%2520instructor.&width=400&height=300&seq=210&orientation=landscape",
                alt: "絵本創作講座の様子",
                caption: "絵本創作講座の様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=A%2520storytelling%2520workshop%2520for%2520adults%2520learning%2520how%2520to%2520read%2520picture%2520books%2520aloud%2520effectively.%2520The%2520instructor%2520is%2520demonstrating%2520techniques%2520while%2520participants%2520observe%2520or%2520practice.%2520The%2520setting%2520is%2520professional%2520and%2520focused%2520on%2520learning%252C%2520with%2520picture%2520books%2520visible%2520in%2520the%2520scene.&width=400&height=300&seq=211&orientation=landscape",
                alt: "絵本読み聞かせ講座の様子",
                caption: "絵本読み聞かせ講座の様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=Children%2520engaged%2520in%2520a%2520creative%2520picture%2520book%2520making%2520workshop.%2520The%2520kids%2520are%2520drawing%252C%2520coloring%252C%2520and%2520assembling%2520their%2520own%2520picture%2520books%2520with%2520guidance%2520from%2520an%2520instructor.%2520The%2520space%2520is%2520bright%252C%2520colorful%252C%2520and%2520filled%2520with%2520art%2520supplies%2520and%2520children%2527s%2520books%2520for%2520inspiration.&width=400&height=300&seq=212&orientation=landscape",
                alt: "キッズ絵本創作教室の様子",
                caption: "キッズ絵本創作教室の様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=An%2520English%2520picture%2520book%2520class%2520for%2520children%2520with%2520a%2520native%2520English-speaking%2520teacher.%2520Children%2520are%2520sitting%2520in%2520a%2520circle%2520or%2520small%2520groups%252C%2520engaged%2520with%2520English%2520picture%2520books.%2520The%2520teacher%2520is%2520animated%2520and%2520using%2520gestures%2520to%2520help%2520convey%2520meaning.%2520The%2520space%2520is%2520bright%2520and%2520decorated%2520with%2520educational%2520materials.&width=400&height=300&seq=213&orientation=landscape",
                alt: "英語で楽しむ絵本の時間",
                caption: "英語で楽しむ絵本の時間"
              },
              {
                src: "https://readdy.ai/api/search-image?query=Children%2520in%2520an%2520art%2520class%2520inspired%2520by%2520picture%2520books.%2520They%2520are%2520creating%2520artwork%2520based%2520on%2520stories%2520they%2527ve%2520read%252C%2520using%2520various%2520art%2520supplies%2520like%2520paint%252C%2520clay%252C%2520or%2520collage%2520materials.%2520The%2520instructor%2520is%2520helping%2520individual%2520children%2520with%2520their%2520projects.%2520The%2520space%2520is%2520colorful%2520and%2520creative.&width=400&height=300&seq=214&orientation=landscape",
                alt: "絵本アートクラブの様子",
                caption: "絵本アートクラブの様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=Adults%2520in%2520a%2520picture%2520book%2520appreciation%2520class%252C%2520examining%2520and%2520discussing%2520picture%2520books%2520from%2520an%2520adult%2520perspective.%2520The%2520instructor%2520is%2520presenting%2520or%2520analyzing%2520a%2520book%2520while%2520participants%2520are%2520engaged%2520in%2520thoughtful%2520discussion.%2520The%2520setting%2520is%2520professional%2520and%2520intellectual.&width=400&height=300&seq=215&orientation=landscape",
                alt: "大人のための絵本講座の様子",
                caption: "大人のための絵本講座の様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=Children%2520in%2520a%2520reading%2520skills%2520class%252C%2520engaged%2520with%2520books%2520and%2520reading%2520activities.%2520Some%2520are%2520reading%2520independently%2520while%2520others%2520might%2520be%2520writing%2520in%2520reading%2520journals%2520or%2520discussing%2520books%2520with%2520the%2520teacher.%2520The%2520classroom%2520has%2520bookshelves%2520and%2520reading%2520materials%2520visible.&width=400&height=300&seq=216&orientation=landscape",
                alt: "読書力アップ教室の様子",
                caption: "読書力アップ教室の様子"
              },
              {
                src: "https://readdy.ai/api/search-image?query=An%2520illustration%2520workshop%2520for%2520picture%2520books%252C%2520with%2520adults%2520learning%2520illustration%2520techniques.%2520Participants%2520are%2520working%2520on%2520their%2520own%2520illustrations%2520while%2520the%2520instructor%2520provides%2520guidance.%2520Art%2520supplies%2520and%2520reference%2520materials%2520are%2520visible%252C%2520and%2520the%2520space%2520looks%2520creative%2520and%2520professional.&width=400&height=300&seq=217&orientation=landscape",
                alt: "絵本イラスト教室の様子",
                caption: "絵本イラスト教室の様子"
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

      {/* 申し込み方法 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">申し込み方法</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mx-auto mb-4">
                  <i className="ri-search-line ri-2x"></i>
                </div>
                <div className="relative mb-4">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">1</div>
                  <h3 className="text-xl font-bold mb-2">講座を選ぶ</h3>
                </div>
                <p className="text-gray-600 text-sm">ご興味のある講座をお選びください。各講座の詳細ページで内容や日程をご確認いただけます。</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mx-auto mb-4">
                  <i className="ri-calendar-check-line ri-2x"></i>
                </div>
                <div className="relative mb-4">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">2</div>
                  <h3 className="text-xl font-bold mb-2">体験・申し込み</h3>
                </div>
                <p className="text-gray-600 text-sm">体験レッスンに参加するか、直接お申し込みください。体験レッスンは入会時に返金されます。</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mx-auto mb-4">
                  <i className="ri-user-add-line ri-2x"></i>
                </div>
                <div className="relative mb-4">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">3</div>
                  <h3 className="text-xl font-bold mb-2">入会手続き</h3>
                </div>
                <p className="text-gray-600 text-sm">入会申込書にご記入いただき、入会金と初月の受講料をお支払いください。会員証をお渡しします。</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-center">お申し込み方法</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3">
                      <i className="ri-computer-line"></i>
                    </div>
                    <h4 className="font-bold">オンライン予約</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">公式ウェブサイトからいつでも簡単に予約できます。</p>
                  <button className="w-full bg-primary text-white py-2 text-sm font-medium rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                    オンライン予約はこちら
                  </button>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3">
                      <i className="ri-phone-line"></i>
                    </div>
                    <h4 className="font-bold">お電話での予約</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">お電話でもご予約・お問い合わせを承っております。</p>
                  <p className="font-medium">06-XXXX-XXXX</p>
                  <p className="text-gray-600 text-xs">受付時間：10:00-18:00（月曜定休）</p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3">
                      <i className="ri-store-line"></i>
                    </div>
                    <h4 className="font-bold">店頭での申し込み</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">豊中PICO店頭でも直接お申し込みいただけます。</p>
                  <p className="text-gray-600 text-xs">住所：大阪府豊中市〇〇町X-X-X</p>
                  <p className="text-gray-600 text-xs">営業時間：10:00-18:00（月曜定休）</p>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold mb-3">申し込み時の注意事項</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                      <i className="ri-information-line"></i>
                    </div>
                    定員になり次第、募集を締め切らせていただきます
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                      <i className="ri-information-line"></i>
                    </div>
                    最少催行人数に満たない場合は、開講を見合わせる場合があります
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                      <i className="ri-information-line"></i>
                    </div>
                    お子様の講座は、保護者の方の連絡先情報が必要です
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 flex-shrink-0 mt-0.5">
                      <i className="ri-information-line"></i>
                    </div>
                    体験レッスンは各講座につき1回限りとなります
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                id: 'faq1',
                question: '途中からの入会はできますか？',
                answer: 'はい、定員に空きがある場合は、途中からのご入会も可能です。ただし、内容によっては前回までの知識が必要な場合もありますので、詳しくは各講座の担当者にお問い合わせください。'
              },
              {
                id: 'faq2',
                question: '講座を休んだ場合、振替受講はできますか？',
                answer: '原則として振替受講は行っておりませんが、同じ内容の講座が複数開講されている場合に限り、空席状況によっては振替が可能な場合があります。振替をご希望の場合は、事前にご連絡ください。'
              },
              {
                id: 'faq3',
                question: '子どもの講座に保護者は同伴できますか？',
                answer: '基本的には子どもたちが自立して活動できるよう、保護者の方は同伴せずにお待ちいただいております。ただし、初回のみ見学可能な講座もありますので、詳細は各講座の案内をご確認ください。また、3歳以下のお子様の場合は、講座によって保護者同伴をお願いする場合があります。'
              },
              {
                id: 'faq4',
                question: '講座の途中解約はできますか？',
                answer: '月謝制の講座については、解約希望月の前月20日までにお申し出いただければ解約可能です。すでにお支払いいただいた月謝の返金はいたしかねますのでご了承ください。単発講座については、開講日の7日前までのキャンセルで全額返金、3日前までは50%返金となります。それ以降のキャンセルについては返金できません。'
              },
              {
                id: 'faq5',
                question: '教材費は別途必要ですか？',
                answer: '講座によって異なります。「絵本創作講座」「キッズ絵本創作教室」「絵本アートクラブ」などは材料費込みの料金設定となっていますが、「絵本イラスト教室」は材料費が別途必要です。詳細は各講座の案内をご確認ください。'
              },
              {
                id: 'faq6',
                question: '初心者でも参加できますか？',
                answer: 'はい、ほとんどの講座は初心者の方を歓迎しています。講師が丁寧に指導いたしますので、安心してご参加ください。ご不安な点がある場合は、まずは体験レッスンにお申し込みいただくことをおすすめします。'
              }
            ].map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className={`faq-item ${activeFaqItems.includes(faq.id) ? 'active' : ''}`}>
                  <button 
                    className="faq-question w-full flex justify-between items-center p-5 font-medium text-left"
                    onClick={() => toggleFaqItem(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <div className="w-5 h-5 flex items-center justify-center ml-2 transition-transform">
                      <i className={`${activeFaqItems.includes(faq.id) ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                    </div>
                  </button>
                  <div className={`faq-answer px-5 pb-5 ${activeFaqItems.includes(faq.id) ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-8 text-center">
              <button className="inline-flex items-center bg-white border border-primary text-primary px-6 py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-question-line"></i>
                </div>
                その他のよくある質問
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-primary p-8 text-white">
                <h3 className="text-xl font-bold mb-6">お問い合わせ先</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-map-pin-line ri-lg"></i>
                    </div>
                    <div>
                      <p className="font-bold mb-1">住所</p>
                      <p className="text-sm">〒560-0021<br />大阪府豊中市〇〇町X-X-X</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-phone-line ri-lg"></i>
                    </div>
                    <div>
                      <p className="font-bold mb-1">電話番号</p>
                      <p className="text-sm">06-XXXX-XXXX</p>
                      <p className="text-xs">受付時間：10:00-18:00（月曜定休）</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-mail-line ri-lg"></i>
                    </div>
                    <div>
                      <p className="font-bold mb-1">メールアドレス</p>
                      <p className="text-sm">info@toyonaka-pico.jp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 p-8">
                <h3 className="text-xl font-bold mb-6">お申込みフォーム</h3>
                <iframe src="https://forms.gle/GPRBKmtyWnMbKBkC9" className="w-full h-[800px] border-none"></iframe>
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