import React, { useState } from 'react';
import passwords from '../symp.json'; 
const PasswordGenerating = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    let result = '';
    const characters = passwords.password;
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * charactersLength)];
    }
    setPassword(result);
  };

  const handleLengthChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setLength(value >= 4 && value <= 24 ? value : 12);
  };

  return (
    <div className="password-generator">
      <input type="number" min="4" max="24" value={length} onChange={handleLengthChange} />
      <button onClick={generatePassword}>Generate Password</button>
      <p><code>{password}</code></p>
    </div>
  );
};

export default PasswordGenerating;
