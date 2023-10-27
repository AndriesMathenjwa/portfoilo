import React, { useState, useEffect } from 'react';

const Home = () => {
  const words = [
    "Full Stack Developer 💻",
    "MERN Stack Developer 🚀",
    "Web Developer 💻",
    "React Developer ⚛️",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const wordIndex = currentWordIndex;
    const word = words[wordIndex];
    let timer;

    if (typing) {
      timer = setTimeout(() => {
        setCurrentWord(word.substring(0, currentWord.length + 1));

        if (currentWord.length === word.length) {
          setTyping(false);

          setTimeout(() => {
            setTyping(true);
            setCurrentWord("");
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }, 5000); // Pause at the end of each word for 2 seconds before erasing
        }
      }, 100);
    } else {
      timer = setTimeout(() => {
        setCurrentWord(word.substring(0, currentWord.length - 1));

        if (currentWord.length === 0) {
          setTyping(true);
        }
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [currentWord, currentWordIndex, typing]);

  return (
    <div className='home-container'>
      <div className="home-parent">
        <div className="home-details">
          <div className="colz">
            <a href="#">
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href="#">
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href="#">
              <i className='fa fa-instagram'></i>
            </a>
            <a href="#">
              <i className='fa fa-twitter'></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className='primary-text'>
              {" "}
              Hello, I'm <span className='highlighted-text'>Andries</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                {currentWord}
              </h1>
              <span className="profile-role">
                Knack of building applications with front and back-end operations
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
