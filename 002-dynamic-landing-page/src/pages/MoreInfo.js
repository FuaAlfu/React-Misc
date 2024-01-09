import React from 'react';
import data from '../data.json';
import styled from 'styled-components';

const DetailsSection = styled.section`
  padding: 40px;
`;

const MoreInfo = () => {
  const { details } = data;

  return (
    <DetailsSection>
      <h2>More Information</h2>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </DetailsSection>
  );
};

export default MoreInfo;