import Image from "next/image"
import Link from "next/link"
import('flowbite')
export default function Portfolio() {
    return (
        <div className="container m-auto">
            <div id="default-carousel" className="relative" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative min-h-min overflow-hidden rounded-lg md:h-[480px] block">
                    {/* Item 1 */}
                    <Link href="/post/portfolio-exchange-gui" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">au カブコム証券 KABU STATION APIへの特殊注文</span>
                        <Image src="/portfolio/screenshot01.webp" className="absolute bloc w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={1024} height={576} alt="au カブコム証券 KABU STATION APIへの特殊注文" />
                    </Link>
                    <Link href="/post/portfolio-bouyomichan" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">APIから取得した青空文庫を棒読みちゃんに朗読してもらう</span>
                        <Image src="/portfolio/screenshot-bouyomichan.webp" className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={1024} height={576} alt="APIから取得した青空文庫を棒読みちゃんに朗読してもらう" />
                    </Link>
                    <Link href="/post/portfolio-chat-with-gpt3" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">OpenAI GPT3 チャットを既存サービスに追加導入</span>
                        <Image src="/portfolio/screenshot-chat-gpt3.webp" className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={1024} height={576} alt="OpenAI GPT3 チャットを既存サービスに追加導入" />
                    </Link>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-500/60 group-focus:ring-4 group-focus:ring-gray-200/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-200 sm:w-6 sm:h-6 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-500/60 group-focus:ring-4 group-focus:ring-gray-200/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-200 sm:w-6 sm:h-6 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}