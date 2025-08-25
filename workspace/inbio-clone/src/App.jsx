import { useEffect } from 'react'
import AOS from 'aos'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <div>
      {/* Layout and sections will be added here */}
      <header className="py-3 border-bottom sticky-top bg-white">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand fw-bold" href="#home">InBio Clone</a>
          <nav className="d-none d-md-flex gap-4">
            <a href="#home" className="text-decoration-none text-dark">Home</a>
            <a href="#about" className="text-decoration-none text-dark">About</a>
            <a href="#services" className="text-decoration-none text-dark">Services</a>
            <a href="#portfolio" className="text-decoration-none text-dark">Portfolio</a>
            <a href="#contact" className="text-decoration-none text-dark">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-5" data-aos="fade-up">
          <div className="container">
            <h1 className="display-4 fw-bold">Welcome</h1>
            <p className="lead">Sections and animations will be implemented next.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
