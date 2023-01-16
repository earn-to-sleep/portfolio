import Image from "next/image"
import Navigations from "../../components/Navigations"
import Footer from "../../components/Footer"
import Timeline from "../../components/Timeline"
import TimelineLite from "../../components/TimelineLite"
import Header from "../../components/Header"
import Title from "../../components/Title"

export default function Template() {
    return (
        <>
            <Header title="APIから取得した青空文庫を棒読みちゃんに朗読してもらう" description="ウェブ上に落ちているテキストを棒読みちゃんに朗読してもらい動画を制作したい" />
            <header>
                <Navigations />
            </header>

            <main>
                <article className="content prose lg:prose-xl container m-auto">
                    <h1>
                        APIから取得した青空文庫を棒読みちゃんに朗読してもらう
                        <small className="text-xs block text-gray-500">
                            ウェブ上に落ちているテキストを棒読みちゃんに朗読してもらい動画を制作したい
                        </small>
                    </h1>

                    <div className="container">
                        <Title props={{ title: "依頼主", subtitle: "どのような要望があったのか" }} />
                        <p>
                            お客様の属性やご要望
                        </p>
                        <ul>
                            <li>ユーチューバー、棒読みちゃんでの動画制作</li>
                            <li>動画制作を半自動化したい</li>
                            <li>ウェブ上に落ちている本のテキストをスクレイピングしたい</li>
                            <li>テキストを朗読してもらいたい</li>
                        </ul>
                    </div>

                    <div className="container">
                        <Image src="/portfolio/screenshot-bouyomichan.webp" width={1024} height={576} alt="棒読みちゃんによるテキスト朗読" />
                    </div>

                    <div className="container">
                        <Timeline items={timelineItems} />
                    </div>

                </article>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}



// 現在から過去へ
// 
const timelineItems = [
    {
        title: 'デバッグや各機能微調整',
        timeline: '2023/04/8',
        manhours: 4,
        description: '各機能を微調整し、デバッグ用テストコードを整備'
    },
    {
        title: 'スクレイピングプログラムを要望に合わせる',
        timeline: '2023/04/08',
        manhours: 2,
        description: '特定のサイトをスクレイピングして朗読テキストを洗い出し、各種パラメータを付与して保存。'
    },
    {
        title: 'リクエストパラメータを動的に変更かつ汎化性能を向上',
        timeline: '2023/04/07',
        manhours: 5,
        description: 'リクエストパラメータをキャラによって変えたいため動的に変更できるように調整。朗読以外にも汎用的に活用したいため整備'
    },
    {
        title: '棒読みちゃんのプロセス通信を解析',
        timeline: '2022/04/03',
        manhours: 5,
        description: '棒読みちゃんのプロセス間通信にはHTTPとTCP通信があり、TCP通信にてリクエストを送るプログラムを書く'
    }
]
