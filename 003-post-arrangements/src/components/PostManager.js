import React from 'react';
import data from '../data/data.json';
import Post from './Post';

const PostManager = () => {
  const posts = data.info;

  return (
    <div className="post-manager">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default PostManager;