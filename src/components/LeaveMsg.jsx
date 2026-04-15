import './LeaveMsg.css'
import emailjs from '@emailjs/browser'
import '.Leavemsg.css'

const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
})




function LeaveMsg() {
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
        </div>
        </>
    )
}