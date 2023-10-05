import React from 'react';

const Project = ({ title, description, demoLink, repoLink, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title">{title}</p>
        <p>{description}</p>
        <div className="buttons">
          <a href={demoLink} className="button is-primary" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={repoLink} className="button is-link" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
