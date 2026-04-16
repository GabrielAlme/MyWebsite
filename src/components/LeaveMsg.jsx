import { useState } from 'react'
import './LeaveMsg.css'
import emailjs from '@emailjs/browser'

function LeaveMsg() {

    const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
    })

    const handlePhone = (e) => {
        let value = e.target.value.replace(/\D/g, '')
        if (value.length > 10) value = value.slice(0, 10)

        if (value.length > 6) {
            value = `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6)}`
        } else if (value.length > 3) {
            value = `${value.slice(0,3)}-${value.slice(3)}`
        }

        setForm({ ...form, phone: value })
    }

    return(
        <>
        <div className="form">
            <div className="name">
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name (required)"
                />
            </div>
            <div className="email">
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                />
            </div>
            <div className="phone">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handlePhone}
                />
            </div>
            <div className="Message">
                <input
                    type="text"
                    name="email"
                    placeholder="Leave your message here (required)"
                />
            </div>
            <div classname="submit">
                <button type="submit">Send Message</button>
            </div>
        </div>
        </>
    )
}

export default LeaveMsg