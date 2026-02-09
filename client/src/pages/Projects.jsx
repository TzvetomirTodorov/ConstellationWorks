const Projects = () => {
  const projects = [
    {
      title: 'The Constellation Project',
      status: 'Phase 0',
      description: 'Creating transitional housing for individuals emerging from crisis, with wraparound support services.',
    },
    {
      title: 'Constellation Community Gardens',
      status: 'Pending',
      description: 'Urban gardens that provide food security, community connection, and therapeutic green spaces.',
    },
    {
      title: "Terr'Novare Land Restoration",
      status: 'Planning',
      description: 'Restoring degraded land through permaculture practices while creating job training opportunities.',
    }
  ]

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> Our Projects</h1>
      
      <div className="grid-3">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3 className="card-title" style={{ marginBottom: 0 }}>{project.title}</h3>
              <span style={{ 
                minWidth: '90px',
                padding: '4px 12px', 
                fontSize: '11px', 
                wordBreak: 'none',
                background: project.status === 'Active' ? 'rgba(127,255,212,0.2)' : 'rgba(212,175,55,0.2)',
                color: project.status === 'Active' ? 'var(--aurora)' : 'var(--gold)',
                border: `1px solid ${project.status === 'Active' ? 'var(--aurora)' : 'var(--gold)'}`,
                letterSpacing: '1px'
              }}>
                {project.status.toUpperCase()}
              </span>
            </div>
            <p className="card-text">{project.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Want to support or learn more about our projects?
        </p>
        <a href="/contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </section>
  )
}

export default Projects
