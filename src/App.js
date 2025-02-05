import React from 'react';
import './App.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';


const projects = [
  {
    id: 1,
    title: "Luxury Gold Theme",
    description: "Elegant golden-themed digital invitation with RSVP tracking.",
    color: "#D4AF37" ,
    link: "https://wedding.rampatra.com/",
    image:"./images/capture_20250205132344093.bmp",
  },
  {
    id: 2,
    title: "Modern Minimalist",
    description: "Clean and contemporary design with animated elements.",
    color: "#FF6F61",
    link:"https://islamic-wedding-invitation.vercel.app/",
    image:"./images/capture_20250205142610266.bmp",
  },
  {
    id: 3,
    title: "Vintage Romance",
    description: "Classic design with floral patterns and music integration.",
    color: "#6B5B95",
    link:"https://sonali.netlify.app/",
    image:"./images/capture_20250205142624970.bmp",

  },
  {
    id: 4,
    title: "Rustic Charm",
    description: "Warm and cozy theme with wooden textures and handwritten fonts.",
    color: "#A67B5B",
    link:"https://msnproduction-atep-arty.netlify.app/", 
    image:"./images/capture_20250205142714597.bmp",

  },
  {
    id: 5,
    title: "Hollywood Glam",
    description: "Red carpet-inspired invitation with cinematic elements.",
    color: "#D32F2F",
    link: "https://themewagon.github.io/wedding/",
    image:"./images/capture_20250205145327875.bmp"

  },
  {
    id: 6,
    title: "Celestial Magic",
    description: "A dreamy theme inspired by the stars and galaxies.",
    color: "#1E3A8A",
    link:"https://wedding-invitation-website.vercel.app/",
    image:"./images/capture_20250205145707284.bmp"
  }
 
];

const Header = () => (
  <header className="header">
    <h1>Smart Wedding Invitations</h1>
    <p>Modern digital solutions for your special day</p>
  </header>
);

const ProjectCard = ({ project }) => (
  <div className="project-card" style={{ borderTop: `5px solid ${project.color}` }}>
    <div className="img-card">
      <img className='img-1' src={project.image} alt={project.title}/>
    </div>
    <div className="card-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a className='a-l' href={project.link} target="_blank" rel="noreferrer">
       <button className="cta-button" style={{ backgroundColor: project.color }}>
        View Demo
       </button>
      </a>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h2 className='tl-11'>Contact Us</h2>
      <hr className='hr-11'/>
      <p>Have any questions? Feel free to reach out!</p>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+9676621199">+919676621199</a>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <a
            href="https://wa.me/9676621199"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <main className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
    <Footer /> 
  </div>
);

export default App;
