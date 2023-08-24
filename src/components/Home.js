import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome to my Home Pages</h2>
        <p className="parag">
          The Math-Magician application redefines mathematics learning through interactive and 
          enchanting experiences. Seamlessly blending education with entertainment, it offers a
          diverse range of engaging math puzzles,
          games, and tutorials, catering to all skill levels. 
          From basic arithmetic to complex problem-solving, Math-Magician captivates learners with its captivating approach.
        </p>
        <p className="parag">
          With Math-Magician, users embark on a journey of numerical discovery, 
          where learning becomes an adventure. Intuitive interfaces, real-time feedback, 
          and personalized challenges make math intriguing and accessible. Whether for
          students striving to strengthen math prowess or adults aiming to sharpen their skills, 
          Math-Magician transforms abstract concepts into a captivating magical realm of numbers.
        </p>
      </div>
    );
  }
}

export default Home;
