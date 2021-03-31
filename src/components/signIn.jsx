import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(email, password)
  return (
    <div className="signIn">
      <form className="formContainer">
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
