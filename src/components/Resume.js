import React from 'react';

const Resume = () => {
    const dropboxResumeLink = 'https://www.dropbox.com/scl/fi/lh35i4hzhvjqbexqlnchg/Cody-Cooke-resume.pdf?rlkey=86hmo2tghk06c7kp60my41cue&dl=0;'
  
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Resume</h2>
          <p className="subtitle">Download my resume and check out my proficiencies:</p>
          <div className="content">
            <p>
              You can download my resume using the following link:
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
