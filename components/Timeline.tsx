import Title from "../components/Title"
export default function Timeline({ items }: any) {
    return (
        <div>
            <Title props={{ title: "TIMELINE", subtitle: "HOW TO WORK" }} />
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {items.map((item: any, i: number) => (
                    <li className="mb-10 ml-6" key={`key:${i}`}>
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-50 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-100">
                            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title} <span className={`${i != 0 ? "invisible" : ""} bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-500 ml-3`}>Latest</span></h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.timeline}</time>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>
                        <p>
                            <span className="bg-green-100 text-green-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-green-300">
                                about {item.manhours} hours
                            </span>

                        </p>
                    </li>
                ))}

            </ol>
        </div>
    )
}
