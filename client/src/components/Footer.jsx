import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">✦ Constellation Works</div>
      <p className="footer-text">
        Building Pathways from Crisis to Constellation
      </p>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/apply">Apply</Link>
      </div>
      <div className="footer-contact" style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '13px' }}>
        <p>📧 terranovare42@gmail.com | 📱 (734) 351-8601</p>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Constellation Works. Together, we build second chances that last.
      </p>
    </footer>
  )
}

export default Footer
