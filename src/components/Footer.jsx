import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer">
            <p>2026 Gabriel Alme</p>
            <div className="footer-links">
                <a href="https://github.com/GabrielAlme" target="_blank">My Github</a>
                <a href="https://linkedin.com/in/gabriel-alme-80b2a4266" target="_blank">My Linkedin (careful they steal your data)</a>
                <Link to="/LeaveMsg">gabriel@gabedoeswebsites.dev</Link>
            </div>
        </footer>
    )
}

export default Footer