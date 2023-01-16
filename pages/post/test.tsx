import Navigations from "../../components/Navigations"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const TestT = () => {
    return (
        <>
            <Header title="title" description="description" />
            <header>
                <Navigations />
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


export default TestT