import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Breadcrumb() {
    const router = useRouter()

    return (
        <nav className="flex m-auto container" aria-label="Breadcrumb">
            <ol id="breadcrumb" className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a onClick={router.back} className="cursor-pointer inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        戻る
                    </a>
                </li>
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Home
                    </Link>
                </li>
            </ol>
        </nav >

    )
}

