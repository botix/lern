import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [content, setContent] = useState("");
  
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { 
      content
    });
    
    setContent("");
  };


  return <div>
    <form onSubmit={onSubmit} style={formGroup}>
      <div>
        <label style={labelStyle}>New Comment</label>
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          style = {formControl}
        />
      </div>
      <button style={button}>Submit</button>
    </form>
  </div>
};

const formGroup = {
  "display": "flex",
  "flex-direction": "column",
};

const formControl = {
  "height": "1rem",
  "width": "75%",
  "margin": ".25rem 0",
  "borderBottomWidth": "1",
  "borderTop": "none",
  "borderRight": "none",
  "borderLeft": "none",
  "outline": "none",
  "fontSize": "1rem"
};

const button = {
  "height": "1.5rem",
  "margin": "auto",
  "width":"50%",
  "display": "inline-block",
  "border": "1px solid #ccc",
  "padding": "1rem, .5rem",
  "borderRadius": ".1rem",
  "textDecoration": "none",
  "fontSize": "1rem"
};

const labelStyle = {
  "fontSize": "1rem",
  "marginBottom": "2.5rem"
};