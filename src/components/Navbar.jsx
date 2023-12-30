import { Link } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to= {`/`}>JGitFinder</Link>
        </h2>

        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/busca`} className="btnB">Repositórios</Link>
            </li>

            <li>
                <Link to={`/apresentação`} className="btnA">Apresentação</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar