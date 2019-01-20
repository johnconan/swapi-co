import React, { Component } from 'react';

import './header.css';

import starWarsSound from './zvezdnye-voyny-vstuplenie.mp3';

class Header extends Component {

  playMusic() {
    const audio = new Audio(); 
    audio.src = starWarsSound; 
    audio.autoplay = true;
  }

  render() {
    return (
      <div className="header d-flex">
        <h3>
          <a href="#"
            onClick={this.playMusic}>
            Star Wars
          </a>
        </h3>
        <ul className="d-flex">
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
        </ul>
      </div>
    );
  }
};

export default Header;