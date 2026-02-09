import { useState, useEffect } from 'react'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog')
      if (res.ok) {
        const data = await res.json()
        setPosts(data)
      }
    } catch (err) {
      console.error('Error fetching posts:', err)
    }
    setLoading(false)
  }

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> News & Updates</h1>
      
      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading...</p>
      ) : posts.length > 0 ? (
        <div className="grid-3">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <h3 className="card-title">{post.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '15px' }}>
                {new Date(post.created_at).toLocaleDateString()} 
                {post.author_name && ` • By ${post.author_name}`}
              </p>
              <p className="card-text">
                {post.content.substring(0, 200)}
                {post.content.length > 200 ? '...' : ''}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            No news posts yet. Check back soon for updates on our projects and community.
          </p>
          <p style={{ color: 'var(--gold)', fontSize: '14px' }}>
            ✦ Together, we build second chances that last. ✦
          </p>
        </div>
      )}
    </section>
  )
}

export default Blog
