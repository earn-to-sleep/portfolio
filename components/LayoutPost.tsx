import Footer from "./Footer"
import Navigations from "./Navigations"


const Layout = (child: any) => {

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

export default Layout