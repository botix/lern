import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) =>{
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title
    });

    setTitle("");
  };

  return <div style={wide}>
    <form onSubmit={onSubmit}>
      <div style={formGroup}>
        <label style={labelStyle}>Title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={formControl} 
        />
      </div>
      <button style={button}>Submit</button>
    </form>
  </div>;
};


const wide = {
  "width": "70%"
};

const formGroup = {
  "display": "flex",
  "flex-direction": "column",
};

const labelStyle = {
  "fontSize": "1.5rem",
  "marginBottom": "1.5rem"
};

const formControl = {
  "height": "2rem",
  "margin": "1rem 0",
  "borderBottomWidth": "1",
  "borderTop": "none",
  "borderRight": "none",
  "borderLeft": "none",
  "outline": "none",
  "fontSize": "1rem"
};

const button = {
  "height": "2rem",
  "width":"20%",
  "display": "inline-block",
  "border": "1px solid #ccc",
  "padding": "0.25rem, .5rem",
  "borderRadius": ".1rem",
  "textDecoration": "none",
  "fontSize": "1rem"
};