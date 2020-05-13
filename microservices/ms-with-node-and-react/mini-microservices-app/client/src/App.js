import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default () => {
  return <div style={container}>
    <h1 style = {header}>Create Post</h1>
    <PostCreate />
    <hr />
    <h1 style={header}>Posts</h1>
    <PostList />
  </div>;
};

const container = {
  "width": "80%",
  "margin": "auto",
  "display": "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center"
};

const header = {
  "fontSize": "3rem",
  "color": "#333"
};