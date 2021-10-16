import axios from 'axios';
import { useCallback, useState } from 'react';
import { baseURL, headers } from '../../API/config';
import './Login.scss';

const Login = () => {
  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  }

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] =useInput('');

  const signIN = useCallback((e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('id', id);
    data.append('password', password);

    axios.post(baseURL + '/v1/user/manage/signin/', data, headers)
    .then(res => {
      window.location.replace('/lock');
    }).catch(error => {
      console.log(error);
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    })
  }, [id, password]);

  return (
    <div className='login-content'>
      <div className='login-content-title'>Log In</div>
      <form onSubmit={signIN}>
        <div className='input-background'>
          <input 
            type='text' 
            className='input-tag' 
            placeholder='ID' 
            name='id' 
            value={id} 
            required 
            onChange={onChangeId}
          />
        </div>
        <div className='password input-background br'>
          <input 
            type='password' 
            className='input-tag' 
            placeholder='PASSWORD' 
            name='password' 
            value={password}
            required 
            onChange={onChangePassword} 
          />
        </div>
        <br />
        <a href='/signup' className='signUp'>아직 회원가입을 하지 않으셨나요?</a> <br/>
        <button type='submit' className='login-button'>Log In</button>
      </form>
    </div>
  );
};

export default Login;