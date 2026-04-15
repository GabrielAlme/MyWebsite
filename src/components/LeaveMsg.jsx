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
                    type="text"
                    name="email"
                    placeholder="Your email"
                />
            </div>
            <div className="phone">
                <input
                    type="text"
                    name="phone"
                    placeholder="Your phone number"
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