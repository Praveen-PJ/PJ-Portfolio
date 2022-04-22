import { Link } from 'react-router-dom';
//import { useState } from 'react';
import LogoTitle from '../../assets/images/logo-pj.png';
//import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm <img src={LogoTitle} alt="developer" />
            Praveen
            <br />
            Quality Analyst
          </h1>
          <h2>Web Developer / Frontend developer / Gamer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
