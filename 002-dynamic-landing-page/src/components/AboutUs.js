import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const AboutSection = styled.section`
  padding: 40px;
`;

const MoreInfoButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const AboutUs = () => {
  const history = useHistory();

  const handleMoreInfoClick = () => {
    history.push('/more-info');
  };

  return (
    <AboutSection>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <MoreInfoButton onClick={handleMoreInfoClick}>Learn More</MoreInfoButton>
    </AboutSection>
  );
};

export default AboutUs;