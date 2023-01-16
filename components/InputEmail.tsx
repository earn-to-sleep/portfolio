import Title from "./Title";

import React, { useState } from "react"


const InputEmail = () => {
    let [email, setEmail] = useState('')

    const changeHander = (e: any) => {
        setEmail(e.currentTarget.value)
    }

    const send = async (e: any) => {
        const op = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        }

        const res = await fetch(`http://localhost:3000/api/hello`, op)
        const data = res.json()

        console.log('response :' + data)
    }

    return (
        <>
            <Title props={{ title: "Contact", subtitle: "お問い合わせ" }} />

            <ul>
                <li>
                    <a href="https://www.lancers.jp/profile/User596E9F4">Lancersから連絡</a>
                </li>
                <li>以下メールフォームに記入すると数時間でご返信します。</li>
            </ul>


            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <input type="search" id="email" name="email" onChange={changeHander} value={email} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yours@gmail.com" required />
                <button type="button" onClick={send} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
            </div>
        </>
    )
}
export default InputEmail