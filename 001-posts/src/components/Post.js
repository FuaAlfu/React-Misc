import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Post = ({ info }) => {
  return (
    <Card>
      <h2>{info.name}</h2>
      <p>Age: {info.age}</p>
      <p>Occupation: {info.occupation}</p>
    </Card>
  );
};

export default Post;