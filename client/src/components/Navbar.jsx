import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-star">✦</span>
        Constellation Works
      </Link>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">News</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><a onClick={logout} style={{ cursor: 'pointer' }}>Logout</a></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
