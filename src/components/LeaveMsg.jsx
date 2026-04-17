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
    const [showError, setShowError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
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
            setForm({ name: '', email: '', phone: '', message: ''})
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
            <form onSubmit={handleSubmit}>
            <div className="name">
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name (required)"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div className="email">
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
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
                {error && <p className="error">{error}</p>}
            </div>
            <div className="message">
                <textarea
                    type="text"
                    name="message"
                    placeholder="Leave your message here (required)"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div classname="submit">
                <button type="submit">Send Message</button>
            </div>
            </form>
        </div>
        { showConfirm && (
            <ConfirmModal
            title=""
            message="Are you sure you want to send this message?"
            confirmMessage="Send"
            onConfirm={handleConfirm}
            onClose={() => setShowConfirm(false)}
            />
        )}
        { showSuccess && (
            <BasicModal
            title="Success"
            message="Your message was successfully sent!"
            onClose={() => setShowSuccess(false)}
            />
        )}
        {showError && (
            <BasicModal
            title="Something went wrong"
            message="Your message failed to send, please try again"
            onClose={() => setShowError(false)}
            />
        )}

        </>
    )
}

export default LeaveMsg