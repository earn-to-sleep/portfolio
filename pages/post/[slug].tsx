// APIなどから取得したデータからページを生成できる

export default function Posts({ posts }: any) {
    return (
        posts.map((post: any, index: number) => (
            <p key={index}>{post}</p>
        ))
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post: any) => ({
        params: { id: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}