import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">
          <span className="star">✦</span> Constellation Works
        </h1>
        <p className="hero-subtitle">
          Building Pathways from Crisis to Constellation — Dignified housing solutions 
          combined with ecological land restoration.
        </p>
        <div className="hero-cta">
          <Link to="/donate" className="btn btn-primary">Support Our Mission</Link>
          <Link to="/apply" className="btn btn-secondary">Get Involved</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><span className="star">✦</span> Our Mission</h2>
        <div className="grid-3">
          <div className="card">
            <h3 className="card-title">Dignified Housing</h3>
            <p className="card-text">
              We believe everyone deserves a safe, stable place to call home. 
              Our innovative housing solutions provide more than shelter—they provide hope.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Land Restoration</h3>
            <p className="card-text">
              Through ecological restoration, we heal the land while creating 
              sustainable opportunities for communities to thrive.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Community Building</h3>
            <p className="card-text">
              True transformation happens in community. We create spaces where 
              people support each other on the journey from crisis to constellation.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(212,175,55,0.05)' }}>
        <h2 className="section-title"><span className="star">✦</span> How You Can Help</h2>
        <div className="grid-3">
          <div className="card">
            <h3 className="card-title">Donate</h3>
            <p className="card-text">
              Your financial support directly funds housing projects and restoration efforts.
            </p>
            <Link to="/donate" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
              Give Now
            </Link>
          </div>
          <div className="card">
            <h3 className="card-title">Volunteer</h3>
            <p className="card-text">
              Join our team of dedicated volunteers making a difference in communities.
            </p>
            <Link to="/apply" className="btn btn-secondary" style={{ marginTop: '20px', display: 'inline-block' }}>
              Apply
            </Link>
          </div>
          <div className="card">
            <h3 className="card-title">Partner</h3>
            <p className="card-text">
              Organizations and businesses can partner with us to expand our impact.
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '20px', display: 'inline-block' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
