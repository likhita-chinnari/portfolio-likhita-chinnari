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
            <img src="icons/profile.jpg" alt="Likhita Chinnari" />
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
              <img src="icons/asu.png" alt="ASU Logo" />
              <h3>Master of Science</h3>
              <p>Computer Science</p>
              <p>Arizona State University</p>
            </div>
            <div className="education-card">
              <span className="edu-year">2017 - 2021</span>
              <img src="icons/vssut.jpg" alt="Engineering Logo" />
              <h3>Bachelor of Technology</h3>
              <p>Electronics and Telecommunication Engineering</p>
            </div>
            <div className="education-card">
              <span className="edu-year">2017</span>
              <img src="icons/odm.png" alt="School Logo" />
              <h3>High School</h3>
              <p>O.D.M International School</p>
            </div>
          </div>
        </div>
      </section>

      {/*-- Skills Section --*/}
    <section className="skills-section fade-in" id="skills">
        <div className="container">
            <h2>My Skills</h2>
    
           {/*}-- Languages Section --*/}
            <div className="skills-category">
                <h3>Languages</h3>
                <div className="skills-grid">
                    <div className="skill-card"><img src="icons/java.png" alt="Java"/><p>Java</p></div>
                    <div className="skill-card"><img src="icons/kotlin.png" alt="Kotlin"/><p>Kotlin</p></div>
                    <div className="skill-card"><img src="icons/python.png" alt="Python"/><p>Python</p></div>
                    <div className="skill-card"><img src="icons/javascript.png" alt="JavaScript"/><p>JavaScript</p></div>
                    
                </div>
            </div>
    
            {/*-- Frameworks/Libraries Section */}
            <div className="skills-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skills-grid">
                    <div className="skill-card"><img src="icons/react.svg" alt="React"/><p>React</p></div>
                    <div className="skill-card"><img src="icons/vue.svg" alt="Vue.js"/><p>Vue.js</p></div>
                    <div className="skill-card"><img src="icons/nodejs.svg" alt="Node.js"/><p>Node.js</p></div>
                    <div className="skill-card"><img src="icons/express.svg" alt="Express"/><p>Express</p></div>
                </div>
            </div>
    
            {/*-- Android Section -*/}
            <div className="skills-category">
                <h3>Android Development</h3>
                <div className="skills-grid">
                    <div className="skill-card"><img src="icons/android.png" alt="Android"/><p>Android Studio</p></div>
                    <div className="skill-card"><img src="icons/jetpack.png" alt="Jetpack Compose"/><p>Jetpack Compose</p></div>
                    <div className="skill-card"><img src="icons/kotlin.png" alt="Coroutines & Flow"/><p>Kotlin Coroutines & Flow</p></div>
                    <div className="skill-card"><img src="icons/dagger.jpg" alt="Dagger Hilt"/><p> Dagger Hilt</p></div>
                    <div className="skill-card"><img src="icons/okhttp.png" alt="OkHttp"/><p>OkHttp</p></div>
                    <div className="skill-card"><img src="icons/rxjava.jpg" alt="RxJava"/><p>RxJava</p></div>
                    <div className="skill-card"><img src="icons/room.jpg" alt="Room"/><p>Room</p></div>
                    <div className="skill-card"><img src="icons/opengl.png" alt="OpenGL ES"/><p>OpenGL ES</p></div>
                    <div className="skill-card"><img src="icons/aosp.png" alt="AOSP"/><p>AOSP</p></div>
                    <div className="skill-card"><img src="icons/adb.png" alt="ADB"/><p>ADB</p></div>
                </div>
            </div>
    
            {/*-- React Native Section -*/}
            <div className="skills-category">
                <h3>React Native Development</h3>
                <div className="skills-grid">
                    <div className="skill-card"><img src="icons/react.png" alt="React Native"/><p>React Native</p></div>
                    <div className="skill-card"><img src="icons/redux.png" alt="Redux"/><p>Redux</p></div>
                    <div className="skill-card"><img src="icons/expo.jpg" alt="Expo"/><p>Expo</p></div>
                    <div className="skill-card"><img src="icons/axios.jpg" alt="Axios"/><p>Axios</p></div>
                    <div className="skill-card"><img src="icons/lottie.jpg" alt="Lottie"/><p>Lottie</p></div>
                </div>
            </div>
    
            {/*-- Web Section -8*/}
            <div className="skills-category">
                <h3>Web Technologies</h3>
                <div className="skills-grid">
                   <div className="skill-card"><img src="icons/html.png" alt="HTML"/><p>HTML</p></div>
                    <div className="skill-card"><img src="icons/css.png" alt="CSS"/><p>CSS</p></div>
                    <div className="skill-card"><img src="icons/restapi.png" alt="REST APIs"/><p>RESTful APIs</p></div>
                </div>
            </div>
    
            {/*-- Machine Learning Section*/}
            <div className="skills-category">
                <h3>Machine Learning</h3>
                <div className="skills-grid">
                    <div className="skill-card"><img src="icons/pytorch.jpg" alt="PyTorch"/><p>PyTorch</p></div>
                    <div className="skill-card"><img src="icons/tensorflow.png" alt="TensorFlow"/><p>TensorFlow</p></div>
                    <div className="skill-card"><img src="icons/keras.png" alt="Keras"/><p>Keras</p></div>
                    <div className="skill-card"><img src="icons/sckit.png" alt="Scikit-Learn"/><p>Scikit-Learn</p></div>
                    <div className="skill-card"><img src="icons/opencv.png" alt="OpenCV"/><p>OpenCV</p></div>
                    <div className="skill-card"><img src="icons/huggingface.png" alt="Hugging Face Transformers"/><p>Hugging Face Transformers</p></div>
                </div>
            </div>
    
        </div>
    </section>

      {/* Projects Section */}
    <section id="projects" className="projects-section fade-in">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
      
            <div className="project-card">
              <h3>Movie Recommendation System</h3>
              <p>Built a movie recommendation system in Python, utilizing Scikit-learn and Pandas. Implemented classification and clustering models, including KNN and Logistic Regression, achieving 85%+ prediction accuracy to provide personalized movie suggestions.</p>
              <div className="tech-stack">
                <span>Python</span><span>Scikit-learn</span><span>Pandas</span><span>ML</span>
              </div>
              <div className="project-image">
                <img src="/icons/movies_list.png" alt="Movies Recommendation System"/>
              </div>
              <div className="project-links">
                <a href="https://github.com/likhita-chinnari/Movie-Recommendation-System" target="_blank"><i className="fab fa-github"></i></a>
              </div>
            </div>

            <div className="project-card">
                <h3>Handwritten Recognition</h3>
                <p>Built a handwritten text recognition model that goes beyond typical OCR. Used CNN-LSTM hybrid architecture to digitize handwritten books, diaries, and historical documents with high accuracy. The model understands both character shapes and the sequence of writing, improving recognition for cursive and complex handwriting styles.</p>
                <div className="tech-stack">
                  <span>Python</span><span>OpenCV</span><span>TensorFlow</span><span>CNN</span><span>LSTM</span><span>Deep Learning</span>
                </div>
                <div className="project-image">
                  <img src="/icons/handwritten-recognition-image.png" alt="Handwritten Recognition System"/>
                </div>
                <div className="project-links">
                  <a href="https://github.com/likhita-chinnari/Handwritten-Text-Recognition/tree/master/handwritten-text-recognition-master" target="_blank"><i className="fab fa-github"></i></a>
                </div>
              </div>

            <div className="project-card">
                <h3>Music Application</h3>
                <p>A real-time weather app using OpenWeatherMap and Unsplash APIs. Displays current weather and city imagery based on search input.</p>
                <div className="tech-stack">
                  <span>Kotlin</span><span>Jetpack Compose</span><span>Material3</span><span>Android Development</span><span>MVVM</span><span>Dagger Hilt</span>
                </div>
                <div className="project-image">
                  <img src="/icons/music-app.jpeg" alt="MusicApp"/>
                </div>
                <div className="project-links">
                  <a href="https://github.com/likhita-chinnari/MusicApp-Jetpack-Compose" target="_blank"><i className="fab fa-github"></i></a>
                </div>
              </div>

             

              <div className="project-card">
                <h3>Video Streaming Application</h3>
                <p>A real-time weather app using OpenWeatherMap and Unsplash APIs. Displays current weather and city imagery based on search input.</p>
                <div className="tech-stack">
                  <span>Kotlin</span><span>Retrofit</span><span>ExoPlayer</span><span>Leanback</span><span>MVVM</span><span>Android Development</span>
                </div>
                <div className="project-image">
                  <img src="/icons/videostreaming-image.jpeg" alt="VideoStreamingApp"/>
                </div>
                <div className="project-links">
                  <a href="https://github.com/likhita-chinnari/VideoStreamingApp/" target="_blank"><i className="fab fa-github"></i></a>
                </div>
              </div>
      
            <div className="project-card">
              <h3>Employee Performance Tracker</h3>
              <p>Developed a secure performance tracking system using Java, Spring Boot, and MySQL. The platform features an admin dashboard for real-time insights, reducing evaluation time and employs data analysis to improve accuracy</p>
              <div className="tech-stack">
                <span>Java</span><span>Spring Boot</span><span>JavaScript</span><span>MySQL</span>
              </div>
              <div className="project-image">
                <img src="/icons/employee_performance_tracker.jpeg" alt="Employee-Performance-Tracker"/>
              </div>
              <div className="project-links">
                <a href="https://github.com/likhita-chinnari/Employee-Performance-Tracker" target="_blank"><i className="fab fa-github"></i></a>
              </div>
            </div>
      
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section fade-in">
        <div className="container">
            <h2>Experience</h2>
            <div className="timeline">
    
                {/*-- Lucid Motors - Full-time and Internships --*/}
                
    
                <div className="timeline-item">
                    <span className="year">Oct 2024 - Dec 2024</span>
                    <div className="details">
                        <h3>Lucid Motors</h3>
                        <h4>Android Applications Software Engineer Intern (Fall 2024)</h4>
                        <p>Contributed to automotive app development, integrated new UI features, and optimized app launch speeds by 15% for vehicle infotainment systems.</p>
                    </div>
                </div>
    
                <div className="timeline-item">
                    <span className="year">May 2024 - Aug 2024</span>
                    <div className="details">
                        <h3>Lucid Motors</h3>
                        <h4>Android Applications Software Engineer Intern (Summer 2024)</h4>
                        <p>Led feature integration for media apps, optimized caching, and worked on critical AOSP modifications, improving system performance by 18%.</p>
                    </div>
                </div>
    
                {/*-- Harman Connected Services --*/}
                <div className="timeline-item">
                    <span className="year">Jul 2022 - Jun 2023</span>
                    <div className="details">
                        <h3>Harman Connected Services</h3>
                        <h4>Software Engineer - Product Development</h4>
                        <p>Developed diagnostic modules, collaborated on AOSP development, and contributed to large-scale infotainment systems, reducing app crashes by 20%.</p>
                    </div>
                </div>
    
                <div className="timeline-item">
                    <span className="year">Aug 2021 - Jun 2022</span>
                    <div className="details">
                        <h3>Harman Connected Services</h3>
                        <h4>Associate Engineer</h4>
                        <p>Built automotive applications from scratch, integrated with AOSP, and delivered multiple infotainment apps within tight deadlines for major OEMs.</p>
                    </div>
                </div>
    
                {/*-- Tikkly Agro Solutions -*/}
                <div className="timeline-item">
                    <span className="year">May 2020 - Jul 2020</span>
                    <div className="details">
                        <h3>Tikkly Agro Solutions</h3>
                        <h4>React Applications Developer Intern</h4>
                        <p>Developed e-commerce platforms using React, Redux, and CSS, integrated secure payment gateways, and improved application load times by 25%.</p>
                    </div>
                </div>

                {/*-- Tikkly Agro Solutions -*/}
                <div className="timeline-item">
                    <span className="year">May 2019 - Jul 2019</span>
                    <div className="details">
                        <h3>Electronics Corporation of India Limited</h3>
                        <h4>Software Developer Intern</h4>
                        <p>Designed firmware selector dashboard in React with real-time flashing and device sync over USB serial. Built C++ CLI logger tool to collect and tag embedded board messages streamed from FlexRay/CAN networks.</p>
                    </div>
                </div>
    
            </div>
        </div>
    </section>


      {/* Contact Section */}
      <section id="contact" className="contact-section fade-in">
    <div className="container contact-container">
        <h2>Contact Me</h2>
        <div className="contact-info">
            <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>likhitachinnari@gmail.com</p>
            </div>
            <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <p>(602) 566-0428</p>
            </div>
            <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Tempe, United States</p>
            </div>
        </div>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/likhita-chinnari/">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/likhita-chinnari">
                <i className="fab fa-github"></i>
            </a>
            <a href="mailto:likhitachinnari0704@gmail.com">
                <i className="fas fa-envelope"></i>
            </a>
        </div>
        
    </div>
    </section>
    
      {/* Footer Section */}
      <footer className="main-footer">
        <p>Thanks for Scrolling</p>
      </footer>
    </>
  );
}