import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const submit = async (req, res) => {
    try {
      // const keyboards = await axios.get('https://keybz.netlify.app/.netlify/functions/getKeyboards');
      const user = await axios.post('https://keybz.netlify.app/.netlify/functions/user', {email: email, password: password});
      console.log(user, req, res);
    } catch (e) {
      console.log('something went wrong while getting data.');
      // return res.status(500).json({ message: e.message });
    }
  };

  console.log(email, password)
  return (
    <div className="signIn">
      <form className="formContainer" onSubmit={() => submit()}>
          <div className="inputContainer">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Enter username" name="username" onChange={e => setEmail(e.target.value)}/>
              <br/>
              <label htmlFor="username">Password</label>
              <input type="text" placeholder="Enter password" name="password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <a href="https://keybz.netlify.app/signin">Forgot Password</a>
          <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
