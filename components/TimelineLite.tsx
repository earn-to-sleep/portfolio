import Link from "next/link"
import Title from "../components/Title"
const TimelineLite = ({ items }: any) => {
    let n: number = 0
    items.map((item: any) => (
        n += item.manhours
    ))

    return (
        <div>
            <Title props={{ title: "実装工数", subtitle: `about ${n} hours` }} />
            <p>
                <ul>
                    {items.map((item: any) => (
                        <li>
                            <span className="bg-indigo-100 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                                {item.manhours} hours
                            </span>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

export default TimelineLite