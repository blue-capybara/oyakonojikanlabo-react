import React from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';

export const ArticleDetail: React.FC = () => {
  return (
    <DefaultLayout>
      {/* 記事ヘッダー */}
      <section className="pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <a href="/" className="flex items-center text-gray-600 hover:text-primary">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <i className="ri-arrow-left-line"></i>
              </div>
              <span>特集一覧に戻る</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">特集</span>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full">インタビュー</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">なかやみわさんとの"ものづくり"対談</h1>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520headshot%2520of%2520a%2520female%2520Japanese%2520editor%2520in%2520her%252030s%2520with%2520short%2520black%2520hair%2520and%2520glasses%252C%2520looking%2520confident%2520and%2520approachable%2520against%2520a%2520neutral%2520background.%2520The%2520photo%2520should%2520be%2520well-lit%2520with%2520soft%2520lighting%2520and%2520professional%2520quality.&width=200&height=200&seq=1&orientation=squarish" 
                alt="編集部 佐藤" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">編集部 佐藤明子</p>
              <p className="text-sm text-gray-500">2025年6月18日公開</p>
            </div>
          </div>
        </div>
      </section>

      {/* メイン画像 */}
      <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden relative">
        <img 
          src="https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520inviting%2520interview%2520setting%2520with%2520a%2520famous%2520Japanese%2520children%2527s%2520book%2520author%2520and%2520illustrator%2520showing%2520her%2520artwork%2520and%2520books%2520to%2520an%2520interviewer.%2520The%2520space%2520has%2520natural%2520lighting%252C%2520bookshelves%2520with%2520colorful%2520children%2527s%2520books%252C%2520and%2520art%2520supplies.%2520The%2520atmosphere%2520is%2520creative%2520and%2520professional%2520with%2520a%2520touch%2520of%2520whimsy.&width=1200&height=600&seq=2&orientation=landscape" 
          alt="なかやみわさんとの対談" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 記事本文 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* SNSシェアボタン */}
            <div className="flex items-center justify-end space-x-4 mb-8">
              <span className="text-sm text-gray-500">シェアする：</span>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#06C755] text-white">
                <i className="ri-line-fill"></i>
              </a>
            </div>

            {/* 記事導入部 */}
            <div className="mb-10">
              <p className="text-lg leading-relaxed mb-6">
                子どもたちが大好きな絵本「くれよんのくろくん」と「そらまめくん」。どちらも絵本作家なかや みわさんの作品です。今回は、なかやさんにお話を伺い、ものづくりの原点や創作の秘密について語っていただきました。
              </p>
              <p className="text-lg leading-relaxed">
                なかやさんの作品は、シンプルでありながらも温かみのある絵と、子どもたちの心に寄り添うストーリーが特徴です。今回の対談では、そんな魅力的な作品が生まれる背景に迫ります。
              </p>
            </div>

            {/* 記事本文 */}
            <div className="article-content">
              <h2>なかやみわさんとの出会い</h2>
              <p>
                東京都内のカフェで待ち合わせたなかやさんは、温かな笑顔で現れました。テーブルには、最新作の「そらまめくんとめだかのこ」を含む、なかやさんの代表作が並べられています。
              </p>
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520collection%2520of%2520Japanese%2520children%2527s%2520picture%2520books%2520arranged%2520beautifully%2520on%2520a%2520wooden%2520table%2520in%2520a%2520cafe%2520setting.%2520The%2520books%2520are%2520colorful%2520with%2520illustrated%2520covers%2520featuring%2520cute%2520characters.%2520Natural%2520lighting%2520streams%2520in%2520from%2520a%2520nearby%2520window%252C%2520creating%2520a%2520warm%2520and%2520inviting%2520atmosphere.%2520A%2520cup%2520of%2520coffee%2520and%2520notebook%2520sit%2520nearby.&width=800&height=500&seq=3&orientation=landscape" 
                alt="なかやみわさんの絵本" 
                className="w-full"
              />
              <p className="caption">なかやみわさんの代表作の数々</p>
              <div className="interview-q">
                ――なかやさんが絵本作家を目指したきっかけは何だったのでしょうか？
              </div>
              <div className="interview-a">
                子どもの頃から絵を描くことが大好きでした。特に生き物を描くことに夢中で、小学生の頃には友達のノートに動物の絵を描いてあげていたんです。でも、絵本作家になろうと決めたのは、自分の子どもが生まれてからです。子どもに読み聞かせをする中で、「こんな絵本があったらいいな」と思うようになり、自分でも作ってみたいと思ったのがきっかけでした。
              </div>

              <h2>「くれよんのくろくん」誕生秘話</h2>
              <p>
                なかやさんの代表作「くれよんのくろくん」は、1990年に出版されて以来、多くの子どもたちに愛され続けています。黒いクレヨンが主人公という独創的な設定は、どのようにして生まれたのでしょうか。
              </p>
              <div className="interview-q">
                ――「くれよんのくろくん」のアイデアはどのように生まれたのですか？
              </div>
              <div className="interview-a">
                子どもと一緒にクレヨンで絵を描いていた時のことです。子どもが「黒は暗くて怖いから使わない」と言ったんです。でも、黒がないと影も描けないし、輪郭も描けない。黒は実はとても大切な色なんだということを、子どもにも分かりやすく伝えたいと思ったんです。それで、黒いクレヨンに感情を持たせて、自分の存在意義を見つけていく物語を考えました。
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520creative%2520workspace%2520with%2520sketches%2520and%2520drafts%2520of%2520children%2527s%2520book%2520illustrations%2520spread%2520out%2520on%2520a%2520desk.%2520Colorful%2520crayons%2520are%2520prominently%2520featured%252C%2520with%2520special%2520focus%2520on%2520a%2520black%2520crayon.%2520The%2520workspace%2520has%2520natural%2520lighting%2520and%2520shows%2520the%2520process%2520of%2520creating%2520a%2520children%2527s%2520picture%2520book%2520with%2520character%2520sketches%2520and%2520storyboard%2520elements.&width=800&height=500&seq=4&orientation=landscape" 
                alt="くれよんのくろくんの創作過程" 
                className="w-full"
              />
              <p className="caption">「くれよんのくろくん」の創作過程</p>
              <blockquote>
                「くろくん」は、自分の居場所を見つけるまでの物語です。これは子どもだけでなく、大人にも共感してもらえるテーマだと思っています。誰もが自分の役割や存在意義を探しながら生きているのではないでしょうか。
              </blockquote>

              <h2>ものづくりの原点</h2>
              <p>
                なかやさんの作品には、登場人物たちが何かを作り出す場面が多く登場します。「そらまめくん」シリーズでは、主人公のそらまめくんが友達と協力して様々なものを作り上げていきます。
              </p>
              <div className="interview-q">
                ――なかやさんの作品には「ものづくり」のテーマが多く見られますが、これにはどのような思いが込められているのでしょうか？
              </div>
              <div className="interview-a">
                子どもたちには、自分の手で何かを作る喜びを知ってほしいと思っています。今の時代、便利なものに囲まれて生活していますが、自分で考えて、試行錯誤しながら何かを作り上げる経験は、子どもの創造力や問題解決能力を育むと思うんです。「そらまめくん」シリーズでは、友達と協力して何かを作る過程も大切にしています。一人ではできないことも、みんなで力を合わせればできるようになる。そんなメッセージも込めています。
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520engaging%2520scene%2520of%2520children%2520working%2520together%2520on%2520a%2520creative%2520project%2520at%2520a%2520table%2520filled%2520with%2520art%2520supplies.%2520The%2520children%2520are%2520collaborating%2520happily%252C%2520showing%2520teamwork%2520and%2520creativity.%2520The%2520setting%2520is%2520bright%2520and%2520colorful%2520with%2520natural%2520lighting%252C%2520and%2520there%2520are%2520children%2527s%2520books%2520visible%2520nearby.%2520The%2520atmosphere%2520captures%2520the%2520joy%2520of%2520making%2520things%2520together.&width=800&height=500&seq=5&orientation=landscape" 
                alt="子どもたちの共同制作" 
                className="w-full"
              />
              <p className="caption">子どもたちが協力して作品を作り上げる様子</p>

              <h3>子どもたちへのメッセージ</h3>
              <p>
                なかやさんは、絵本を通じて子どもたちに伝えたいことがあると言います。
              </p>
              <div className="interview-q">
                ――なかやさんが絵本を通じて子どもたちに伝えたいことは何ですか？
              </div>
              <div className="interview-a">
                「自分らしさを大切にしてほしい」ということです。「くれよんのくろくん」も「そらまめくん」も、最初は自分に自信がなかったり、悩んだりしています。でも、周りの人との関わりの中で、自分にしかできないことを見つけていくんです。子どもたちにも、自分だけの特別な個性があることを知ってほしいですね。また、失敗を恐れずにチャレンジする勇気も持ってほしいと思います。絵本の中の主人公たちも、いろいろな困難に直面しますが、諦めずに前に進んでいきます。
              </div>

              <h2>創作の秘密</h2>
              <p>
                なかやさんの絵本は、シンプルながらも深いメッセージが込められています。その創作プロセスについても伺いました。
              </p>
              <div className="interview-q">
                ――絵本を作る際のプロセスを教えてください。アイデアはどのように形にしていくのですか？
              </div>
              <div className="interview-a">
                最初は漠然としたイメージやテーマから始まることが多いです。例えば「友情について描きたい」とか「協力することの大切さを伝えたい」といった具合です。そこから、どんなキャラクターが適しているか考えます。キャラクターが決まったら、その子がどんな冒険をするか、どんな問題に直面するか、ストーリーを組み立てていきます。
                <br /><br />
                絵と文章は同時に考えることが多いですね。絵本は絵と文章が一体となって物語を伝えるものなので、どちらか一方だけで完結しないようにしています。何度も描き直したり、文章を推敲したりしながら、少しずつ形にしていきます。
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520detailed%2520view%2520of%2520an%2520illustrator%2527s%2520desk%2520showing%2520the%2520process%2520of%2520creating%2520a%2520children%2527s%2520picture%2520book.%2520The%2520desk%2520has%2520sketches%252C%2520color%2520tests%252C%2520storyboards%252C%2520and%2520finished%2520illustrations%2520at%2520various%2520stages.%2520Art%2520supplies%2520including%2520watercolors%252C%2520brushes%252C%2520and%2520pencils%2520are%2520neatly%2520arranged.%2520A%2520manuscript%2520with%2520handwritten%2520notes%2520is%2520visible.%2520The%2520workspace%2520appears%2520professional%2520yet%2520creative%2520with%2520good%2520natural%2520lighting.&width=800&height=500&seq=6&orientation=landscape" 
                alt="絵本制作の過程" 
                className="w-full"
              />
              <p className="caption">絵本制作の様々な段階を示す作業机</p>

              <h3>子どもたちの反応</h3>
              <p>
                なかやさんは、読者である子どもたちの反応をとても大切にしているそうです。
              </p>
              <div className="interview-q">
                ――子どもたちからの反応で印象に残っているエピソードはありますか？
              </div>
              <div className="interview-a">
                読み聞かせイベントで、一人の男の子が「ぼく、くろくんみたいに役に立ちたい」と言ってくれたことがあります。その子は、クラスで目立たない存在だったそうですが、「くれよんのくろくん」を読んで、自分にもできることがあると思ってくれたようです。そういう反応をいただくと、本当に嬉しいですね。
                <br /><br />
                また、「そらまめくん」の絵本を読んだ後、子どもたちが実際に豆を育て始めたという話も聞きます。絵本がきっかけで、子どもたちが何かに興味を持ち、行動を起こしてくれることは、作者として最高の喜びです。
              </div>

              <h2>これからの創作活動</h2>
              <p>
                最後に、なかやさんの今後の創作活動について伺いました。
              </p>
              <div className="interview-q">
                ――今後、どのような作品を作っていきたいですか？
              </div>
              <div className="interview-a">
                これからも、子どもたちの心に寄り添う絵本を作っていきたいと思っています。特に、今の時代の子どもたちが直面している問題や悩みを取り上げた作品も作れたらいいなと考えています。例えば、多様性を認め合うことの大切さや、自然環境との共生など、今の子どもたちに伝えたいテーマはたくさんあります。
                <br /><br />
                また、「くれよんのくろくん」や「そらまめくん」シリーズの新作も構想中です。長く愛されているキャラクターたちの新しい冒険を、楽しみにしていてください。
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520bright%2520and%2520inspiring%2520image%2520of%2520a%2520female%2520Japanese%2520children%2527s%2520book%2520author%2520and%2520illustrator%2520working%2520at%2520her%2520desk%2520with%2520a%2520look%2520of%2520creative%2520concentration.%2520She%2520is%2520surrounded%2520by%2520colorful%2520illustrations%252C%2520sketches%2520of%2520new%2520characters%252C%2520and%2520children%2527s%2520books.%2520The%2520workspace%2520is%2520filled%2520with%2520natural%2520light%2520and%2520has%2520a%2520warm%252C%2520creative%2520atmosphere.%2520Plants%2520and%2520inspirational%2520items%2520are%2520visible%2520in%2520the%2520background.&width=800&height=500&seq=7&orientation=landscape" 
                alt="制作中のなかやみわさん" 
                className="w-full"
              />
              <p className="caption">新作の構想を練るなかやみわさん</p>

              <h2>おわりに</h2>
              <p>
                2時間にわたる対談は、なかやさんの温かな人柄と、子どもたちへの深い愛情が伝わる内容となりました。「くれよんのくろくん」や「そらまめくん」といった作品が多くの子どもたちに愛され続けている理由が、よく理解できる時間でした。
              </p>
              <p>
                なかやさんの絵本には、「自分らしさを大切にする」「友達と協力する」「ものづくりの喜び」など、子どもたちの成長に欠かせない要素がたくさん詰まっています。これからも、子どもたちの心に寄り添う素敵な作品を生み出し続けてくださることでしょう。
              </p>
              <p>
                最後に、貴重なお時間を割いてインタビューに応じてくださったなかやみわさんに、心より感謝申し上げます。
              </p>
            </div>

            {/* 著者プロフィール */}
            <div className="mt-16 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%2520professional%2520headshot%2520of%2520a%2520female%2520Japanese%2520children%2527s%2520book%2520author%2520and%2520illustrator%2520in%2520her%252050s%2520with%2520a%2520warm%2520smile%2520and%2520creative%2520appearance.%2520She%2520has%2520medium-length%2520black%2520hair%2520and%2520is%2520wearing%2520casual%2520but%2520professional%2520attire.%2520The%2520background%2520is%2520simple%2520and%2520neutral%252C%2520and%2520the%2520lighting%2520is%2520soft%2520and%2520flattering.&width=200&height=200&seq=8&orientation=squarish" 
                    alt="なかやみわ" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">なかや みわ</h3>
                  <p className="text-gray-600 mb-3">絵本作家・イラストレーター。1967年生まれ。代表作に「くれよんのくろくん」シリーズ、「そらまめくん」シリーズなど。温かみのある絵と、子どもたちの心に寄り添うストーリーが特徴。数々の絵本賞を受賞し、作品は多くの言語に翻訳されている。</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:underline">公式サイト</a>
                    <a href="#" className="text-primary hover:underline">Twitter</a>
                    <a href="#" className="text-primary hover:underline">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* SNSシェアボタン（下部） */}
            <div className="flex items-center justify-center space-x-4 mt-12 border-t border-b border-gray-200 py-6">
              <span className="text-gray-500">この記事をシェアする：</span>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#06C755] text-white">
                <i className="ri-line-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=A%2520professional%2520photograph%2520of%2520a%2520Japanese%2520male%2520children%2527s%2520book%2520author%2520in%2520his%252040s%2520engaged%2520in%2520a%2520creative%2520workshop%2520with%2520children.%2520He%2520is%2520showing%2520them%2520how%2520to%2520draw%2520or%2520illustrate%2520in%2520a%2520bright%252C%2520colorful%2520classroom%2520setting.%2520The%2520atmosphere%2520is%2520educational%2520and%2520fun%252C%2520with%2520children%2527s%2520artwork%2520visible%2520in%2520the%2520background.&width=400&height=250&seq=9&orientation=landscape" 
                  alt="ヨシタケシンスケさんワークショップ" 
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-3">イベントレポート</span>
                  <h3 className="text-xl font-bold mb-2">ヨシタケシンスケさんと考える「絵本の可能性」</h3>
                  <p className="text-gray-600 mb-4">人気絵本作家ヨシタケシンスケさんによる特別ワークショップのレポート。子どもたちと一緒に「もしも」の世界を描きました。</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">2025年6月10日</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=A%2520colorful%2520display%2520of%2520children%2527s%2520books%2520featuring%2520bean%2520characters%2520and%2520crayon%2520characters%252C%2520arranged%2520attractively%2520in%2520a%2520bookstore%2520or%2520library%2520setting.%2520The%2520books%2520are%2520prominently%2520displayed%2520with%2520related%2520merchandise%2520like%2520stuffed%2520toys%2520of%2520the%2520characters.%2520The%2520setting%2520is%2520bright%2520and%2520inviting%2520with%2520good%2520lighting%2520to%2520showcase%2520the%2520vibrant%2520book%2520covers.&width=400&height=250&seq=10&orientation=landscape" 
                  alt="人気絵本シリーズ特集" 
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full mb-3">特集</span>
                  <h3 className="text-xl font-bold mb-2">子どもに読んであげたい人気絵本シリーズ10選</h3>
                  <p className="text-gray-600 mb-4">長く愛され続ける絵本シリーズを厳選してご紹介。「くれよんのくろくん」や「そらまめくん」シリーズも含む必読の作品たち。</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">2025年5月25日</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=A%2520warm%2520and%2520engaging%2520scene%2520of%2520a%2520parent%2520reading%2520a%2520picture%2520book%2520to%2520a%2520child%2520in%2520a%2520cozy%2520home%2520setting.%2520The%2520parent%2520and%2520child%2520are%2520sitting%2520together%2520on%2520a%2520comfortable%2520couch%2520or%2520reading%2520nook%2520with%2520soft%2520lighting.%2520Bookshelves%2520with%2520children%2527s%2520books%2520are%2520visible%2520in%2520the%2520background.%2520The%2520atmosphere%2520conveys%2520the%2520special%2520bond%2520created%2520during%2520reading%2520time.&width=400&height=250&seq=11&orientation=landscape" 
                  alt="読み聞かせのコツ" 
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full mb-3">コラム</span>
                  <h3 className="text-xl font-bold mb-2">絵本の読み聞かせで大切にしたい5つのこと</h3>
                  <p className="text-gray-600 mb-4">子どもの想像力と言語能力を育む読み聞かせ。効果を最大限に引き出すためのポイントを専門家が解説します。</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">2025年6月5日</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* おすすめ商品 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">なかやみわさんの絵本・グッズ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520Japanese%2520children%2527s%2520picture%2520book%2520featuring%2520a%2520black%2520crayon%2520character%2520on%2520the%2520cover.%2520The%2520book%2520is%2520displayed%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520cover%2520is%2520colorful%2520and%2520appealing%2520to%2520children%2520with%2520a%2520simple%2520illustration%2520style.&width=300&height=300&seq=12&orientation=squarish" 
                alt="くれよんのくろくん" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mb-2">ベストセラー</span>
                <h3 className="text-lg font-bold mb-2">くれよんのくろくん</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,320</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520Japanese%2520children%2527s%2520picture%2520book%2520featuring%2520a%2520cute%2520bean%2520character%2520on%2520the%2520cover.%2520The%2520book%2520is%2520displayed%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520cover%2520is%2520colorful%2520and%2520appealing%2520to%2520children%2520with%2520a%2520simple%2520illustration%2520style.&width=300&height=300&seq=13&orientation=squarish" 
                alt="そらまめくんのベッド" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full mb-2">人気商品</span>
                <h3 className="text-lg font-bold mb-2">そらまめくんのベッド</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,320</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520cute%2520plush%2520toy%2520of%2520a%2520black%2520crayon%2520character%2520from%2520a%2520Japanese%2520children%2527s%2520book.%2520The%2520plush%2520toy%2520is%2520displayed%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520toy%2520has%2520a%2520simple%2520design%2520with%2520embroidered%2520features%2520and%2520is%2520made%2520of%2520soft%2520fabric.&width=300&height=300&seq=14&orientation=squarish" 
                alt="くろくんぬいぐるみ" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full mb-2">限定品</span>
                <h3 className="text-lg font-bold mb-2">くろくん ぬいぐるみ</h3>
                <p className="text-gray-700 font-bold mb-3">¥2,750</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520product%2520photograph%2520of%2520a%2520set%2520of%2520colorful%2520children%2527s%2520socks%2520featuring%2520crayon%2520characters%2520from%2520a%2520Japanese%2520picture%2520book.%2520The%2520socks%2520are%2520arranged%2520neatly%2520against%2520a%2520clean%2520white%2520background%2520with%2520soft%2520shadows.%2520The%2520socks%2520have%2520cute%2520designs%2520and%2520bright%2520colors%2520appealing%2520to%2520children.&width=300&height=300&seq=15&orientation=squarish" 
                alt="くれよんのくろくん靴下" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full mb-2">新商品</span>
                <h3 className="text-lg font-bold mb-2">くれよんのくろくん 靴下</h3>
                <p className="text-gray-700 font-bold mb-3">¥1,100</p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">商品詳細</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* イベント情報 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">なかやみわさん関連イベント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 text-xs rounded-full">サイン会</span>
                  <span className="text-gray-500 text-sm">東京都</span>
                </div>
                <h3 className="text-xl font-bold mb-2">なかやみわさん 新刊サイン会</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>2025年7月15日(火) 14:00〜16:00</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>有楽町 丸の内ブックセンター</span>
                </div>
                <p className="text-gray-600 mb-4">
                  新刊「そらまめくんとめだかのこ」発売を記念したサイン会です。先着50名様に特製ブックカバーをプレゼント！
                </p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">イベント詳細</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">ワークショップ</span>
                  <span className="text-gray-500 text-sm">大阪府</span>
                </div>
                <h3 className="text-xl font-bold mb-2">なかやみわさんと作る！オリジナルキャラクター</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>2025年7月23日(水) 10:30〜12:00</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>PICO豊中</span>
                </div>
                <p className="text-gray-600 mb-4">
                  なかやみわさんと一緒に、オリジナルキャラクターを作るワークショップ。対象年齢：5歳〜小学生。保護者同伴必須。
                </p>
                <button className="w-full bg-primary text-white py-2 font-medium rounded-button whitespace-nowrap">イベント詳細</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ニュースレター登録 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">親子の時間研究所ニュースレター会員（無料）</h2>
            <p className="mb-8">新作絵本やグッズのご紹介や作家インタビュー、お住まいの地域でのイベント案内など、カルチャーあふれるニュースレターを定期的にお届けします。</p>
            <form className="flex flex-col gap-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="メールアドレス" 
                  required 
                  className="px-4 py-3 rounded-lg border-none text-gray-800 w-full text-sm" 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <select 
                  name="prefecture" 
                  required 
                  className="px-4 py-3 rounded-lg border-none text-gray-800 w-full sm:w-40 text-sm appearance-none pr-8 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5H7z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-[calc(100%-8px)_center] bg-no-repeat"
                >
                  <option value="" disabled selected>都道府県</option>
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
            <p className="text-sm mt-4 text-white/80">※登録は無料です。いつでも解除できます。</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};