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

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const phoneDigits = form.phone.replace(/\D/g, '')
        if (form.phone.length > 0 && phoneDigits.length < 10) {
            setError('Please enter a valid phone number')
            return
        }

        emailjs.send(
            'service_l6aetea',
            'template_58g28x4',
            form,
            '1-NZrbnEWtOknam5d'
        ) .then(() => {
            setShowModal(true)
        })
    }

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