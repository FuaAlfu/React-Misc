import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CenteredButton = styled.button`
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  background-color: #333;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const ContactUs = () => {
  const history = useHistory();

  const handleContactClick = () => {
    history.push('/contact');
  };

  return (
    <CenteredButton onClick={handleContactClick}>
      Contact Us
    </CenteredButton>
  );
};

export default ContactUs;
