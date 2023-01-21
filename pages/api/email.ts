import { SMTPClient } from 'emailjs'
import { callbackify } from 'util'


export default function handler(req: any, res: any) {

    const { email } = req.body
    // console.log(process.env)

    const client = new SMTPClient({
        user: process.env.mail,
        password: process.env.password,
        host: 'smtp.gmail.com',
        ssl: true
    })

    try {
        client.send({
            text: email,
            from: process.env.mail || '',
            to: process.env.mail || '',
            subject: 'Versel Portfolioからお問い合わせ',

        }, callbackify)
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}