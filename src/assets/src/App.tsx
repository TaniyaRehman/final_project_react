import React, { useState } from "react";
import "./App.css";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiLayers,
  FiUsers,
  
  FiUser,
  FiShoppingCart,
  FiImage,
  FiMessageCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "UX Consulting",
      description:
        "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.",
      icon: <FiBriefcase />,
    },
    {
      title: "App Development",
      description:
        "We'll handle everything from to app development process until it is time to make your project live.",
      icon: <FiLayers />,
    },
    {
      title: "Business Strategy",
      description:
        "We'll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
      icon: <FiUsers />,
    },
  ];

  return (
    <div style={{ background: "#212428", color: "#c4cfde", minHeight: "100vh" }}>
      {/* Side Header (xl+) */}
      <header
        className="d-none d-xl-flex flex-column justify-content-between"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: 300,
          background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
          zIndex: 1000,
          padding: 30,
          borderRight: "1px solid #2a2e33",
        }}
      >
        <div className="text-center mb-4">
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo-06.png"
            alt="InBio"
            style={{ maxWidth: 140 }}
          />
        </div>

        <nav>
          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <a href="#home" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiHome />
                </span>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiBriefcase />
                </span>
                <span>Features</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiLayers />
                </span>
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiUsers />
                </span>
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#clients" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiUser />
                </span>
                <span>Clients</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiShoppingCart />
                </span>
                <span>Pricing</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiImage />
                </span>
                <span>Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link d-flex align-items-center" style={{ color: "#c4cfde" }}>
                <span className="me-2">
                  <FiMessageCircle />
                </span>
                <span>Contacts</span>
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <div
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#c4cfde",
              marginBottom: 12,
            }}
          >
            find with me
          </div>
          <div className="d-flex gap-2">
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1px solid #2a2e33",
                color: "#c4cfde",
                background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                textDecoration: "none",
              }}
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1px solid #2a2e33",
                color: "#c4cfde",
                background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                textDecoration: "none",
              }}
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1px solid #2a2e33",
                color: "#c4cfde",
                background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                textDecoration: "none",
              }}
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="d-xl-none"
        style={{
          background: "#1e2024",
          padding: "14px 18px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: "1px solid #2a2e33",
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo-dark.png"
            alt="InBio"
            style={{ height: 28 }}
          />
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            style={{ background: "none", border: "none", color: "#c4cfde", fontSize: 22 }}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className="d-xl-none"
        style={{
          position: "fixed",
          top: 0,
          left: isMenuOpen ? 0 : "-100%",
          width: 300,
          height: "100vh",
          background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
          transition: "left .3s ease",
          zIndex: 1001,
          padding: 24,
          borderRight: "1px solid #2a2e33",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logos-circle.png"
            alt="InBio"
            style={{ height: 36 }}
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{ background: "none", border: "none", color: "#c4cfde", fontSize: 22 }}
            aria-label="Close Menu"
          >
            <FiX />
          </button>
        </div>
        <nav>
          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="nav-link" style={{ color: "#c4cfde" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="nav-link" style={{ color: "#c4cfde" }}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="nav-link" style={{ color: "#c4cfde" }}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content (offset for side header on xl) */}
      <main
        style={{
          marginLeft: 0,
          paddingTop: 72,
        }}
        className="px-3 px-md-4"
      >
        <div className="d-none d-xl-block" style={{ height: 0, marginLeft: 300 }} />

        {/* Hero */}
        <section id="home" className="container py-5" style={{ minHeight: "80vh" }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <img
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-06.png"
                  alt="Jone Lee"
                  style={{
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    border: "8px solid #ff014f",
                    padding: 6,
                    background: "linear-gradient(145deg,#ff014f 0%,#ff6b9d 100%)",
                  }}
                />
              </div>
              <h1 className="fw-bold" style={{ color: "#fff" }}>
                Hi, I’m <span style={{ color: "#ff014f" }}>Jone Lee</span>
              </h1>
              <p className="mt-2" style={{ color: "#c4cfde", fontSize: 18 }}>
                I am a <span style={{ color: "#ff014f", fontWeight: 600 }}>Developer.</span>
              </p>
              <div className="mt-4">
                <a
                  href="#contacts"
                  className="btn"
                  style={{
                    background: "#ff014f",
                    color: "#fff",
                    padding: "12px 22px",
                    borderRadius: 6,
                    fontWeight: 600,
                  }}
                >
                  CONTACT ME
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#2a2e33", opacity: 1 }} />

        {/* Features */}
        <section id="features" className="container py-5">
          <div className="text-center mb-5">
            <div style={{ color: "#ff014f", letterSpacing: 2, textTransform: "uppercase", fontSize: 12 }}>Features</div>
            <h2 className="fw-bold" style={{ color: "#fff" }}>
              What I Do
            </h2>
          </div>

          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className="h-100"
                  style={{
                    background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                    border: "1px solid #2a2e33",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 12,
                      color: "#fff",
                      background: "linear-gradient(145deg,#ff014f 0%,#ff6b9d 100%)",
                      fontSize: 22,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h5 className="fw-semibold" style={{ color: "#fff" }}>
                    {s.title}
                  </h5>
                  <p style={{ color: "#c4cfde" }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ borderColor: "#2a2e33", opacity: 1 }} />

        {/* Contact */}
        <section id="contacts" className="container py-5">
          <div className="text-center mb-5">
            <div style={{ color: "#ff014f", letterSpacing: 2, textTransform: "uppercase", fontSize: 12 }}>Contact</div>
            <h2 className="fw-bold" style={{ color: "#fff" }}>
              Contact With Me
            </h2>
          </div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div
                style={{
                  background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                  border: "1px solid #2a2e33",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <div className="mb-3">
                  <img
                    src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
                    alt="Contact"
                    style={{ maxWidth: "100%", borderRadius: 8 }}
                  />
                </div>
                <h5 className="fw-semibold" style={{ color: "#fff" }}>
                  Nevine Acotanza
                </h5>
                <div style={{ color: "#c4cfde" }}>Chief Operating Officer</div>
                <p className="mt-3" style={{ color: "#c4cfde" }}>
                  I am available for freelance work. Connect with me via and call in to my account.
                </p>
                <div className="mt-2" style={{ color: "#c4cfde" }}>
                  <strong style={{ color: "#ff014f" }}>Phone:</strong> +01234567890
                </div>
                <div className="mt-1" style={{ color: "#c4cfde" }}>
                  <strong style={{ color: "#ff014f" }}>Email:</strong> admin@example.com
                </div>

                <div className="mt-3">
                  <div
                    style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, color: "#c4cfde" }}
                  >
                    FIND WITH ME
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href="#"
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 8,
                        border: "1px solid #2a2e33",
                        color: "#c4cfde",
                        background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                        textDecoration: "none",
                      }}
                    >
                      <FiTwitter />
                    </a>
                    <a
                      href="#"
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 8,
                        border: "1px solid #2a2e33",
                        color: "#c4cfde",
                        background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                        textDecoration: "none",
                      }}
                    >
                      <FiFacebook />
                    </a>
                    <a
                      href="#"
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 8,
                        border: "1px solid #2a2e33",
                        color: "#c4cfde",
                        background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                        textDecoration: "none",
                      }}
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                className="row g-3"
                style={{
                  background: "linear-gradient(145deg,#1e2024 0%,#23272b 100%)",
                  border: "1px solid #2a2e33",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                    style={{
                      background: "transparent",
                      borderColor: "#2a2e33",
                      color: "#c4cfde",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    style={{
                      background: "transparent",
                      borderColor: "#2a2e33",
                      color: "#c4cfde",
                    }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    style={{
                      background: "transparent",
                      borderColor: "#2a2e33",
                      color: "#c4cfde",
                    }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                    style={{
                      background: "transparent",
                      borderColor: "#2a2e33",
                      color: "#c4cfde",
                    }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="form-control"
                    style={{
                      background: "transparent",
                      borderColor: "#2a2e33",
                      color: "#c4cfde",
                    }}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn"
                    style={{ background: "#ff014f", color: "#fff", fontWeight: 600 }}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center" style={{ borderTop: "1px solid #2a2e33" }}>
          <div className="container">
            <p className="mb-0" style={{ color: "#c4cfde" }}>
              © 2025. All rights reserved by Rainbow-Themes
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

