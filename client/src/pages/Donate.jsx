const Donate = () => {

  const applePay = () => {
    return <a href={"tel:7343518601"}>(734) 351 - 8601</a>;
  }
  const paymentMethods = [
    { name: 'Cash App', handle: '$POWRDesign', icon: '💵', onClick: 'https://cash.app/$POWRDesign' },
    { name: 'Venmo', handle: '@JTBPhoenix', icon: '💳', onClick: 'https://venmo.com/u/JTBPhoenix' },
    { name: 'PayPal', handle: '@JTBPhoenix', icon: '🅿️', onClick: 'https://paypal.com/paypalme/JTBPhoenix' },
    { name: 'Apple Pay', handle: 'Available', note: applePay(), icon: '🍎', onClick: 'tel:7343518601' }
  ]

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h1 className="section-title"><span className="star">✦</span> Support Our Mission</h1>

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          Your generosity helps us build dignified housing and restore land for communities in need.
          Every contribution makes a difference.
        </p>
      </div>

      <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
        {paymentMethods.map((method, index) => (
          <a href={`${method.onClick}`} target="_Child"><div key={index} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>{method.icon}</div>
            <h3 className="card-title">{method.name}</h3>
            <p style={{ color: 'var(--aurora)', fontFamily: 'monospace', fontSize: '16px' }}>
              {method.handle}
            </p>
            <small><p style={{margin: '10px 0'}}><em>{method.note}</em></p></small>
          </div></a>
        ))}
      </div>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        background: 'rgba(212,175,55,0.05)',
        border: '1px solid rgba(212,175,55,0.2)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'var(--gold)', marginBottom: '20px', fontFamily: 'Cormorant Garamond, serif', fontSize: '24px' }}>
          Other Ways to Give
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.8' }}>
          For larger donations, recurring giving, or corporate partnerships, please contact us directly.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
          📧 terranovare42@gmail.com<br />
          📱 (734) 351-8601
        </p>
      </div>
    </section>
  )
}

export default Donate
