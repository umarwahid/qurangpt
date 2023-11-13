import React from 'react';
import '../AboutUS.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Welcome to Quran Institute</h1>
      <p>
        The Quran Institute provides an opportunity to learn the Quran from the comfort of your own home. Our courses are specially designed for people living in Western countries like the US, UK, Australia, Canada, or anywhere in the world.
      </p>
      <h3>Quran Courses</h3>
      <ul>
        <li>Quran Memorization Course</li>
        <li>Tafsir Course</li>
        <li>Fiqh Course</li>
        <li>Tajweed Course</li>
        <li>Hadith Course</li>
        <li>Quran Reading Course</li>
      </ul>
    </div>
  );
};

export default AboutUs;
