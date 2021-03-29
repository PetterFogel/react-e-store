import { CSSProperties } from '@material-ui/styles';
import React from 'react'

import '../../style/About.css';

const About = () => {
    return (
      <div>
        <h1 style={title}>About</h1>
        <div className="container">
          <p className="paragraf">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            temporibus aut! Perferendis, perspiciatis! Dicta eum mollitia fugit
            magnam praesentium, illo cum, totam assumenda excepturi non
            voluptatem ipsa eius unde in!
          </p>
          <ul className="iconList">
            <li className="icon">
              <i className="fab fa-facebook-square"></i>
            </li>
            <li className="icon">
              <i className="fab fa-instagram-square"></i>
            </li>
            <li className="icon">
              <i className="fab fa-twitter-square"></i>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default About

const title: CSSProperties = {
    textAlign: 'center',
    margin: '1rem 1rem 4rem',
}


