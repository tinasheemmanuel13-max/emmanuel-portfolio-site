
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import projectOne from "./images/project-one.png";
import projectTwo from "./images/project-two.png";
import projectThree from "./images/project-three.png";
import "./index.css";

// NAVIGATION
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  
  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        EMMANUEL<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <a href="#contact" className="hire-button">
        Let's Talk ↗
      </a>
    </nav>
  );
}

// HERO SECTION
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <p className="availability">
          <span></span> AVAILABLE FOR PROJECTS
        </p>

        <h1>
          YOUR BRAND.
          <br />
          MY DESIGN.
          <br />
          <span>EVERYONE TALKING.</span>
        </h1>

        <p className="hero-description">
          I'm Emmanuel, a designer behind MANT.
          I make flyers, posters & websites for
          brands in Southern Africa that want to
          look premium - not cheap.
        </p>

        <a href="#work" className="primary-button">
          EXPLORE MY WORK <span>↗</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>BASED IN SOUTHERN AFRICA</span>
        <span>GRAPHIC DESIGNER / VISUAL CREATIVE / WEB DEVELOPER</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

    </section>
  );
}

// PROJECTS SECTION
function Projects() {

  const projects = [
    {
      number: "01",
      title: "Event & Church Posters",
      category: "POSTER DESIGN",
      image: projectOne
    },
    {
      number: "02",
      title: "Business Advertising / Promotional Flyers",
      category: "ADVERTISING DESIGNS",
      image: projectTwo
    },
    {
      number: "03",
      title: "Logo Design & Brand Identity",
      category: "LOGO DESIGN",
      image: projectThree
    }
  ];

  return (
    <section className="work-section section-padding" id="work">

      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>Work that makes people stop scrolling.</h2>
        </div>

        <p className="section-description">
          I don't just make pretty flyers. I make posters 
          for businesses, churches & events around Sourthen Africa 
          that people actually share.
        </p>
      </div>

      <div className="project-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

         <div className="project-image">
          {/* Blurredbackground */}

          <img src={project.image} className="project-bg" alt="" aria-hidden="true"/>
          
          {/*Main Image*/}
          
             <img src={project.image} alt={project.title} />

              <span className="project-number"> 
                {project.number}
              </span>
         </div>

            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>

              <span className="project-arrow">↗</span>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

// ABOUT SECTION
function About() {
  return (
    <section className="about-section section-padding" id="about">

      <p className="eyebrow">02 / ABOUT ME</p>

      <div className="about-content">

        <h2>
          I don't make pretty design. <span>I make
          design that works.</span>
        </h2>

        <div className="about-text">
          <p>
            I'm Emmanuel, a graphic designer +
            BSc ICT student building MANT Technologies.
          </p>

          <p>
            I started designing because I saw too many good
            businesses in Africa with cheap-looking flyers. 
            Good church, good food, good service -  but the 
            poster was killing them.
          </p>

          <p>
            So I fix that. I make posters, brands & websites 
            that make people stop, look, and say "Who made this?"
          </p>

          <p>
            If your flyer is not getting you clients, it's not the 
            business. It's the design. Let me fix it.
          </p>

          <a href="#contact" className="text-link">
            LET'S WORK TOGETHER ↗
          </a>
        </div>

      </div>

    </section>
  );
}

// SERVICES SECTION
function Services() {

  const services = [
    ["01", "Posters & Flyers that pack events", "Church programs, concerts, weddings, sales. I make posters people share on WhatsApp status the same day."],
    ["02", "Logo & Brand Identity", "Not just a logo. Full brand -  colours, fonts, t-shirt, social templates. Like I did for Elara Guides & Bites by Tabs."],
    ["03", "Websites That Sell", "Simple, fast websites for small businesses that make you look like a big brand. Portfolio, booking, WhatsApp order button."],
  ];

  return (
    <section className="services-section section-padding" id="services">

      <p className="eyebrow">03 / WHAT I DO</p>
      <h2>My Services.</h2>

      <div className="service-list">

        {services.map((service) => (
          <div className="service-item" key={service[0]}>

            <span>{service[0]}</span>

            <h3>{service[1]}</h3>

            <p>{service[2]}</p>

            <span className="service-arrow">↗</span>

          </div>
        ))}

      </div>

    </section>
  );
}

// CONTACT SECTION
function Contact() {
  return (
    <section className="contact-section section-padding" id="contact">

      <p className="eyebrow">04 / GET IN TOUCH</p>

      <h2>
        Got a Poster, Brand or Website you need
        <br />
        this week?
        <span> Let's talk.</span>
      </h2>

      <p>
        Don't wait till your event is tomorrow.
        Send me your idea on WhatsApp now - I 
        reply fast, and I'll tell you the price 
        + how many days it will take. No long stories.  
      </p>

      <div className="contact-buttons">

        <a
          href={`https://wa.me/263784678867?text=${encodeURIComponent(
            "Hi Emmanuel! 👋\n\nI came across your website and I'm interested in your design services.\n\nI'd like to discuss a project with you.\n\nProject type: {Enter project type here}\n\nBusiness/Brand name: {Enter your name Here}\n\nProject details: {Enter the details here}\n\nLooking forward to hearing from you!"
          )}`}
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          WHATSAPP ↗
        </a>

        <a
          href="https://instagram.com/_emm_tin_madz_"
          target="_blank"
          rel="noreferrer"
          className="social-button"
        >
          INSTAGRAM ↗
        </a>

        <a
          href="https://facebook.com/emm.tin.madz"
          target="_blank"
          rel="noreferrer"
          className="social-button"
        >
          FACEBOOK ↗
        </a>

      </div>

    </section>
  );
}

// FOOTER

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>EMMANUEL<span>.</span></h2>

          <p>
            DESIGNING IDEAS INTO VISUAL EXPERIENCES.
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>

          <a
            href="https://facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>

          <a
            href="https://wa.me/260YOURNUMBER"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 EMMANUEL. ALL RIGHTS RESERVED.
        </span>

        <a href="#home">BACK TO TOP ↑</a>

      </div>

    </footer>
  );
}

// COMPLETE HOMEPAGE
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// APPLICATION

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
