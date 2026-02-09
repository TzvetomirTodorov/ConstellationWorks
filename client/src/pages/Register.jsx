import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    const result = await register(name, email, password)
    
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.message || 'Registration failed')
    }
    setLoading(false)
  }

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> Register</h1>
      
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
          </div>
          
          {error && (
            <p style={{ color: '#ff6b6b', marginBottom: '15px', fontSize: '14px' }}>{error}</p>
          )}
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '30px', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  )
}

export default Register
