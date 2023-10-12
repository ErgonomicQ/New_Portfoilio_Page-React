import React from 'react';
import Project from './Project';
import bookSearchImage from '../assets/book_search.png';
import petSocial from '../assets/social_whiskers.png';
import getFit from '../assets/GitFit.png';
import justText from '../assets/text_editor.png';
import employeeTrack from '../assets/employee_tracker.png';
import svgImages from '../assets/SVG_logo.png';
import '../styles/CustomStyle.css'
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Book Search MERN Refactor',
      description: 'A refactor of a book search site. Routes changed to using GraphQL.',
      demoLink: 'https://fullstack-mern-book-search-59f51ffcd5d2.herokuapp.com/',
      repoLink: 'https://github.com/ErgonomicQ/Book_Search_Engine_MERN',
      image: bookSearchImage, 
    },
    {
      id: 2,
      title: 'Social Whiskers',
      description: 'A social media website for Pets.',
      demoLink: 'https://social-whiskers-ad907fdaaf47.herokuapp.com',
      repoLink: 'https://github.com/edwinalban/Social-Whiskers-Pet-Adoption',
      image: petSocial, 
    },
    {
        id: 3,
        title: 'GetFit',
        description: 'User Workout application, work in progress.',
        demoLink: 'Coming Soon',
        repoLink: 'https://github.com/MerelJac/fitness-application',
        image: getFit, 
      },
      {
        id: 4,
        title: 'Just Another Text Editor',
        description: 'A PWA application that is a test text editor.',
        demoLink: 'https://pwa-app-module19-29ed7ef5b346.herokuapp.com/',
        repoLink: 'https://github.com/ErgonomicQ/PWA_Refactor_CodeEditor',
        image: justText, 
      },
      {
        id: 5,
        title: 'A MySQL Employee Tracker',
        description: 'An example of a MySQL employee tracker.',
        demoLink: 'https://www.youtube.com/watch?v=VYh6Hp8tJgE',
        repoLink: 'https://github.com/ErgonomicQ/Employee_Tracker_mysql',
        image: employeeTrack, 
      },
      {
        id: 6,
        title: 'SVG Logo Maker',
        description: 'A basic SVG Logo Maker.',
        demoLink: 'https://www.youtube.com/watch?v=5M-ai6QugVQ',
        repoLink: 'https://github.com/ErgonomicQ/SVG_Logo-Maker',
        image: svgImages, 
      },
    // Add more projects as needed
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Portfolio</h2>
        <p className="subtitle">These are projects I've made or collaborated on:</p>
        <div className="columns is-multiline">
          {projects.map((project) => (
            <div className="column is-one-third" key={project.id}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;