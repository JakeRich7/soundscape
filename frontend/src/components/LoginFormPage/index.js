import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/discover" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    return;
  }

  return (
    <div className='login-form-div'>
      <form className='login-form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className='login-username-label'>
          <div>Email or Username</div>
        </label>
        <input
          className='login-username'
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <label className='login-password-label'>
          <div>Password</div>
        </label>
        <input
          className='login-password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='login-button-submitter' type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginFormPage;
