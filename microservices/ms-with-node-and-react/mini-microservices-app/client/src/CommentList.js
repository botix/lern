import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [comments, setComments] = useState([]);
  
    const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
  
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const renderedComments = comments.map(comment => {
    return <li 
      key={comment.id}
      style={commentStyle}
    >
      {comment.content}
    </li>
  });

  return <ul> {renderedComments} </ul>
};

const commentStyle = {
  "textAlign": "left",
  "marginLeft": "30%",
  "marginBottom": ".5rem", 
  "opacity": "0.8",
};