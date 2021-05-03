import React from 'react';
import image from '../../images/desktop/image-interactive.jpg';
import './about.styles.scss';

const About = () => {
  return (
    <div className="about container">
      <img src={image} alt="Interactive" />
      <div className="about__content">
        <h1 className="about__content-title">The Leader in Interactive VR</h1>
        <p className="about__content-paragraph">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default About;
