import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './Navbar.css'


function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/LeaveMsg">Leave a Message</Link></li>
                <li><HashLink smooth to="/#footer">Contact Info</HashLink></li>
            </ul>
        </nav>
    )
}

export default Navbar