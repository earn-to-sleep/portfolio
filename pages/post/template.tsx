import Image from "next/image"
import Navigations from "../../components/Navigations"
import Footer from "../../components/Footer"
import Timeline from "../../components/Timeline"
import TimelineLite from "../../components/TimelineLite"
import Header from "../../components/Header"
import Title from "../../components/Title"

const Template = () => {
    return (
        <>
            <Header title="title" description="description" />
            <header>
                <Navigations />
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
                        <p>
                            Noteworthy technology acquisitions 2021
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>

                    <div className="container">
                        <Image src="/portfolio/screenshot01.webp" width={1024} height={576} alt="" />
                    </div>

                    <div className="container">
                        <Timeline items={timelineItems} />
                    </div>

                    <div className="container">
                        <TimelineLite items={timelineItems} />
                    </div>

                </article>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Template



// 現在から過去へ
// 
const timelineItems = [
    {
        title: '',
        timeline: '2023/01/07',
        manhours: 5,
        description: ''
    },
    {
        title: '',
        timeline: '2023/01/07',
        manhours: 4,
        description: ''
    },
    {
        title: '',
        timeline: '2023/01/05',
        manhours: 10,
        description: ''
    },
    {
        title: '',
        timeline: '2023/01/04',
        manhours: 10,
        description: ''
    },
]
