"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.add('hidden');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
      section.classList.add('hidden');
    });

    const dynamicText = document.querySelector('.dynamic-text') as HTMLElement;
    const roles = [
      'Android Developer',
      'React Native Developer',
      'Machine Learning Enthusiast',
      'Automotive Applications Developer',
      'Full Stack Developer',
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (dynamicText) {
        if (isDeleting) {
          dynamicText.textContent = currentRole.substring(0, charIndex--);
        } else {
          dynamicText.textContent = currentRole.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2500);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeEffect, 500);
        } else {
          setTimeout(typeEffect, isDeleting ? 75 : 120);
        }
      }
    }

    typeEffect();
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="main-header" id="navbar">
        <div className="container header-container">
          <div className="logo">LC</div>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero fade-in" id="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <p>I'M <span className="highlight">Likhita Chinnari</span></p>
            <h1 className="fixed-height">
              <span className="dynamic-text"></span>
            </h1>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
          <div className="hero-image">
            <img src="/public/icons/profile.jpg" alt="Likhita Chinnari" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fade-in" id="about">
        <div className="container">
          <h2 className="section-heading">About</h2>
          <p style={{ marginBottom: '20px' }}>
            I am a Software Engineer working in the Bay Area, driven by a passion for application development that began six years ago. Since then, I’ve been building exciting projects across Android, full-stack development, and mobile platforms, constantly exploring new ideas and evolving my skills.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Professionally, I specialize in automotive software development, focusing on AOSP for infotainment systems in electric vehicles. 🚗⚙️
          </p>
          <p>
            As I pursue my Master’s in Computer Science, I’m diving deeper into AI, NLP, and ML. 🚀
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section fade-in" id="education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <span className="edu-year">2023 - 2025</span>
              <img src="/public/icons/asu.png" alt="ASU Logo" />
              <h3>Master of Science</h3>
              <p>Computer Science</p>
              <p>Arizona State University</p>
            </div>
            <div className="education-card">
              <span className="edu-year">2017 - 2021</span>
              <img src="/public/icons/vssut.jpg" alt="Engineering Logo" />
              <h3>Bachelor of Technology</h3>
              <p>Electronics and Telecommunication Engineering</p>
            </div>
            <div className="education-card">
              <span className="edu-year">2017</span>
              <img src="/public/icons/odm.png" alt="School Logo" />
              <h3>High School</h3>
              <p>O.D.M International School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section fade-in" id="skills">
        <div className="container">
          <h2>My Skills</h2>
          {/* Add skills here */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section fade-in">
        <div className="container">
          <h2>Projects</h2>
          {/* Add projects here */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section fade-in">
        <div className="container">
          <h2>Experience</h2>
          {/* Add experience timeline here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section fade-in">
        <div className="container contact-container">
          <h2>Contact Me</h2>
          {/* Add contact information here */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="main-footer">
        <p>Thanks for Scrolling</p>
      </footer>
    </>
  );
}