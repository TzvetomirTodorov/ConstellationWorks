const About = () => {
  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> About Us</h1>

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '60px' }}>
          Constellation Works is a nonprofit organization dedicated to creating dignified
          solutions while restoring ecological balance. We aim to steward the growth of startups, increase community awareness on key
          issues, facilitate community led initiatives that prioritize environmental awareness, respect and nurturing of
          human life, while acting as an implementation and guide effectiveness in organization during the startup
          process. We believe that healing people and healing the land go hand in hand.
        </p>
      </div>


      <div className="grid-3" style={{ marginBottom: '60px' }}>
        <div className="card">
          <h3 className="card-title">Our Vision</h3>
          <p className="card-text">
            A world where everyone has access to safe, dignified housing within
            thriving, sustainable communities.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Our Approach</h3>
          <p className="card-text">
            We combine innovative housing solutions with ecological restoration,
            creating opportunities for personal and environmental transformation.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Our Values</h3>
          <p className="card-text">
            Dignity, sustainability, community, and hope guide everything we do.
            We believe in second chances and the power of constellation.
          </p>
        </div>
      </div>
      <h2 className="section-title">F.O.D. Framework</h2>

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '60px' }}>
          Constellation Works's structure fosters collaboration between its Governance Board and its D.A.O.
          (Community Consensus), ensuring seamless communication, community consensus, and inclusivity. To
          establish a firm foundation in Web3’s technology, our programs are grounded in the F.O.D. Framework,
          which consists of three pillars: Fundamental, Operational, and Dynamic.</p>
        <br />
        <h2 >Fundamental Model</h2>
        <p >This model establishes a clear framework for our organizational structure by emphasizing five core
          principles:</p>
        <br />
        <ol>
          <li><strong>Respect for life:</strong> We recognize the inherent value of all beings and strive to minimize harm.</li>
          <li><strong>Cooperation with cohabitants:</strong> We work collaboratively with others to achieve constructive common goals.</li>
          <li><strong>Self-value recognition:</strong> Each person is valued as a unique contributor, regardless of their role or position.</li>
          <li><strong>Environmental awareness for future generations:</strong> We prioritize sustainability and consider the longterm impact of our actions on the planet.</li>
          <li><strong>Basic living standards guarantee:</strong> Every person has access to essential resources necessary for survival.</li>
        </ol>
        <br />
        <h2 >Operational Structure Model</h2>
        This model provides a standard framework for best practices and core values, focusing on three key
        aspects:
        <ol>

          <li><strong>Main purpose ("Why") and target audience:</strong> We define our business's fundamental reason for existence and identify the groups we aim to serve.</li>

          <li><strong>Complementary operations:</strong> Our activities are designed to complement adjacent businesses that benefit from or interact with ours.</li>

          <li><strong>Operational longevity estimation:</strong> We estimate the projected lifespan of each operation, considering factors like resource availability, market trends, and regulatory requirements.</li>

          <li><strong>Achieved objectives at startup launch:</strong> Upon launching a new business, we analyze its long-term benefits and assess whether dissolution is necessary.</li>
        </ol>
        <br />
        <h2 >Dynamic Alignment Model</h2>
        <p>This model associates a symbiotic relationship between the startup and its economic complimentary relationship
          between prior establishments.</p>
        <ol>
          <li><strong>Applicable Sector</strong> - Assesses whether our initiative aligns with various sectors</li>
          <li><strong>Complemental Type</strong> - Identifies two or more applicable</li>
        </ol>
        <br />

      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '40px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)' }}>
        <h3 style={{ color: 'var(--gold)', marginBottom: '20px', fontFamily: 'Cormorant Garamond, serif', fontSize: '28px' }}>
          Joshua Tramel Byers
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>Co-Founder</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
          📧 terranovare42@gmail.com<br />
          📱 (734) 351-8601
        </p>
      </div>
    </section>
  )
}

export default About
