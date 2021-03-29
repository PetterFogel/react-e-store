import React from 'react'
import { CSSProperties } from "@material-ui/styles";

const About = () => {
    return (
      <div>
        <h1 style={title}>About</h1>
        <div className="container">
            <p style={paragraf} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, temporibus aut! Perferendis, perspiciatis! Dicta eum mollitia fugit magnam praesentium, illo cum, totam assumenda excepturi non voluptatem ipsa eius unde in!</p>
            
        </div>
      </div>
    );
}

export default About

const title: CSSProperties = {
  textAlign: "center",
  margin: "0rem 1rem 4rem",
};
const paragraf: CSSProperties = {
    textAlign: 'center',
    width: '75%',
}