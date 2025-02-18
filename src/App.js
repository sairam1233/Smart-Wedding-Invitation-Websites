"use client";
import React, { useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser";
import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";

const projects = [
  {
    id: 1,
    title: "Luxury Gold Theme",
    description: "Elegant golden-themed digital invitation with RSVP tracking.",
    color: "#D4AF37",
    link: "https://wedding.rampatra.com/",
    image: "./images/capture_20250205132344093.bmp",
  },
  {
    id: 2,
    title: "Modern Minimalist",
    description: "Clean and contemporary design with animated elements.",
    color: "#FF6F61",
    link: "https://smart-smaple-demo.vercel.app/",
    image: "./images/screely-1739879713409.png",
  },
  {
    id: 3,
    title: "Vintage Romance",
    description: "Classic design with floral patterns and music integration.",
    color: "#6B5B95",
    link: "https://sonali.netlify.app/",
    image: "./images/capture_20250205142624970.bmp",
  },
  {
    id: 4,
    title: "Rustic Charm",
    description: "Warm and cozy theme with wooden textures and handwritten fonts.",
    color: "#A67B5B",
    link: "https://msnproduction-atep-arty.netlify.app/",
    image: "./images/capture_20250205142714597.bmp",
  },
  {
    id: 5,
    title: "Hollywood Glam",
    description: "Red carpet-inspired invitation with cinematic elements.",
    color: "#D32F2F",
    link: "https://themewagon.github.io/wedding/",
    image: "./images/capture_20250205145327875.bmp",
  },
  {
    id: 6,
    title: "Celestial Magic",
    description: "A dreamy theme inspired by the stars and galaxies.",
    color: "#1E3A8A",
    link: "https://wedding-invitation-website.vercel.app/",
    image: "./images/capture_20250205145707284.bmp",
  },
  {
    id: 7,
    title: "Bohemian Bliss",
    description: "A free-spirited theme with earthy tones and artistic patterns.",
    color: "#C08570",
    link: "https://smart-wedding-demo-a5n1.vercel.app/",
    image: "./images/screely-1739879823320.png",
  },
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
      <img className='img-1' src={project.image} alt={project.title} />
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


const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_pqqqg9g",
        "template_btj6b8j",
        templateParams,
        "nDAN56rv6Tpm7K-5f"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-header">
          <h2 className="heading">Contact us</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {status && <p className="status-message">{status}</p>}
          <Button disabled={loading}>{loading ? "Sending..." : "Submit"}</Button>
        </form>
      </div>
    </section>
  );
};

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
