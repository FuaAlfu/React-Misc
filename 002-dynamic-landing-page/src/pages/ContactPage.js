import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ isOnContactPage }) => (isOnContactPage ? '#f4f4f4' : 'transparent')};
  transition: background-color 0.3s;
  border-radius: 5px;
  box-shadow: ${({ isOnContactPage }) => (isOnContactPage ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none')};
`;

const ContactUs = () => {
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  const handleBackToHome = () => {
    history.push('/');
  };

  const isOnContactPage = location.pathname === '/contact';

  return (
    <div>
      <ContactForm onSubmit={handleSubmit} isOnContactPage={isOnContactPage}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </ContactForm>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default ContactUs;