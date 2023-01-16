import Footer from "./Footer"
import Navigations from "./Navigations"


export default function Layout(child: any) {

    return (
        <>
            <header>
                <Navigations />
            </header>

            <main>
                {child}
            </main>

            <footer>
                <Footer />
            </footer>

        </>
    )
}

