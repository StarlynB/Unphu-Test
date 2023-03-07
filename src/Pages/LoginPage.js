import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');

  const navigate = useNavigate();

  //getting email and pasword
  const username = localStorage.getItem('email')
  ? localStorage.getItem('email') : 'admin@admin.com';

  const userPassword = localStorage.getItem('password')
  ? localStorage.getItem('password') : 'admin';

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === username && password === userPassword){
      toast.success('Login success')
      navigate('/profile');
    } else {
      toast.error('password incorrect');
    }
  };


  return (
  <>
    <div className='form__container d-flex flex-column align-items-center justify-content-center'>
      <form>
        <h4 className='form__heading'>User Managment System </h4>
        <hr />
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email Address
          </label>
          <input
            type="email"
            className='form-control'
            value={email}
            onChange={e => setEmail(e.target.value)}
            id='exampleInputEmail1'
            aria-describedby='emailHelp' 
          >
          </input>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleLabelPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <div className='form__signupLink mb-3'>
          <p>
            Don't have an account? <Link to='/'>SignUp !</Link>
          </p>
        </div>
        <button type='submit' className='form__buttom' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  </>
  );
};

export default LoginPage;