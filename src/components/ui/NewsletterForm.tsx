import React, { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && prefecture) {
      setIsSuccess(true);
      setMessage('登録が完了しました。ご登録ありがとうございます。');
      setEmail('');
      setPrefecture('');
      
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      setIsSuccess(false);
      setMessage('メールアドレスと都道府県を入力してください。');
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">親子の時間研究所ニュースレター会員（無料）</h2>
          <p className="mb-8">新作絵本やグッズのご紹介や作家インタビュー、お住まいの地域でのイベント案内など、カルチャーあふれるニュースレターを定期的にお届けします。</p>
          <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレス" 
                required 
                className="px-4 py-3 rounded-lg border-none text-gray-800 w-full text-sm" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <select 
                value={prefecture}
                onChange={(e) => setPrefecture(e.target.value)}
                required 
                className="px-4 py-3 rounded-lg border-none text-gray-800 w-full sm:w-40 text-sm appearance-none pr-8 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5H7z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-[calc(100%-8px)_center] bg-no-repeat"
              >
                <option value="" disabled>都道府県</option>
                <option value="北海道">北海道</option>
                <option value="青森県">青森県</option>
                <option value="岩手県">岩手県</option>
                <option value="宮城県">宮城県</option>
                <option value="秋田県">秋田県</option>
                <option value="山形県">山形県</option>
                <option value="福島県">福島県</option>
                <option value="茨城県">茨城県</option>
                <option value="栃木県">栃木県</option>
                <option value="群馬県">群馬県</option>
                <option value="埼玉県">埼玉県</option>
                <option value="千葉県">千葉県</option>
                <option value="東京都">東京都</option>
                <option value="神奈川県">神奈川県</option>
                <option value="新潟県">新潟県</option>
                <option value="富山県">富山県</option>
                <option value="石川県">石川県</option>
                <option value="福井県">福井県</option>
                <option value="山梨県">山梨県</option>
                <option value="長野県">長野県</option>
                <option value="岐阜県">岐阜県</option>
                <option value="静岡県">静岡県</option>
                <option value="愛知県">愛知県</option>
                <option value="三重県">三重県</option>
                <option value="滋賀県">滋賀県</option>
                <option value="京都府">京都府</option>
                <option value="大阪府">大阪府</option>
                <option value="兵庫県">兵庫県</option>
                <option value="奈良県">奈良県</option>
                <option value="和歌山県">和歌山県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="岡山県">岡山県</option>
                <option value="広島県">広島県</option>
                <option value="山口県">山口県</option>
                <option value="徳島県">徳島県</option>
                <option value="香川県">香川県</option>
                <option value="愛媛県">愛媛県</option>
                <option value="高知県">高知県</option>
                <option value="福岡県">福岡県</option>
                <option value="佐賀県">佐賀県</option>
                <option value="長崎県">長崎県</option>
                <option value="熊本県">熊本県</option>
                <option value="大分県">大分県</option>
                <option value="宮崎県">宮崎県</option>
                <option value="鹿児島県">鹿児島県</option>
                <option value="沖縄県">沖縄県</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 hover:text-white transition-colors duration-300 whitespace-nowrap rounded-button"
            >
              登録する
            </button>
          </form>
          {message && (
            <div className={`mt-4 py-2 px-4 rounded-lg text-sm ${isSuccess ? 'bg-white text-primary' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
          <p className="text-sm mt-4 text-white/80">※登録は無料です。いつでも解除できます。</p>
        </div>
      </div>
    </section>
  );
};