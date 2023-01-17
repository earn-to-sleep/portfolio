import Navigations from "../../components/Navigations"
import Footer from "../../components/Footer"
import Timeline from "../../components/Timeline"
import Header from "../../components/Header"
import Title from "../../components/Title"
import Breadcrumb from "../../components/Breadcrumb"

export default function Template() {
    return (
        <>
            <Header title="暗号通貨国内外取引所間アービトラージの自動化" description="暗号通貨国内外間での価格差や取引高による金利差など歪みを得るアービトラージをプログラム化" />
            <header>
                <Navigations />
                <Breadcrumb />
            </header>

            <main>
                <article className="content prose lg:prose-xl container m-auto">
                    <h1>
                        暗号通貨国内外取引所間アービトラージの自動化
                        <small className="text-xs block text-gray-500">
                            暗号通貨国内外間での価格差や取引高による金利差など歪みを得るアービトラージをプログラム化
                        </small>
                    </h1>

                    <div className="container">
                        <Title props={{ title: "依頼主", subtitle: "どのような要望があったのか" }} />
                        <p>
                            お客様の属性やご要望
                        </p>
                        <ul>
                            <li>国内外の暗号通貨価格に差が生じている</li>
                            <li>国内外取引所への送金は比較的高速</li>
                            <li>複数個の取引所を監視して価格差をデータ化したい</li>
                            <li>ある条件下で複数個の取引所へ同時に注文を行いたい</li>
                            <li>ある条件下で複数個の取引所の建玉を決済注文したい</li>
                        </ul>
                    </div>

                    {/* <div className="container">
                        <Image src="/portfolio/screenshot01.webp" width={1024} height={576} alt="" />
                    </div> */}

                    <div className="container">
                        <Timeline items={timelineItems} />
                    </div>

                    {/* <div className="container">
                        <TimelineLite items={timelineItems} />
                    </div> */}

                </article>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}




// 過去のものから現在へ
// 
const timelineItems = [
    {
        title: '注文キャンセルや自炊漏れ、稼働エラーなどをデバッグ',
        timeline: '2018/12/11',
        manhours: 10,
        description: '約定による建玉自炊のズレやエラー、API情報によるズレを修正'
    },
    {
        title: '約定や定期建玉通知',
        timeline: '2018/12/10',
        manhours: 2,
        description: '開発時に活用していた通知が便利だったので追加。メールまたはLINE、Discordを選択可能'
    },
    {
        title: '価格差に対して両取引所に注文発注、収縮に応じて決済',
        timeline: '2018/12/04',
        manhours: 10,
        description: '価格差が生じたら両取引所へ注文を発注し約定を取得。約定記録より建玉を自炊し建玉と証拠金比率を保存。価格差が生じた両取引所の価格差が収縮したタイミングで対象の建玉を決済し約定を監視'
    },
    {
        title: '複数の取引所のAPIからデータを取得し常時監視',
        timeline: '2018/11/29',
        manhours: 10,
        description: 'VPSとデータベースを整備し、取引所価格を監視しデータベースへ保存。同時刻価格に差が生じたらDiscordへ通知'
    },
    {
        title: 'APIを解析しWrapperを整備',
        timeline: '2018/11/27',
        manhours: 10,
        description: '取引所各々のAPIを解析し、価格監視と注文、約定管理のためのAPI Wrapperを整備'
    },
    {
        title: '国内外取引所をリストアップし、APIを解析',
        timeline: '2018/11/20',
        manhours: 20,
        description: '国内取引所3ヶ所、海外取引所8ヶ所のAPIを解析。APIがない取引所についてはスクレイピングで対応'
    }
]

