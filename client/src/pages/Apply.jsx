import { useState } from 'react'

const Apply = () => {
  const [formData, setFormData] = useState({
    type: 'volunteer',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setStatus('success')
        setFormData({ type: 'volunteer', name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> Get Involved</h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '40px', lineHeight: '1.8' }}>
          Whether you want to volunteer, partner, or learn about our housing program, 
          we'd love to connect with you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Application Type</label>
            <select 
              className="form-input"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option value="volunteer">Volunteer</option>
              <option value="partner">Partner Organization</option>
              <option value="resident">Housing Program Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input 
              type="tel" 
              className="form-input"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tell us about yourself</label>
            <textarea 
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Share your background, interests, and how you'd like to contribute..."
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {status === 'sending' ? 'Submitting...' : 'Submit Application'}
          </button>
          
          {status === 'success' && (
            <p style={{ color: 'var(--aurora)', marginTop: '15px', textAlign: 'center' }}>
              Application submitted! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', marginTop: '15px', textAlign: 'center' }}>
              Error submitting application. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Apply
