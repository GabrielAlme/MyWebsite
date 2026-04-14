import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li>Leave a Message</li>
                <li>Contact Info</li>
            </ul>
        </nav>
    )
}

export default Navbar