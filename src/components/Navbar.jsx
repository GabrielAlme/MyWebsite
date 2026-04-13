import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="nav-logo">Gabe</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar