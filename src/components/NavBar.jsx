import {Link} from 'react-router-dom'
import "../css/Navbar.css"
function NavBar(){
     return <nav className = "navbar">
          <div className ="navbar-brand">
               <Link to="/react_movie">Movie App</Link>
          </div>
          <div className="navbar-links">
               <Link to = "/react_movie/favorites" className="nav-link">Favorites</Link>
          </div>
     </nav>
}

export default NavBar