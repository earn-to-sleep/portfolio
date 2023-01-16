import Image from "next/image"
import Navigations from "../../components/Navigations"
import Footer from "../../components/Footer"
import Timeline from "../../components/Timeline"
import Header from "../../components/Header"
import Title from "../../components/Title"

export default function Template() {
    return (
        <>
            <Header title="OpenAI GPT3 チャットを既存サービスに追加導入" description="自サーバで運用する既存サービス上にOpenAI GPT3 チャットを追加導入し、お客様の利便性向上" />
            <header>
                <Navigations />
            </header>

            <main>
                <article className="content prose lg:prose-xl container m-auto">
                    <h1>
                        OpenAI GPT3 チャットを既存サービスに追加導入
                        <small className="text-xs block text-gray-500">
                            自サーバで運用する既存サービス上にOpenAI GPT3 チャットを追加導入し、お客様の利便性向上
                        </small>
                    </h1>

                    <div className="container">
                        <Title props={{ title: "依頼主", subtitle: "どのような要望があったのか" }} />
                        <p>
                            お客様の属性やご要望
                        </p>
                        <ul>
                            <li>OpenAIによるAIチャットサービスGPT3を既存のサービス上に取り込みお客様の利便性を向上させたい</li>
                            <li>AIへのリクエストを事前に分岐</li>
                            <li>お問い合わせや要望など規定のワードにはルールベースの返答を行いたい</li>
                            <li>条件にあった質問に対してはデータベースへ保存</li>
                            <li>通知連絡</li>
                        </ul>
                    </div>

                    <div className="container">
                        <Image src="/portfolio/screenshot-chat-gpt3.webp" width={1024} height={576} alt="" />
                    </div>

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
        title: '追加リクエストとデバッグ',
        timeline: '2022/11/21',
        manhours: 5,
        description: 'GTP3からの返答が長い場合テキストを追加要望する処理やデバッグを行うテスト'
    },
    {
        title: '指定投稿ワードのルールを作り、APIリクエスト前に処理を追加',
        timeline: '2022/11/20',
        manhours: 10,
        description: '指定の投稿ワードが含まれていれば処理と通知を行う関数を追加。さらにデータベースへの保存と通知を追記'
    },
    {
        title: '通知処理を記述',
        timeline: '2022/11/18',
        manhours: 10,
        description: '特定のイベントで通知を行う関数を記述'
    },
    {
        title: 'Vue3, Axios, Element-Plusでチャットインターフェースを制作',
        timeline: '2022/11/17',
        manhours: 2,
        description: '既存サービスの1ページをチャットにし、HTML上でAxios APIリクエストを記述、OpenAI GTP3 APIレスポンスを表示'
    },
    {
        title: '顧客サービスの環境を把握',
        timeline: '2022/11/17',
        manhours: 2,
        description: 'お客様既存サービスの開発環境やルールドキュメントを頂戴し熟読。チャット部はHTMLとTypescriptでの実装'
    },
    {
        title: 'OpenAI GTP3のAPIドキュメントを理解',
        timeline: '2022/11/15',
        manhours: 2,
        description: 'OpenAI GTP3のAPIドキュメントを読み、リクエストとレスポンス、リミットレートを理解し、リクエストテスト'
    }
]
