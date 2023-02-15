import Header from '../components/Header'
import Navigations from '../components/Navigations'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Title from '../components/Title'
import React, { FormEvent } from 'react'
import InputEmail from '../components/InputEmail'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Header />
      <header>
        <Navigations />
      </header>
      <main>
        <Portfolio />

        <div id="portfolio" className='grid grid-cols-3'>
          <div className='m-2'>
            <Link href="/post/portfolio-exchange-gui" className="card">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">au カブコム証券 KABU STATION APIへの特殊注文</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">日経225をメインに取引を行うデイトレーダーさまより受注</p>
            </Link>
          </div>
          <div className='m-2'>
            <Link href="/post/portfolio-chat-with-gpt3" className="card">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OpenAI GPT3 チャットを既存サービスに追加導入</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">自サーバで運用する既存サービス上にOpenAI GPT3 チャットを追加導入し、お客様の利便性向上</p>
            </Link>
          </div>
          <div className='m-2'>
            <Link href="/post/portfolio-arbitrage-for-crypto" className="card">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">暗号通貨国内外取引所間アービトラージの自動化</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">暗号通貨国内外間での価格差や取引高による金利差など歪みを得るアービトラージをプログラム化</p>
            </Link>
          </div>
        </div>

        <div id="portfolio" className='content prose m-auto mb-10 lg:prose-xl container justify-center'>
          <Title props={{ title: "Other programs", subtitle: "その他プログラム" }} />
          <ul>
            {products.map((product) => <li key={product.title}><span className="bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-500 ml-3">{product.manhours} hours</span><Link href={product.href}>{product.title}
            </Link></li>)}
          </ul>
        </div>

        <div id="services" className="content prose m-auto mb-10 lg:prose-xl container justify-center">
          <Title props={{ title: "Services", subtitle: "提供技術について" }} />
          <Services props={services} />
        </div>

        <div id="about" className="content prose m-auto mb-10 lg:prose-xl container justify-center">
          <Title props={{ title: "About us", subtitle: "我々について" }} />
          <h3>経験や得意分野について</h3>
          <p>
            API制作やAPI Wrapper、ロジック選定、実装が得意です。データ分析をする機会も増え、機械学習での分析や実装にいくつか携わりました。
            WordpressをメインにPHPやVue/Reactを含むJavascript活用機会も多いです。上記に付帯し、データ取得のためスクレイピングをすることが多く、汎用的なコードを複数保持しています。
          </p>
          <p>
            開発言語は、Goが最も効率よく早く、次点でPython, Javascript。開発環境はGoogle Console Platformの活用機会が多く触りなれています。
          </p>
          <p>またgithubは小・中規模の開発チームで使い慣れています。</p>
          <h3>開発歴について</h3>
          <p>
            弊githubには100を超えるレポジトリがあり、特に金融系のツールが多いです。中でも、取引所APIのWrapperや取引ロジックに関するモジュールが多く、有益な機能を提供するプログラムとして<span className="text-deco-blue"><span className="text-yellow-500">★</span>100</span>と多くのスターを頂き活用されています。
          </p>
          <h3>連絡について</h3>
          <p>
            24時間プログラムをはじめ、調べ物や映画やゲームなどをPC前にいます。
            なにか質問や要望が浮かびましたら、お気軽にお声がけください。ご連絡お待ちしております。
          </p>
          <h3>最後に</h3>
          <p>
            前述の経験や開発歴、弊ポートフォリオ内にある過去に書いたプログラミングコードは汎用的かつ再利用可能にモジュール化しており、転用しやすく保存しております。
          </p>
          <p>
            そのため、貴社要望点と弊ポートフォリオに似ている点があれば、<span className='text-deco-blue'>依頼前に不安な実稼働や効果がイメージしやすい</span>ようサンプル稼働をご覧いただけます。要望や問題解消の一助になるプログラミングコードがあれば幸いです。
            <Link href="/#portfolio">
              <small className="text-xs block text-gray-500">
                ポートフォリオについて
              </small>
            </Link>
          </p>
          <p>
            ご機会を頂戴し、ありがとうございます。 <br />
            よろしくお願いいたします。
          </p>
        </div>

        <div id="contact" className="content prose m-auto mb-10 lg:prose-xl container justify-center">
          <InputEmail />
        </div>


      </main >

      <footer>
        <Footer />
      </footer>
    </>
  )
}



const products = [
  { date: "2021/11/1", manhours: "71", title: "暗号通貨自動取引プログラム", href: "/post/portfolio-market-make" },
  { date: "2022/04/8", manhours: "16", title: "APIから取得した青空文庫を棒読みちゃんに朗読してもらう", href: "/post/portfolio-bouyomichan" },
  { date: "2023/01/18", manhours: "x", title: "機械学習でのアルゴリズム取引について個人的所感", href: "/post/portfolio-machine-learning-for-algorithm-trade" }
];

const services = [
  { href: "/post/portfolio-exchange-gui", src: "/portfolio/api-make.jpg", title: "API&Database", text: "アプリやウェブサービスの土台となるAPI、データベースを制作。特に速度と可読性に強み" },
  { href: "/post/portfolio-arbitrage-for-crypto", src: "/portfolio/matching.jpg", title: "マッチングシステム", text: "複数個体要素の類似点を見つけ比べ繋ぐマッチングシステムと課金システムを含むロジックに強み" },
  { href: "/post/portfolio-chat-with-gpt3", src: "/portfolio/ml.jpg", title: "機械学習", text: "データ取得から前処理、分析。ご要望頂ければ提案、改善まで引き受けます。" },
];
