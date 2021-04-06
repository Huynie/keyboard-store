import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const SignIn = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const users = useRef();
  const { register, handleSubmit, formState: {errors} } = useForm();

  useEffect(() => {
    const getUser = async(req, res) => {
      try {
        const user = await axios.get('http://localhost:9000/user');
        users.current = user.data
        console.log(users.current, req)
      } catch (e) {
        console.log('something went wrong while getting data.', e);
        // return res.status(500).json({ message: e.message });
      }
    }
    getUser();
  }, []);

  // const validate = () => {
  //   if (email !== '') {
  //     const correctEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  //     if(correctEmail){
  //       console.log('valid email');
  //       const validUN = users.current.find(user => user['username'] === email);
  //       if (validUN) {
  //         console.log('username correct', email);
  //       }else{
  //         console.log('username invalid')
  //       }
  //     }else{
  //       console.log('Please enter a valid email');
  //     }
  //   }else{
  //     console.log('username required');
  //   }
  //   if (password !== '') {
  //     const validPW = users.current.find(user => user['password'] === password);
  //     if (validPW) {
  //       console.log('password correct', password);
  //     }else{
  //       console.log('password incorrect');
  //     }
  //   }else{
  //     console.log('pasword required.')
  //   }
  // }
  
  const submit = async() => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Content-Type, Origin',
    //     'Access-Control-Allow-Methods': 'OPTION, POST, GET',
    //     'crossDomain': true
    //   }
    // }
    await axios.post('http://localhost:9000/user',
    {
      username: 'test3@test.com',
      password: 'test3'
    }
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err.response)
    });


    // await fetch('http://localhost:9000/user', {
    //   statusCode: 200,
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: email,
    //     password: password
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Methods": "GET, POST, OPTION"
    //   },
    // })
    // validate();
  };

  const testUN = (value) => {
    const validUN = users.current.find(user => user['username'] === value);
    if(validUN){
      console.log('username correct', value);
    }else{
      console.log('username incorrect');
    }
  }
  const testPW = (value) => {
    const validPW = users.current.find(user => user['password'] === value);
    if(validPW){
      console.log('password correct', value);
    }else{
      console.log('password incorrect');
    }
  }

  return (
    <div className="signIn">
      <form className="formContainer" onSubmit={handleSubmit()}>
          <div className="inputContainer">
              <label htmlFor="username">Email</label>
              <input type="email" placeholder="Enter Email" name="username" {...register("username", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, validate: value => testUN(value)})}/>
              {/* <input type="email" placeholder="Enter Email" name="username" required onChange={e => setEmail(e.target.value)}/> */}
              <br/>
              <label htmlFor="username">Password</label>
              <input placeholder="Enter password" name="password" {...register("password", {required: true, minLength: 4, validate: value => testPW(value)})}/>
              {/* <input type="password" placeholder="Enter password" name="password" minLength="4" required onChange={e => setPassword(e.target.value)}/> */}
          </div>
          <a href="https://keybz.netlify.app/signin">Forgot Password</a>
          <button type="submit">Sign In</button>
          {/* <button type="submit" onClick={() => submit()}>Sign In</button> */}
          <p>{errors.username && "email required"}</p>
          <p>{errors.password && "password required"}</p>
      </form>
          <button type="submit" onClick={() => submit()}>Test</button>
    </div>
  );
}

export default SignIn;
