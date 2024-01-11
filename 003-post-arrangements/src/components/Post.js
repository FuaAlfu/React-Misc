import React from 'react';


const Post = ({ title, description }) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Post;