
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
          I CREATE VISUALS
          <br />
          THAT MAKE BRANDS
          <br />
          <span>STAND OUT.</span>
        </h1>

        <p className="hero-description">
          I'm Emmanuel, a graphic designer creating
          impactful flyers, posters and advertising
          visuals that communicate and convert.
        </p>

        <a href="#work" className="primary-button">
          EXPLORE MY WORK <span>↗</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>BASED IN ZAMBIA & ZIMBABWE</span>
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
          <h2>Designs that speak.</h2>
        </div>

        <p className="section-description">
          A collection of creative projects
          built to capture attention.
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
          Good design isn't just
          about looking good.
          It's about <span>making
          an impact.</span>
        </h2>

        <div className="about-text">
          <p>
            I'm Emmanuel, a graphic designer and
            BSc ICT student passionate about the
            intersection of creativity and technology 
            in the business world.
          </p>

          <p>
            I specialise in creating flyers, posters, 
            advertising visuals as well as Websites 
            that help businesses communicate their 
            message effectively.
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
    ["01", "Flyer Design", "Creative flyers that communicate your message."],
    ["02", "Poster Design", "Eye-catching posters for events and promotions."],
    ["03", "Advertising Design", "Visual adverts that help brands stand out."],
    ["04", "Logo Design & Brand Identity", "Professional design that helps your to be remembered"]
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
        Have a project
        <br />
        in mind?
        <span> Let's talk.</span>
      </h2>

      <p>
        Have an idea, a business or an upcoming event?
        Let's create something great together.
        Reach out through any of my platforms.
      </p>

      <div className="contact-buttons">

        <a
          href={`https://wa.me/263784678867?text=${encodeURIComponent(
            "Hi Emmanuel! 👋\n\nI came across your website and I'm interested in your design services.\n\nI'd like to discuss a project with you.\n\nProject type:{Enter project type here}\nBusiness/Brand name:{Enter your name Here}\nProject details:{Enter the details here}\n\nLooking forward to hearing from you!"
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
