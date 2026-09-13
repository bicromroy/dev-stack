import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import heroImg from "./assets/banner-stack.png";

const BRAND_GRADIENT = 'linear-gradient(to right, #f97316, #ec4899, #a855f7)';

export default function App() {
  const [stack, setStack] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/src/data/technologies.json')
      .then(res => res.json())
      .then(data => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load data", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @media (max-width: 1024px) { .card-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 768px) { 
        .main-container { padding: 0 20px 60px !important; }
        .nav-links { display: none !important; }
        .hamburger { display: block !important; }
        .hero-section { padding: 60px 20px !important; }
        .main-grid { grid-template-columns: 1fr !important; }
        .card-grid { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  const addToStack = (tech) => {
    if (stack.find(t => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const removeFromStack = (id, name) => {
    setStack(stack.filter(t => t.id !== id));
    toast.info(`${name} removed from stack`);
  };

  const removeAll = () => {
    setStack([]);
    toast.error("Stack cleared!");
  };

  const isAdded = (id) => stack.find(t => t.id === id);

  const styles = {
    body: { background: '#ffffff', fontFamily: 'Inter, sans-serif', margin: 0, color: '#0f172a' },
    header: { background: 'white', borderBottom: '1px solid #f8fafc', position: 'sticky', top: 0, zIndex: 20 },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    logo: { display: 'flex', alignItems: 'center', gap: '6px' },
    logoIcon: { width: '24px', height: '24px', borderRadius: '6px', background: BRAND_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px' },
    logoText: { fontSize: '18px', fontWeight: '700' },
    gradientText: { background: BRAND_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    nav: { display: 'flex', gap: '28px', fontSize: '14px', color: '#64748b' },
    navActive: { color: '#ec4899', fontWeight: '600' },
    btnSignIn: { fontSize: '14px', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' },
    btnSignUp: { background: '#ec4899', color: 'white', fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' },
    hamburger: { display: 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' },
    mobileNav: { display: mobileMenuOpen ? 'flex' : 'none', flexDirection: 'column', gap: '16px', padding: '16px 40px', borderTop: '1px solid #f8fafc' },
    hero: { maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' },
    h1: { fontSize: '44px', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-1px' },
    btnGradient: { background: BRAND_GRADIENT, color: 'white', padding: '10px 18px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '14px' },
    btnBorder: { border: '1px solid #e2e8f0', color: '#475569', padding: '10px 18px', borderRadius: '8px', fontWeight: '600', background: 'white', cursor: 'pointer', fontSize: '14px' },
    main: { maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px' },
    h2: { fontSize: '28px', fontWeight: 'bold' },
    grid: { display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '24px' },
    cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
    card: { background: 'white', borderRadius: '12px', padding: '18px', border: '1px solid #f1f5f9' },
    tag: { fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '12px' },
    pill: { fontSize: '11px', fontWeight: '500', padding: '3px 8px', borderRadius: '6px', background: '#f8fafc', color: '#64748b', border: '1px solid #f1f5f9' },
    btnDark: { width: '100%', marginTop: '14px', padding: '9px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '14px' },
    sidebar: { background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #f1f5f9', position: 'sticky', top: '90px', height: 'fit-content' },
    footer: { background: 'white', borderTop: '1px solid #f8fafc', marginTop: '60px' },
    footerContainer: { maxWidth: '1200px', margin: '0 auto', padding: '40px', display: 'flex', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' },
    footerBottom: { maxWidth: '1200px', margin: '0 auto', padding: '20px 40px', borderTop: '1px solid #f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#94a3b8' },
  };

  return (
    <div style={styles.body}>
      <ToastContainer position="bottom-right" theme="light" />
      
      <header style={styles.header}>
        <div style={styles.container}>
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={styles.hamburger}>☰</button>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>DS</div>
            <span style={styles.logoText}>Dev<span style={styles.gradientText}>Stack</span></span>
          </div>
          <nav className="nav-links" style={styles.nav}>
            <span style={styles.navActive}>Home</span><span>Technologies</span><span>Projects</span><span>About</span><span>Contact</span>
          </nav>
          <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
            <button style={styles.btnSignIn}>Sign In</button>
            <button style={styles.btnSignUp}>Sign Up</button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div style={styles.mobileNav}>
            <a href="#">Home</a><a href="#">Technologies</a><a href="#">Projects</a><a href="#">About</a><a href="#">Contact</a>
          </div>
        )}
      </header>

      <section className="hero-section" style={styles.hero}>
        <div style={{flex: 1, minWidth: '350px'}}>
          <h1 style={styles.h1}>Build Your Ideal <br /><span style={styles.gradientText}>Development Stack</span></h1>
          <p style={{color: '#64748b', marginTop: '16px', maxWidth: '480px', fontSize: '15px', lineHeight: '1.6'}}>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
          <div style={{marginTop: '24px', display: 'flex', gap: '12px'}}>
            <button style={styles.btnGradient}>Explore Technologies</button>
            <button style={styles.btnBorder}>Learn More</button>
          </div>
        </div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', minWidth: '280px'}}>
          <img src={heroImg} alt="3D Stack" style={{width: '100%', maxWidth: '380px'}} />
        </div>
      </section>

      <main className="main-container" style={styles.main}>
        <h2 style={styles.h2}>Explore the <span style={{color: '#ec4899'}}>Technologies</span></h2>
        <p style={{color: '#64748b', marginBottom: '24px', fontSize: '14px'}}>Pick one technology per category to build your ideal stack.</p>
        
        {loading ? (
          <div style={{textAlign: 'center', padding: '40px', fontSize: '18px', color: '#94a3b8'}}>Loading Technologies...</div>
        ) : (
          <div className="main-grid" style={styles.grid}>
            <div className="card-grid" style={styles.cardGrid}>
              {technologies.map(tech => (
                <div key={tech.id} style={styles.card}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <img src={tech.icon} style={{width: '24px', height: '24px'}} />
                      <h3 style={{fontSize: '16px', fontWeight: 'bold'}}>{tech.name}</h3>
                    </div>
                    <span style={{...styles.tag, background: '#dbeafe', color: '#2563eb'}}>{tech.badge}</span>
                  </div>
                  <p style={{fontSize: '13px', color: '#64748b', height: '50px', lineHeight: '1.5'}}>{tech.description}</p>
                  <div style={{display: 'flex', gap: '6px', margin: '12px 0', flexWrap: 'wrap'}}>
                    <span style={styles.pill}>{tech.category}</span>
                    <span style={styles.pill}>{tech.difficulty}</span>
                    <span style={{...styles.pill, display: 'flex', alignItems: 'center', gap: '3px'}}>⭐ {tech.rating}</span>
                  </div>
                  <button 
                    onClick={() => addToStack(tech)} 
                    disabled={isAdded(tech.id)}
                    style={{
                      ...styles.btnDark, 
                      background: isAdded(tech.id) ? '#22c55e' : '#0f172a',
                      color: 'white',
                      cursor: isAdded(tech.id) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isAdded(tech.id) ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              ))}
            </div>

            <div>
              <div style={styles.sidebar}>
                <div style={{marginBottom: '16px'}}>
                  <h3 style={{fontSize: '16px', fontWeight: 'bold'}}>Your Stack</h3>
                  {stack.length > 0 && <p style={{fontSize: '12px', color: '#94a3b8', marginTop: '2px'}}>{stack.length} Technology Selected</p>}
                </div>
                
                {stack.length === 0 ? (
                  <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px dashed #e2e8f0'}}>
                    <p style={{color: '#94a3b8', fontSize: '13px', fontWeight: '500', marginBottom: '12px'}}>No technologies selected yet.</p>
                    <div style={{background: 'white', padding: '16px', borderRadius: '8px', border: '1px dashed #e2e8f0'}}>
                      <p style={{color: '#cbd5e1', fontSize: '13px'}}>Your stack is empty.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {stack.map(tech => (
                      <div key={tech.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '10px 12px', borderRadius: '10px', marginBottom: '10px', border: '1px solid #f1f5f9'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                          <img src={tech.icon} style={{width: '24px', height: '24px'}} />
                          <div>
                            <p style={{fontWeight: '600', fontSize: '14px'}}>{tech.name}</p>
                            <p style={{fontSize: '11px', color: '#94a3b8'}}>{tech.category}</p>
                          </div>
                        </div>
                        <button onClick={() => removeFromStack(tech.id, tech.name)} style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: '18px', color: '#cbd5e1', fontWeight: '300'}}>×</button>
                      </div>
                    ))}
                    <button onClick={removeAll} style={{width: '100%', marginTop: '16px', background: 'white', color: '#ef4444', padding: '9px', borderRadius: '8px', border: '1px solid #fee2e2', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>Remove All</button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={{maxWidth: '280px'}}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>DS</div>
              <span style={styles.logoText}>Dev <span style={styles.gradientText}>Stack</span></span>
            </div>
            <p style={{color: '#64748b', fontSize: '13px', lineHeight: '1.6', marginTop: '12px'}}>Curated tools, technologies, and resources for developers building modern software.</p>
            <div style={{display: 'flex', gap: '16px', marginTop: '16px', fontSize: '13px'}}>
              <a href="#" style={{color: '#0f172a', textDecoration: 'none', fontWeight: '500'}}>GitHub</a>
              <a href="#" style={{color: '#0f172a', textDecoration: 'none', fontWeight: '500'}}>Twitter</a>
              <a href="#" style={{color: '#0f172a', textDecoration: 'none', fontWeight: '500'}}>LinkedIn</a>
            </div>
          </div>
          <div style={{display: 'flex', gap: '60px', flexWrap: 'wrap'}}>
            <div><h4 style={{fontSize: '12px', fontWeight: '700', marginBottom: '12px', letterSpacing: '0.5px'}}>PRODUCT</h4><ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px'}}><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Home</a></li><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Technologies</a></li><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Projects</a></li></ul></div>
            <div><h4 style={{fontSize: '12px', fontWeight: '700', marginBottom: '12px', letterSpacing: '0.5px'}}>COMPANY</h4><ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px'}}><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>About</a></li><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Contact</a></li><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Careers</a></li></ul></div>
            <div><h4 style={{fontSize: '12px', fontWeight: '700', marginBottom: '12px', letterSpacing: '0.5px'}}>LEGAL</h4><ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px'}}><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Privacy Policy</a></li><li><a href="#" style={{color: '#64748b', textDecoration: 'none'}}>Terms of Service</a></li></ul></div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2026 DevStack. All rights reserved.</p>
          <div style={{display: 'flex', gap: '16px'}}><a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Privacy</a><a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Terms</a></div>
        </div>
      </footer>
    </div>
  );
}