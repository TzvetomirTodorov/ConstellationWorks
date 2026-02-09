import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [donations, setDonations] = useState([])
  const [applications, setApplications] = useState([])
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
    if (user?.role === 'admin') {
      fetchAdminData()
    }
  }, [user, loading, navigate])

  const fetchAdminData = async () => {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}` }

    try {
      const [donRes, appRes, conRes] = await Promise.all([
        fetch('/api/donations', { headers }),
        fetch('/api/applications', { headers }),
        fetch('/api/contact', { headers })
      ])
      
      if (donRes.ok) setDonations(await donRes.json())
      if (appRes.ok) setApplications(await appRes.json())
      if (conRes.ok) setContacts(await conRes.json())
    } catch (err) {
      console.error('Error fetching data:', err)
    }
  }

  if (loading) {
    return <div style={{ padding: '200px 40px', textAlign: 'center' }}>Loading...</div>
  }

  if (!user) {
    return null
  }

  const isAdmin = user.role === 'admin'

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title">
        <span className="star">✦</span> Welcome, {user.name}
      </h1>

      {isAdmin ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {['overview', 'donations', 'applications', 'messages'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ padding: '10px 25px', fontSize: '12px' }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="grid-3">
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: 'var(--gold)', fontFamily: 'Cormorant Garamond, serif' }}>
                  {donations.length}
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>Total Donations</p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: 'var(--aurora)', fontFamily: 'Cormorant Garamond, serif' }}>
                  {applications.length}
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>Applications</p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: 'var(--cosmic-blue)', fontFamily: 'Cormorant Garamond, serif' }}>
                  {contacts.length}
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>Messages</p>
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {donations.length > 0 ? donations.map(d => (
                <div key={d.id} className="card" style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <strong style={{ color: 'var(--gold)' }}>
                        {d.is_anonymous ? 'Anonymous' : d.donor_name || 'Unknown'}
                      </strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{d.donor_email}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <strong style={{ color: 'var(--aurora)' }}>${d.amount}</strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{d.method}</p>
                    </div>
                  </div>
                </div>
              )) : <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No donations yet</p>}
            </div>
          )}

          {activeTab === 'applications' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {applications.length > 0 ? applications.map(a => (
                <div key={a.id} className="card" style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <strong style={{ color: 'var(--gold)' }}>{a.name}</strong>
                    <span style={{ 
                      padding: '3px 10px', 
                      fontSize: '10px', 
                      background: a.status === 'pending' ? 'rgba(212,175,55,0.2)' : 'rgba(127,255,212,0.2)',
                      color: a.status === 'pending' ? 'var(--gold)' : 'var(--aurora)'
                    }}>
                      {a.status?.toUpperCase()}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                    {a.type} • {a.email}
                  </p>
                </div>
              )) : <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No applications yet</p>}
            </div>
          )}

          {activeTab === 'messages' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {contacts.length > 0 ? contacts.map(c => (
                <div key={c.id} className="card" style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <strong style={{ color: 'var(--gold)' }}>{c.name}</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                      {new Date(c.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '10px' }}>{c.email}</p>
                  <p style={{ color: 'var(--text-primary)' }}>{c.message}</p>
                </div>
              )) : <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No messages yet</p>}
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div className="card">
            <h3 className="card-title">Your Account</h3>
            <p className="card-text">
              Email: {user.email}<br />
              Role: {user.role}
            </p>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
              Thank you for being part of the Constellation Works community.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Dashboard
