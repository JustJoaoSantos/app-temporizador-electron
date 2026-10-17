import { NavLink } from "react-router"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <NavLink className="btn-nav-group" to="/"><span className="btn-return">&larr;</span></NavLink>
        </nav>
    )
}

export default Navbar