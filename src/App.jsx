import React, { useState, useEffect } from 'react';

// Constellation Works - Main Website Component
export default function ConstellationWorks() {
  const [scrollY, setScrollY] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    {
      name: "Emergency Stabilization",
      icon: "🏕️",
      description: "Immediate access to food, shelter, and safety. Meeting urgent survival needs with dignity and compassion.",
      color: "#c9a227"
    },
    {
      name: "Transitional Support",
      icon: "🌱",
      description: "Building skills, responsibility, and connection through land stewardship, gardening, and community participation.",
      color: "#7dad7a"
    },
    {
      name: "Permanent Housing",
      icon: "🏡",
      description: "Low-impact, dignified housing units integrated into restored landscapes. A place to call home.",
      color: "#5a8f7b"
    },
    {
      name: "Sustained Purpose",
      icon: "⭐",
      description: "Long-term stability through meaningful work, community bonds, and environmental stewardship that endures.",
      color: "#3d6a7a"
    }
  ];

  const impactAreas = [
    { stat: "Housing Stability", desc: "Safe, dignified shelter" },
    { stat: "Food Access", desc: "Gardens & nutrition" },
    { stat: "Land Restoration", desc: "Ecological healing" },
    { stat: "Community Bonds", desc: "Belonging & purpose" }
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: 'linear-gradient(180deg, #0d1b2a 0%, #1b3a4b 50%, #2d4a3e 100%)',
      minHeight: '100vh',
      color: '#f5f1e8',
      overflowX: 'hidden'
    }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      {/* Starfield Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6
      }}>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: i % 5 === 0 ? '#c9a227' : '#f5f1e8',
              borderRadius: '50%',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
              boxShadow: i % 5 === 0 ? '0 0 6px #c9a227' : '0 0 4px rgba(255,255,255,0.5)'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes constellationDraw {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .donate-btn:hover {
          background: #d4af37 !important;
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(201, 162, 39, 0.4);
        }
        * { box-sizing: border-box; }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrollY > 50 ? 'rgba(13, 27, 42, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.8rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ color: '#c9a227', fontSize: '1.5rem' }}>✦</span>
          Constellation Works
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Mission', 'Approach', 'Impact', 'Give'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: '#f5f1e8',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              opacity: 0.9,
              transition: 'opacity 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={e => e.target.style.opacity = 1}
            onMouseOut={e => e.target.style.opacity = 0.9}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Constellation graphic */}
        <svg width="200" height="160" viewBox="0 0 200 160" style={{
          marginBottom: '2rem',
          animation: 'float 6s ease-in-out infinite'
        }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Constellation lines */}
          <path 
            d="M30 130 L70 80 L100 100 L140 50 L170 70" 
            stroke="#c9a227" 
            strokeWidth="1.5" 
            fill="none" 
            strokeDasharray="1000"
            style={{
              animation: 'constellationDraw 3s ease forwards',
              filter: 'url(#glow)'
            }}
          />
          {/* Stars */}
          {[[30, 130], [70, 80], [100, 100], [140, 50], [170, 70]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="#c9a227" style={{
                animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}/>
              <circle cx={x} cy={y} r="3" fill="#f5f1e8"/>
            </g>
          ))}
        </svg>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 600,
          lineHeight: 1.15,
          maxWidth: '900px',
          marginBottom: '1.5rem',
          animation: 'fadeInUp 1s ease forwards',
          letterSpacing: '-0.01em'
        }}>
          Building Pathways from<br/>
          <span style={{ color: '#c9a227' }}>Crisis to Constellation</span>
        </h1>

        <p style={{
          fontSize: '1.25rem',
          maxWidth: '650px',
          lineHeight: 1.7,
          opacity: 0.9,
          marginBottom: '2.5rem',
          animation: 'fadeInUp 1s ease forwards',
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}>
          We combine dignity-first housing solutions with ecological land restoration, 
          creating communities where both people and the earth can heal and thrive.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          animation: 'fadeInUp 1s ease forwards',
          animationDelay: '0.6s',
          animationFillMode: 'both'
        }}>
          <a href="#give" className="donate-btn" style={{
            background: '#c9a227',
            color: '#0d1b2a',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>Support Our Mission</a>
          <a href="#mission" style={{
            border: '2px solid rgba(245, 241, 232, 0.4)',
            color: '#f5f1e8',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>Learn More</a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.6,
          animation: 'float 2s ease-in-out infinite'
        }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, #f5f1e8, transparent)' }}/>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" style={{
        padding: '8rem 2rem',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, transparent 0%, rgba(45, 74, 62, 0.3) 100%)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            color: '#c9a227',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>Our Belief</span>
          
          <blockquote style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 500,
            lineHeight: 1.4,
            margin: '2rem 0',
            fontStyle: 'italic',
            color: '#f5f1e8'
          }}>
            "Homelessness is not inevitable.<br/>
            With the right support, people…<br/>
            <span style={{ color: '#c9a227' }}>come back.</span>"
          </blockquote>

          <div style={{
            width: '60px',
            height: '2px',
            background: '#c9a227',
            margin: '3rem auto'
          }}/>

          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            opacity: 0.9,
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            Constellation Works operates through <strong>Terra'Novare LLC</strong> to create 
            integrated solutions addressing rural homelessness, land degradation, and food 
            insecurity. We believe that by restoring both people and the earth together, 
            we build resilience that endures.
          </p>
        </div>
      </section>

      {/* Phased Approach */}
      <section id="approach" style={{
        padding: '8rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              color: '#c9a227',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>Our Approach</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              marginTop: '1rem'
            }}>A Phased Journey to Stability</h2>
          </div>

          {/* Phase Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {phases.map((phase, i) => (
              <div
                key={i}
                className="hover-lift"
                onMouseEnter={() => setActivePhase(i)}
                style={{
                  background: activePhase === i 
                    ? `linear-gradient(135deg, ${phase.color}22 0%, ${phase.color}11 100%)`
                    : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${activePhase === i ? phase.color : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '16px',
                  padding: '2rem',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  filter: activePhase === i ? 'none' : 'grayscale(0.5)',
                  transition: 'filter 0.3s'
                }}>
                  {phase.icon}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    background: phase.color,
                    color: '#0d1b2a',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}>{i + 1}</span>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    margin: 0
                  }}>{phase.name}</h3>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  opacity: 0.85,
                  margin: 0
                }}>{phase.description}</p>
              </div>
            ))}
          </div>

          {/* Connection line visual */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '3rem 0 0',
            gap: '0.5rem'
          }}>
            {phases.map((phase, i) => (
              <React.Fragment key={i}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: activePhase >= i ? phase.color : 'rgba(255,255,255,0.2)',
                  transition: 'background 0.3s'
                }}/>
                {i < phases.length - 1 && (
                  <div style={{
                    width: '60px',
                    height: '2px',
                    background: activePhase > i 
                      ? `linear-gradient(90deg, ${phase.color}, ${phases[i+1].color})`
                      : 'rgba(255,255,255,0.1)',
                    transition: 'background 0.3s'
                  }}/>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Land Restoration Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, rgba(45, 74, 62, 0.4) 0%, rgba(27, 58, 75, 0.4) 100%)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              color: '#7dad7a',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>Environmental Stewardship</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 600,
              margin: '1rem 0 1.5rem',
              lineHeight: 1.3
            }}>Healing Land,<br/>Healing Lives</h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              opacity: 0.9,
              marginBottom: '1.5rem'
            }}>
              Our rural land restoration project in Michigan integrates housing with 
              ecological rehabilitation. Residents participate in land care, gardening, 
              and habitat restoration — building skills, responsibility, and deep 
              connection to place.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              {[
                'Native vegetation',
                'Pollinator habitats',
                'Soil regeneration',
                'Wildlife corridors',
                'Food production',
                'Erosion control'
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ color: '#7dad7a' }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual element */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(125, 173, 122, 0.15) 0%, rgba(90, 143, 123, 0.1) 100%)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(125, 173, 122, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🌿</div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>Our Commitment</h3>
            <p style={{
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              "To leave the land healthier than we found it, while demonstrating 
              that human housing and ecological restoration can beautifully coexist."
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" style={{
        padding: '8rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            color: '#c9a227',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>Expected Outcomes</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            margin: '1rem 0 3rem'
          }}>Measurable Impact</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {impactAreas.map((area, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{
                  color: '#c9a227',
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>✦</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>{area.stat}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.7,
                  margin: 0
                }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="give" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, rgba(201, 162, 39, 0.08) 0%, rgba(201, 162, 39, 0.15) 100%)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <span style={{
            color: '#c9a227',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>Support Our Work</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            margin: '1rem 0'
          }}>Build Second Chances That Last</h2>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            opacity: 0.9,
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Your donation directly supports emergency stabilization, permanent housing 
            development, digital access, workforce skills, and sustainable land restoration.
          </p>

          {/* Payment Methods */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {[
              { method: 'Cash App', handle: '$POWRDesign' },
              { method: 'Venmo', handle: '@JTBPhoenix' },
              { method: 'PayPal', handle: 'paypal.me/JTBPhoenix' },
              { method: 'Apple Pay', handle: '(734) 351-8601' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(201, 162, 39, 0.2)'
              }}>
                <div style={{
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                  color: '#c9a227'
                }}>{item.method}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{item.handle}</div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '0.9rem',
            opacity: 0.7
          }}>
            Checks payable to: <strong>The Constellation Project - Terra'Novare, LLC</strong><br/>
            Corporate giving inquiries: <a href="mailto:jtb.phoenixone@gmail.com" style={{ color: '#c9a227' }}>jtb.phoenixone@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '4rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#c9a227' }}>✦</span>
              Constellation Works
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>
              A program of Terra'Novare LLC
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <a href="tel:7343518601" style={{ color: '#f5f1e8', textDecoration: 'none', opacity: 0.9 }}>
                (734) 351-8601
              </a>
            </div>
            <div>
              <a href="mailto:terranovare42@gmail.com" style={{ color: '#c9a227', textDecoration: 'none' }}>
                terranovare42@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '3rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
          fontSize: '0.85rem',
          opacity: 0.5
        }}>
          © {new Date().getFullYear()} Constellation Works. Licensed under Apache 2.0.
        </div>
      </footer>
    </div>
  );
}
