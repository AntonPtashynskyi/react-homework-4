import { useState } from 'react';

export default function NewFeedBackForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          ></input>
        </label>
        <label>
          <span>password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          ></input>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
