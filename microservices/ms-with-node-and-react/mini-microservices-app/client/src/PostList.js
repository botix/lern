import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div 
        className="card"
        style={cardStyle}
        key={post.id}
      >
        <div style={cardBodyStyle}>
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    );
  });

  return <div style={allPosts}>
    {renderedPosts}
  </div>;
};

const cardStyle = {
  "width": "30%",
  "marginBottom": "1.25rem",
  "textAlign": "center"
};

const cardBodyStyle = {
  
};

const allPosts = {
  "width": "60%",
  "margin": "auto",
  "display": "flex",
  "justify-content": "space-between",
  "flexWrap": "wrap"
};