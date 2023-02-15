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
            <Header title="暗号通貨自動取引プログラム" description="国内Bitflyerにて暗号通貨Bitcoin高頻度自動売買取引プログラムの制作" />
            <header>
                <Navigations />
                <Breadcrumb />
            </header>

            <main>
                <article className="content prose lg:prose-xl container m-auto">

                    <h1>
                        暗号通貨自動取引プログラム
                        <small className="text-xs block text-gray-500">
                            国内Bitflyerにて暗号通貨Bitcoin高頻度自動売買取引プログラムの制作
                        </small>
                    </h1>

                    <div className="container">
                        <Title props={{ title: "依頼主", subtitle: "どのような要望があったのか" }} />
                        <p>
                            お客様の属性やご要望
                        </p>
                        <ul>
                            <li>24時間取引できる暗号通貨での自動取引プログラム</li>
                            <li>メンテナンスフリー</li>
                            <li>高頻度取引でドローダウンが少ない安定した収入源</li>
                            <li>ロスカットや利益確定を半自動化したい</li>
                            <li>取引における自分ルールをプログラム化したい</li>
                        </ul>
                    </div>

                    <div className="container">
                        <Image src="/portfolio/screenshot-market-make.webp" width={1024} height={576} alt="" />
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
        timeline: '2021/11/10',
        manhours: 24,
        description: 'すべての稼働を行うテストコードを書き機能テストとデバッグを行い、バックテストとプログラムセーフを得てフロントテスト、合わせて細部調整'
    },
    {
        title: '稼働サーバー設定',
        timeline: '2021/11/07',
        manhours: 4,
        description: 'Linux debianサーバーに必要なものをインストールしてプログラム稼働を確認。Cronを設定し、ログを調整'
    },
    {
        title: 'データ受信及び発注時のラグを確認',
        timeline: '2021/11/05',
        manhours: 3,
        description: '実際の取引を繰り返し、取引所内部のラグなどを取得'
    },
    {
        title: '取引データを取得しバックテスト',
        timeline: '2021/11/04',
        manhours: 20,
        description: '取引に必要なデータをダウンロードし、ロジックで取引を繰り返すバックテストにかけ、評価を得る'
    },
    {
        title: 'ロジックをプログラム化',
        timeline: '2021/11/02',
        manhours: 10,
        description: '取引ロジックを伺い、言語化、プログラムに書きあげ調整をする'
    },
    {
        title: '暗号通貨取引所 Bitflyer APIを解析',
        timeline: '2021/11/01',
        manhours: 10,
        description: 'APIからの情報取得、注文を滞りなく行えるよう解析し、Wrapperを書く'
    },
]
