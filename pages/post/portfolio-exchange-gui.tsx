import Image from "next/image"
import Breadcrumb from "../../components/Breadcrumb"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navigations from "../../components/Navigations"
import Timeline from "../../components/Timeline"
import Title from "../../components/Title"



export default function PortfolioExchangeGUI() {
    return (
        <>
            <Header title="au カブコム証券 KABU STATION APIへの特殊注文" description="日経225をメインに取引を行うデイトレーダーさまより受注" />
            <header>
                <Navigations />
                <Breadcrumb />
            </header>

            <main>
                <article className="content prose lg:prose-xl container m-auto">

                    <h1>
                        au カブコム証券 KABU STATION APIへの特殊注文
                        <small className="text-xs block text-gray-500">
                            日経225をメインに取引を行うデイトレーダーさまより受注
                        </small>
                    </h1>

                    <div className="container">
                        <Title props={{ title: "依頼主", subtitle: "どのような要望があったのか" }} />
                        <p>
                            お客様の属性やご要望
                        </p>
                        <ul>
                            <li>楽天証券で日経225の取引をデイもしくは短期取引を行う</li>
                            <li>特徴のある板や約定があれば注文実行、なければキャンセルを反射神経以上の速度で行いたい</li>
                            <li>注文速度は早い方がいい</li>
                            <li>ロスカットや利益確定を半自動化したい</li>
                            <li>取引における自分ルールをプログラム化したい</li>
                        </ul>
                    </div>

                    <div className="container">
                        <Image src="/portfolio/screenshot01.webp" width={1024} height={576} alt="" />
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

// 過去のものから現在へ
// 
const timelineItems = [
    {
        title: '機能テスト、デバッグ及び細部調整',
        timeline: '2023/01/07',
        manhours: 5,
        description: '機能を書き終えたらすべての稼働を行うテストコードを書き機能テストとデバッグを行う。合わせて細部調整'
    },
    {
        title: 'GUI表示部を調整',
        timeline: '2023/01/07',
        manhours: 4,
        description: 'React, Nextjsで入力などのフロントエンドを書き、AxiosJSで内部APIと連携する関数を書く'
    },
    {
        title: 'API Wrapperを書く',
        timeline: '2023/01/05',
        manhours: 10,
        description: '内部APIで注文や約定管理を行うため、GoAPI用のWrapperを書き、テスト注文を行い約定や建玉の情報を管理するシステムを調整'
    },
    {
        title: 'au カブドットコム証券 API解析',
        timeline: '2023/01/04',
        manhours: 10,
        description: 'API KEYなどはお客様にご用意頂き、auカブコム証券 kabu Station API Documentを読み理解し、約定と板データ取得'
    },
]
