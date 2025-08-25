import './App.css'
import { useEffect, useState } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import { FaSun, FaMoon, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

function Header({ onToggleTheme, theme }) {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`position-fixed top-0 start-0 end-0 z-3 ${isSticky ? 'sticky-top-blur border-bottom' : ''}`}>
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand fw-bold" href="#">inBio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['home','about','services','portfolio','testimonials','clients','blog','contact'].map(key => (
              <li key={key} className="nav-item">
                <ScrollLink className="nav-link" to={key} spy smooth offset={-90} duration={400}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-primary me-2" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <a className="btn btn-primary" href="#contact">Hire Me</a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="badge text-bg-dark border border-secondary-subtle badge-pill mb-3">Consultant</span>
            <h1 className="hero-title fw-bold">Hi, I’m Andrew — Strategy & Product Consultant</h1>
            <p className="text-secondary mb-4">I help startups and enterprises define strategy, build delightful products, and grow with measurable outcomes.</p>
            <div className="d-flex gap-3">
              <a href="#portfolio" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn btn-outline-primary">Let’s Talk</a>
            </div>
            <div className="d-flex gap-4 mt-4">
              <div>
                <h3 className="mb-0"><CountUp end={12} duration={2}/>+</h3>
                <small className="text-secondary">Years Experience</small>
              </div>
              <div>
                <h3 className="mb-0"><CountUp end={120} duration={2}/>+</h3>
                <small className="text-secondary">Projects</small>
              </div>
              <div>
                <h3 className="mb-0"><CountUp end={50} duration={2}/>+</h3>
                <small className="text-secondary">Clients</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ratio ratio-1x1 card-surface shadow-soft"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Product Strategy', desc: 'Roadmaps, discovery, prioritization, OKRs' },
    { title: 'UX/UI Design', desc: 'Wireframes to high-fidelity prototypes' },
    { title: 'Web Development', desc: 'Full-stack apps with quality and speed' },
    { title: 'Growth & Analytics', desc: 'Data pipelines, dashboards, experiments' },
    { title: 'AI Consulting', desc: 'Integrations, agent workflows, LLM strategy' },
    { title: 'Cloud & DevOps', desc: 'Scalable infra, CI/CD, security' }
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">High-impact work with a focus on outcomes.</p>
          </div>
        </div>
        <div className="row g-4">
          {items.map((it, i) => (
            <div key={it.title} className="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay={i*70}>
              <div className="p-4 card-surface h-100">
                <div className="d-flex align-items-start justify-content-between">
                  <h5 className="fw-semibold">{it.title}</h5>
                  <span className="opacity-50">{i+1}</span>
                </div>
                <p className="text-secondary mb-0">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    cat: i % 2 ? 'Web App' : 'Branding'
  }))
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">A snapshot of recent projects.</p>
          </div>
        </div>
        <div className="row g-4">
          {items.map((it, i) => (
            <div key={i} className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay={i*60}>
              <div className="card-surface overflow-hidden">
                <div className="ratio ratio-4x3 bg-dark"> </div>
                <div className="p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1">{it.title}</h6>
                    <small className="text-secondary">{it.cat}</small>
                  </div>
                  <a className="btn btn-sm btn-outline-primary" href="#"><FaArrowUpRightFromSquare /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { quote: 'Outstanding partnership delivering above expectations.', name: 'Samantha' },
    { quote: 'Swift delivery and thoughtful strategy.', name: 'Leo' },
    { quote: 'A trusted advisor for our product roadmap.', name: 'Priya' }
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">What clients say.</p>
          </div>
        </div>
        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3500 }}>
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="card-surface p-5 mx-auto" style={{ maxWidth: 820 }}>
                <p className="fs-4">“{t.quote}”</p>
                <div className="mt-3 text-secondary">— {t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Clients</h2>
            <p className="section-subtitle">Brands I’ve worked with.</p>
          </div>
        </div>
        <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-lg-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col" data-aos="fade-up" data-aos-delay={i*40}>
              <div className="card-surface p-4 text-center opacity-75">Logo</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Insights</h2>
            <p className="section-subtitle">Ideas on product, strategy, and growth.</p>
          </div>
        </div>
        <div className="row g-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={i*60}>
              <article className="card-surface h-100">
                <div className="ratio ratio-16x9 bg-dark"></div>
                <div className="p-3">
                  <h6 className="mb-1">Post Title {i+1}</h6>
                  <p className="text-secondary mb-2">Short excerpt that invites to read more.</p>
                  <a className="btn btn-sm btn-outline-primary" href="#">Read more</a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Let’s build something great.</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <form className="card-surface p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input className="form-control" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Tell me about your project"></textarea>
                </div>
                <div className="col-12 d-grid">
                  <button className="btn btn-primary" type="button">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="card-surface p-4 h-100">
              <h5 className="fw-semibold">Let’s talk</h5>
              <p className="text-secondary mb-1">Email</p>
              <a href="mailto:andrew@example.com">andrew@example.com</a>
              <p className="text-secondary mt-3 mb-1">Location</p>
              <div>Remote — Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-4 border-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="small text-secondary">© {new Date().getFullYear()} inBio Consulting</div>
        <div className="d-flex gap-3 small">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light')
  }, [theme])

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />

      <main>
        <Element name="home"><Hero /></Element>
        <Element name="about"><section className="section"><div className="container"><h2 className="section-title">About</h2><p className="section-subtitle">Senior consultant specializing in strategy, design, and engineering.</p></div></section></Element>
        <Element name="services"><Services /></Element>
        <Element name="portfolio"><Portfolio /></Element>
        <Element name="testimonials"><Testimonials /></Element>
        <Element name="clients"><Clients /></Element>
        <Element name="blog"><Blog /></Element>
        <Element name="contact"><Contact /></Element>
      </main>

      <Footer />
    </>
  )
}

export default App
