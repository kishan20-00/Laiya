import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './home.css'; // Import your home page CSS file

const fadeImages = [
  {
    url: '/images/s1.jpg',
    caption: 'First Slide'
  },
  {
    url: '/images/s2.jpg',
    caption: 'Second Slide'
  },
  {
    url: '/images/s3.jpg',
    caption: 'Third Slide'
  },
];

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index} className="each-fade">
                <img src={fadeImage.url} alt={fadeImage.caption} />
                <h2 className="caption">{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
