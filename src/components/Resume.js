import React from 'react';
import '../styles/CustomStyle.css'
const Resume = () => {
    const dropboxResumeLink = 'https://www.dropbox.com/scl/fi/lh35i4hzhvjqbexqlnchg/Cody-Cooke-resume.pdf?rlkey=86hmo2tghk06c7kp60my41cue&dl=1'
  
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Resume</h2>
          
          <div className="content">
            <p>
              You can download my resume by clicking this button here:
              <a href={dropboxResumeLink} className="button is-primary ml-3">
                Download Resume
              </a>
          </p>
          <h3 className="mt-4">Proficiencies</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>HTML5, CSS3</li>
            <li>Node.js, Express.js</li>
            <li>SQL, MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
