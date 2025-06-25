import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Link } from 'react-router-dom';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImage, setCurrentImage] = useState("https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/039840db66e0b48510d5918393f62451.jpeg");
  const [quantity, setQuantity] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [activeSize, setActiveSize] = useState("S (13-15cm)");
  const [activeDesign, setActiveDesign] = useState("きつね");

  const handleThumbnailClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  const handleZoomClick = () => {
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  const handleAddToCart = () => {
    setShowCartModal(true);
  };

  const handleContinueShopping = () => {
    setShowCartModal(false);
  };

  const handleViewCart = () => {
    setShowCartModal(false);
    // Redirect to cart page
    // history.push('/cart');
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 18) { // Max stock
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (value < 1) {
        setQuantity(1);
      } else if (value > 18) {
        setQuantity(18);
      } else {
        setQuantity(value);
      }
    }
  };

  return (
    <DefaultLayout>
      {/* パンくずリスト */}
      <div className="bg-white shadow-sm pt-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">
              <div className="w-4 h-4 flex items-center justify-center mr-1">
                <i className="ri-home-line"></i>
              </div>
            </Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary">おかいもの</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-700">もりのともだち キッズソックス</span>
          </div>
        </div>
      </div>

      {/* 商品詳細メイン */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* 商品画像セクション */}
          <div className="w-full lg:w-1/2">
            <div className="relative mb-4">
              <img 
                src={currentImage} 
                alt="もりのともだち キッズソックス" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <button 
                onClick={handleZoomClick}
                className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-zoom-in-line"></i>
                </div>
              </button>
            </div>
            <div className="flex overflow-x-auto gap-3 pb-2">
              <div 
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer ${currentImage === "https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/039840db66e0b48510d5918393f62451.jpeg" ? "border-2 border-primary" : ""}`}
                onClick={() => handleThumbnailClick("https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/039840db66e0b48510d5918393f62451.jpeg")}
              >
                <img 
                  src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/039840db66e0b48510d5918393f62451.jpeg" 
                  alt="もりのともだち キッズソックス 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer ${currentImage === "https://readdy.ai/api/search-image?query=Cute%2520colorful%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520designs%252C%2520showing%2520different%2520angles%2520and%2520details%2520of%2520the%2520product.%2520The%2520socks%2520feature%2520adorable%2520cartoon%2520animals%2520like%2520foxes%252C%2520rabbits%252C%2520and%2520bears.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=101&orientation=squarish" ? "border-2 border-primary" : ""}`}
                onClick={() => handleThumbnailClick("https://readdy.ai/api/search-image?query=Cute%2520colorful%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520designs%252C%2520showing%2520different%2520angles%2520and%2520details%2520of%2520the%2520product.%2520The%2520socks%2520feature%2520adorable%2520cartoon%2520animals%2520like%2520foxes%252C%2520rabbits%252C%2520and%2520bears.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=101&orientation=squarish")}
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=Cute%2520colorful%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520designs%252C%2520showing%2520different%2520angles%2520and%2520details%2520of%2520the%2520product.%2520The%2520socks%2520feature%2520adorable%2520cartoon%2520animals%2520like%2520foxes%252C%2520rabbits%252C%2520and%2520bears.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=101&orientation=squarish" 
                  alt="もりのともだち キッズソックス 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer ${currentImage === "https://readdy.ai/api/search-image?query=Close-up%2520detail%2520of%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520pattern%252C%2520showing%2520the%2520texture%2520and%2520quality%2520of%2520the%2520fabric.%2520The%2520image%2520focuses%2520on%2520the%2520cute%2520animal%2520illustrations%2520and%2520vibrant%2520colors.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=102&orientation=squarish" ? "border-2 border-primary" : ""}`}
                onClick={() => handleThumbnailClick("https://readdy.ai/api/search-image?query=Close-up%2520detail%2520of%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520pattern%252C%2520showing%2520the%2520texture%2520and%2520quality%2520of%2520the%2520fabric.%2520The%2520image%2520focuses%2520on%2520the%2520cute%2520animal%2520illustrations%2520and%2520vibrant%2520colors.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=102&orientation=squarish")}
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=Close-up%2520detail%2520of%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520pattern%252C%2520showing%2520the%2520texture%2520and%2520quality%2520of%2520the%2520fabric.%2520The%2520image%2520focuses%2520on%2520the%2520cute%2520animal%2520illustrations%2520and%2520vibrant%2520colors.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=102&orientation=squarish" 
                  alt="もりのともだち キッズソックス 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer ${currentImage === "https://readdy.ai/api/search-image?query=Multiple%2520pairs%2520of%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520designs%2520arranged%2520neatly%252C%2520showing%2520the%2520complete%2520collection.%2520The%2520socks%2520come%2520in%2520various%2520colors%2520and%2520feature%2520different%2520animal%2520characters.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=103&orientation=squarish" ? "border-2 border-primary" : ""}`}
                onClick={() => handleThumbnailClick("https://readdy.ai/api/search-image?query=Multiple%2520pairs%2520of%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520designs%2520arranged%2520neatly%252C%2520showing%2520the%2520complete%2520collection.%2520The%2520socks%2520come%2520in%2520various%2520colors%2520and%2520feature%2520different%2520animal%2520characters.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=103&orientation=squarish")}
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=Multiple%2520pairs%2520of%2520children%2527s%2520socks%2520with%2520forest%2520animal%2520designs%2520arranged%2520neatly%252C%2520showing%2520the%2520complete%2520collection.%2520The%2520socks%2520come%2520in%2520various%2520colors%2520and%2520feature%2520different%2520animal%2520characters.%2520Clean%2520white%2520background%2520with%2520professional%2520product%2520photography%2520lighting.&width=500&height=500&seq=103&orientation=squarish" 
                  alt="もりのともだち キッズソックス 4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 商品情報セクション */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full mb-3">新商品</span>
              <h1 className="text-3xl font-bold mb-2">もりのともだち キッズソックス</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  <div className="review-star review-star-filled"></div>
                  <div className="review-star review-star-filled"></div>
                  <div className="review-star review-star-filled"></div>
                  <div className="review-star review-star-filled"></div>
                  <div className="review-star review-star-filled"></div>
                </div>
                <span className="text-sm text-gray-500">（32件のレビュー）</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">¥1,200<span className="text-sm font-normal text-gray-600 ml-1">（税込）</span></div>
              <p className="text-sm text-gray-500">送料：全国一律 ¥550（税込）</p>
            </div>
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span>在庫あり（残り18点）</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-truck-line text-primary"></i>
                </div>
                <span>最短翌日お届け（13:00までのご注文）</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-shield-check-line text-primary"></i>
                </div>
                <span>安心の返品保証（商品到着後14日以内）</span>
              </div>
            </div>
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">サイズ</label>
                <div className="flex flex-wrap gap-3">
                  {["S (13-15cm)", "M (16-18cm)", "L (19-21cm)"].map((size) => (
                    <button 
                      key={size}
                      className={`px-4 py-2 border rounded-full text-sm hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${activeSize === size ? 'border-primary text-primary' : 'border-gray-300'}`}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">デザイン</label>
                <div className="flex flex-wrap gap-3">
                  {["きつね", "うさぎ", "くま", "りす"].map((design) => (
                    <button 
                      key={design}
                      className={`px-4 py-2 border rounded-full text-sm hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${activeDesign === design ? 'border-primary text-primary' : 'border-gray-300'}`}
                      onClick={() => setActiveDesign(design)}
                    >
                      {design}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">数量</label>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg text-gray-600 hover:bg-gray-100"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-subtract-line"></i>
                    </div>
                  </button>
                  <input 
                    type="number" 
                    className="quantity-input w-16 h-10 border-t border-b border-gray-300 text-center focus:outline-none text-gray-700 border-none" 
                    value={quantity} 
                    min="1" 
                    max="18"
                    onChange={handleQuantityChange}
                  />
                  <button 
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg text-gray-600 hover:bg-gray-100"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-white border border-primary text-primary py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/5"
              >
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-shopping-cart-line"></i>
                  </div>
                  <span>カートに入れる</span>
                </div>
              </button>
              <button className="flex-1 bg-primary text-white py-3 font-medium rounded-button whitespace-nowrap hover:bg-primary/90">
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-shopping-bag-line"></i>
                  </div>
                  <span>今すぐ購入</span>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center text-gray-600 hover:text-primary">
                <div className="w-5 h-5 flex items-center justify-center mr-1">
                  <i className="ri-heart-line"></i>
                </div>
                <span className="text-sm">お気に入りに追加</span>
              </button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">シェア：</span>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-twitter-x-line"></i>
                  </div>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-facebook-circle-line"></i>
                  </div>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-instagram-line"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary">
                  <i className="ri-secure-payment-line"></i>
                </div>
                <span className="text-sm font-medium">お支払い方法</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-2">
                <div className="w-10 h-6 flex items-center justify-center bg-white rounded border border-gray-200">
                  <i className="ri-visa-fill text-blue-700"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center bg-white rounded border border-gray-200">
                  <i className="ri-mastercard-fill text-red-500"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center bg-white rounded border border-gray-200">
                  <i className="ri-paypal-fill text-blue-600"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center bg-white rounded border border-gray-200">
                  <i className="ri-alipay-fill text-blue-500"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center bg-white rounded border border-gray-200">
                  <i className="ri-bank-card-line text-gray-700"></i>
                </div>
              </div>
              <p className="text-xs text-gray-500">クレジットカード、銀行振込、コンビニ決済、PayPay、代金引換がご利用いただけます。</p>
            </div>
          </div>
        </div>

        {/* 商品詳細セクション */}
        <div className="space-y-12">
          {/* 商品説明 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-4">「もりのともだち」シリーズの可愛いキッズソックス</h3>
            <p className="text-gray-700 mb-4">人気絵本「もりのともだち」に登場する動物たちがデザインされた、子どもたちに大人気のキッズソックスです。柔らかな肌触りと鮮やかな色使いで、お子様の足元を可愛く彩ります。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-medium mb-3">特徴</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>オーガニックコットン100%使用で肌に優しい</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>滑り止め付きで安全</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>伸縮性に優れ、履きやすい</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>洗濯機で洗える（ネット使用推奨）</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>4種類の動物デザイン（きつね、うさぎ、くま、りす）</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">こんな方におすすめ</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-user-smile-line"></i>
                    </div>
                    <span>「もりのともだち」シリーズが好きなお子様</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-user-smile-line"></i>
                    </div>
                    <span>肌に優しい素材を求めている方</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-user-smile-line"></i>
                    </div>
                    <span>プレゼントを探している方</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary flex-shrink-0 mt-0.5">
                      <i className="ri-user-smile-line"></i>
                    </div>
                    <span>可愛いデザインのキッズアイテムをお探しの方</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium mb-3">「もりのともだち」シリーズについて</h4>
              <p className="text-gray-700 mb-4">「もりのともだち」は、森に住む動物たちの日常を描いた人気絵本シリーズです。優しいストーリーと鮮やかなイラストで、多くの子どもたちに愛されています。このソックスは、絵本の世界観をそのままに、子どもたちの足元を彩ります。</p>
              <Link to="/books/forest-friends" className="text-primary hover:underline flex items-center">
                <span>「もりのともだち」絵本シリーズを見る</span>
                <div className="w-5 h-5 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">お手入れ方法</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-gray-600 flex-shrink-0 mt-0.5">
                    <i className="ri-information-line"></i>
                  </div>
                  <span>洗濯の際は洗濯ネットをご使用ください</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-gray-600 flex-shrink-0 mt-0.5">
                    <i className="ri-information-line"></i>
                  </div>
                  <span>漂白剤の使用はお避けください</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-gray-600 flex-shrink-0 mt-0.5">
                    <i className="ri-information-line"></i>
                  </div>
                  <span>アイロンがけは低温で行ってください</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-gray-600 flex-shrink-0 mt-0.5">
                    <i className="ri-information-line"></i>
                  </div>
                  <span>乾燥機のご使用はお控えください</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 仕様・サイズ */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-4">商品仕様</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium w-1/3">商品名</th>
                    <td className="py-3 px-4 text-gray-700">もりのともだち キッズソックス</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium">商品コード</th>
                    <td className="py-3 px-4 text-gray-700">4560453177828</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium">素材</th>
                    <td className="py-3 px-4 text-gray-700">オーガニックコットン 98%、ポリウレタン 2%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium">原産国</th>
                    <td className="py-3 px-4 text-gray-700">日本</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium">パッケージ</th>
                    <td className="py-3 px-4 text-gray-700">ギフトボックス入り</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium">対象年齢</th>
                    <td className="py-3 px-4 text-gray-700">2歳〜8歳</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-gray-50 text-gray-700 font-medium">認証</th>
                    <td className="py-3 px-4 text-gray-700">GOTS認証オーガニックコットン使用</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-xl font-bold mb-4">サイズ表</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-gray-700 font-medium">サイズ</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium">対応サイズ（cm）</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium">対応年齢（目安）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">S</td>
                    <td className="py-3 px-4 text-gray-700">13-15cm</td>
                    <td className="py-3 px-4 text-gray-700">2-3歳</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">M</td>
                    <td className="py-3 px-4 text-gray-700">16-18cm</td>
                    <td className="py-3 px-4 text-gray-700">4-5歳</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">L</td>
                    <td className="py-3 px-4 text-gray-700">19-21cm</td>
                    <td className="py-3 px-4 text-gray-700">6-8歳</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-2 text-yellow-600 flex-shrink-0 mt-0.5">
                  <i className="ri-information-line"></i>
                </div>
                <p className="text-sm text-gray-700">サイズは目安です。お子様の足のサイズに合わせてお選びください。履き口はゆったりとしたデザインで、履きやすくなっています。</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">デザインバリエーション</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img src="https://readdy.ai/api/search-image?query=Cute%2520fox%2520design%2520children%2527s%2520socks%2520on%2520white%2520background%252C%2520showing%2520the%2520detailed%2520pattern%2520and%2520vibrant%2520colors.%2520Professional%2520product%2520photography%2520with%2520clean%2520lighting.&width=300&height=300&seq=104&orientation=squarish" alt="きつねデザイン" className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h4 className="font-medium">きつね</h4>
                  <p className="text-sm text-gray-600">オレンジ色がポイント</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img src="https://readdy.ai/api/search-image?query=Cute%2520rabbit%2520design%2520children%2527s%2520socks%2520on%2520white%2520background%252C%2520showing%2520the%2520detailed%2520pattern%2520and%2520vibrant%2520colors.%2520Professional%2520product%2520photography%2520with%2520clean%2520lighting.&width=300&height=300&seq=105&orientation=squarish" alt="うさぎデザイン" className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h4 className="font-medium">うさぎ</h4>
                  <p className="text-sm text-gray-600">ピンク色がポイント</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img src="https://readdy.ai/api/search-image?query=Cute%2520bear%2520design%2520children%2527s%2520socks%2520on%2520white%2520background%252C%2520showing%2520the%2520detailed%2520pattern%2520and%2520vibrant%2520colors.%2520Professional%2520product%2520photography%2520with%2520clean%2520lighting.&width=300&height=300&seq=106&orientation=squarish" alt="くまデザイン" className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h4 className="font-medium">くま</h4>
                  <p className="text-sm text-gray-600">ブラウン色がポイント</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img src="https://readdy.ai/api/search-image?query=Cute%2520squirrel%2520design%2520children%2527s%2520socks%2520on%2520white%2520background%252C%2520showing%2520the%2520detailed%2520pattern%2520and%2520vibrant%2520colors.%2520Professional%2520product%2520photography%2520with%2520clean%2520lighting.&width=300&height=300&seq=107&orientation=squarish" alt="りすデザイン" className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h4 className="font-medium">りす</h4>
                  <p className="text-sm text-gray-600">グリーン色がポイント</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">商品についてのお問い合わせ</h4>
              <p className="text-gray-700 mb-4">商品の仕様やサイズについてご不明な点がございましたら、お気軽にお問い合わせください。</p>
              <Link to="/contact" className="text-primary hover:underline flex items-center">
                <span>お問い合わせフォームへ</span>
                <div className="w-5 h-5 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* 関連商品 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-6">関連商品</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img src="https://static.readdy.ai/image/60a8b97af392af7bc8fe2dab5eed4ff2/1f4ea3b18144ce790c07c76e60afc568.jpeg" alt="おやすみ、ぞうさん（サイン入り）" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-2">人気商品</span>
                  <h4 className="text-lg font-medium mb-2">おやすみ、ぞうさん（サイン入り）</h4>
                  <p className="text-gray-700 font-bold mb-3">¥1,650</p>
                  <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img src="https://readdy.ai/api/search-image?query=A%2520set%2520of%2520children%2527s%2520picture%2520books%2520with%2520forest%2520animal%2520themes%252C%2520neatly%2520arranged%2520on%2520a%2520clean%2520white%2520background.%2520The%2520books%2520feature%2520colorful%2520covers%2520with%2520cute%2520animal%2520illustrations.%2520Professional%2520product%2520photography%2520with%2520soft%2520lighting.&width=300&height=300&seq=108&orientation=squarish" alt="もりのともだち 絵本セット" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full mb-2">おすすめ</span>
                  <h4 className="text-lg font-medium mb-2">もりのともだち 絵本セット</h4>
                  <p className="text-gray-700 font-bold mb-3">¥4,950</p>
                  <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img src="https://readdy.ai/api/search-image?query=A%2520cute%2520children%2527s%2520tote%2520bag%2520with%2520forest%2520animal%2520designs%252C%2520similar%2520to%2520the%2520sock%2520patterns.%2520The%2520bag%2520is%2520photographed%2520on%2520a%2520clean%2520white%2520background%2520and%2520shows%2520the%2520colorful%2520animal%2520illustrations.%2520Professional%2520product%2520photography%2520with%2520soft%2520lighting.&width=300&height=300&seq=109&orientation=squarish" alt="もりのともだち トートバッグ" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full mb-2">新商品</span>
                  <h4 className="text-lg font-medium mb-2">もりのともだち トートバッグ</h4>
                  <p className="text-gray-700 font-bold mb-3">¥2,200</p>
                  <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img src="https://readdy.ai/api/search-image?query=A%2520children%2527s%2520plush%2520toy%2520of%2520a%2520fox%2520character%2520from%2520the%2520%2522Forest%2520Friends%2522%2520series%252C%2520matching%2520the%2520sock%2520designs.%2520The%2520plush%2520toy%2520is%2520photographed%2520on%2520a%2520clean%2520white%2520background%2520and%2520shows%2520the%2520cute%252C%2520huggable%2520design.%2520Professional%2520product%2520photography%2520with%2520soft%2520lighting.&width=300&height=300&seq=110&orientation=squarish" alt="もりのともだち ぬいぐるみ" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full mb-2">限定品</span>
                  <h4 className="text-lg font-medium mb-2">もりのともだち ぬいぐるみ</h4>
                  <p className="text-gray-700 font-bold mb-3">¥3,300</p>
                  <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-6">最近チェックした商品</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img src="https://readdy.ai/api/search-image?query=A%2520wooden%2520educational%2520toy%2520for%2520children%252C%2520such%2520as%2520alphabet%2520blocks%2520or%2520a%2520puzzle%252C%2520photographed%2520on%2520a%2520clean%2520white%2520background.%2520The%2520toy%2520should%2520look%2520high-quality%2520and%2520designed%2520for%2520learning%2520through%2520play.&width=300&height=300&seq=14&orientation=squarish" alt="木製 ひらがなブロック 50ピース" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full mb-2">おすすめ</span>
                  <h4 className="text-lg font-medium mb-2">木製 ひらがなブロック 50ピース</h4>
                  <p className="text-gray-700 font-bold mb-3">¥3,980</p>
                  <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img src="https://readdy.ai/api/search-image?query=A%2520framed%2520illustration%2520from%2520a%2520childrens%2520book%252C%2520showing%2520a%2520beautiful%2520artwork%2520suitable%2520for%2520a%2520childs%2520room.%2520The%2520frame%2520should%2520be%2520simple%2520and%2520elegant%252C%2520and%2520the%2520image%2520should%2520be%2520photographed%2520against%2520a%2520clean%2520background.&width=300&height=300&seq=13&orientation=squarish" alt="「森のどうぶつたち」原画プリント" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full mb-2">限定品</span>
                  <h4 className="text-lg font-medium mb-2">「森のどうぶつたち」原画プリント</h4>
                  <p className="text-gray-700 font-bold mb-3">¥8,800</p>
                  <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 配送・返品情報 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">配送・返品について</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center mr-4 bg-gray-100 rounded-full text-primary">
                  <i className="ri-truck-line ri-lg"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">配送について</h4>
                  <p className="text-sm text-gray-600">全国一律550円（税込）<br />13時までのご注文で翌日発送</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center mr-4 bg-gray-100 rounded-full text-primary">
                  <i className="ri-arrow-go-back-line ri-lg"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">返品・交換について</h4>
                  <p className="text-sm text-gray-600">商品到着後14日以内<br />未使用・未開封に限り返品可能</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center mr-4 bg-gray-100 rounded-full text-primary">
                  <i className="ri-customer-service-line ri-lg"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">お問い合わせ</h4>
                  <p className="text-sm text-gray-600">平日10:00〜17:00<br />info@oyakonojikanlabo.jp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 画像拡大モーダル */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-close-line ri-2x"></i>
              </div>
            </button>
            <img src={currentImage} alt="拡大画像" className="max-w-full max-h-[80vh] mx-auto" />
          </div>
        </div>
      )}

      {/* カート追加成功モーダル */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center mb-4 text-primary">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="ri-check-line ri-2x"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">カートに追加しました</h3>
              <p className="text-gray-600 text-center mb-6">もりのともだち キッズソックス</p>
              <div className="flex gap-4">
                <button 
                  onClick={handleContinueShopping}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-button whitespace-nowrap hover:bg-gray-50"
                >
                  買い物を続ける
                </button>
                <button 
                  onClick={handleViewCart}
                  className="flex-1 bg-primary text-white py-2 rounded-button whitespace-nowrap hover:bg-primary/90"
                >
                  カートを見る
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};