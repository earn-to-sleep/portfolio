import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
export default function Header({ title = "User596E9F4", description = "説明文" }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>{title}</title>
                <meta name="description" content={description} />

                {/* og:meta */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {/* <meta property="og:image" content="/ogp_large.png" />
            <meta name="twitter:card" content="summary_large_image" /> */}

                <link rel="manifest" href="/site.webmanifest" />
            </Head>
        </>

    )
}