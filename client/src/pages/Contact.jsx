import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> Contact Us</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <div>
          <h3 style={{ color: 'var(--gold)', marginBottom: '30px', fontFamily: 'Cormorant Garamond, serif', fontSize: '28px' }}>
            Get in Touch
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' }}>
            We'd love to hear from you. Whether you have questions, want to get involved, 
            or just want to learn more about our work, reach out anytime.
          </p>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '5px' }}>Email</p>
            <p style={{ color: 'var(--text-secondary)' }}>terranovare42@gmail.com</p>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '5px' }}>Phone</p>
            <p style={{ color: 'var(--text-secondary)' }}>(734) 351-8601</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
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
            <label className="form-label">Subject</label>
            <input 
              type="text" 
              className="form-input"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea 
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p style={{ color: 'var(--aurora)', marginTop: '15px', textAlign: 'center' }}>
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', marginTop: '15px', textAlign: 'center' }}>
              Error sending message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
