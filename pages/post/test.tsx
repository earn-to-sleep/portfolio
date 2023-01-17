import Navigations from "../../components/Navigations"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Breadcrumb from "../../components/Breadcrumb"


export default function Test() {

    return (
        <>
            <Header title="title" description="description" />
            <header>
                <Navigations />
                <Breadcrumb />
            </header>

            <main>
                <p>test</p>
            </main>

            <footer>
                <Footer />
            </footer>
        </>

    )
}
