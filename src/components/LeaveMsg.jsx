import { useState } from 'react'
import './LeaveMsg.css'
import emailjs from '@emailjs/browser'
import ConfirmModal from "./modals/ConfirmModal"
import BasicModal from "./modals/BasicModal"

function LeaveMsg() {

    const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
    })

    const [showConfirm, setShowConfirm] = useState(false)
    const [ShowError, setShowError] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({...form, [e.targetname]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const phoneDigits = form.phone.replace(/\D/g, '')
        if (form.phone.length > 0 && phoneDigits.length < 10) {
            setError('Please enter a valid phone number')
            return
        }
        setShowConfirm(true)
    }

    const handleConfirm = () => {
            setShowConfirm(false)
            emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form,
            import.meta.env.VITE_PUBLIC_KEY
        ) .then(() => {
            setShowSuccess(true)
        }).catch(() => {
            setShowError(true)
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