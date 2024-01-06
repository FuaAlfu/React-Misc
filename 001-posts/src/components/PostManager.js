import React from 'react';
import Post from './Post';
import data from '../data.json';

const PostManager = () => {
  return (
    <div>
      {data.info.map((info, index) => (
        <Post key={index} info={info} />
      ))}
    </div>
  );
};

export default PostManager;