// React
import { useInView, AnimatePresence, motion } from "framer-motion"
import { useRef } from 'react'

function App() {

  // Grabbing the element that we want to check is in view
  let element = useRef(null)
  // This is basically just like regular state that changes when the
  // element we passed in is in view, so it will also trigger a render
  // This makes it EXTREMELY easy to see if something is in view, all we have to do is use this hook!
  const isInView = useInView(element)


  return (
    <div className="App">
      <header className="header">
        <h1>My Personal Website</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>This is where you can introduce yourself and talk about your skills, interests, and experiences.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>This is where you can introduce yourself and talk about your skills, interests, and experiences.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>This is where you can introduce yourself and talk about your skills, interests, and experiences.</p>
      </section>

      {/*We have to keep this outside, because we need to always see
      if it is in view. If it is inside the isInView && {here} then we may never
      be able to see it because it would never render and the effect wont happen
      */}
      <section ref={element}>
      {/* We can use AnimatePresence to animate things that get mounted and unmounted */}
      <AnimatePresence>
        {/* We can animate the entire motion div however we want */}
        {isInView && (
          
          
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            exit={{x: 1000  }}
          > 
          {/* initial is where we want the animation to start,
          in this case, all the way to the right.
          Animate is where you want it to be, in this case at its regular position
          Transition specifies how smooth and how long the transition should be.
          You can use exit to specify an exit animation when the prop gets unmounted.
          This is required when using AnimatePresence
          */}
          <h2>This should slide in</h2>
          <div className="project-list">
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
      </section>

      




      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at example@email.com</p>
      </section>


      <footer className="footer">
        <p>&copy; 2024 My Personal Website</p>
      </footer>
    </div>
  );
}

export default App;

// CSS Styles
import './App.css';

