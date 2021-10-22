import axios from 'axios';
import { useCallback } from 'react';
import { SmartHomeURL, headers } from '../../API/SmartHome/SmartHomeConfig';
import useInput from '../../Hooks/useInput';
import {
  LoginContainer,
  LoginTitle,
  LoginInputBackground,
  LoginInputTag,
  LinkToSignUp,
  LoginButton
} from './Login.style';

const MainLogin = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const signIN = useCallback((e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('id', id);
    data.append('password', password);

    axios.post(SmartHomeURL + '/v1/user/manage/signin/', data, headers)
    .then(res => {
      sessionStorage.setItem('token', res.data.data.token);
      window.location.replace('/');
    }).catch(error => {
      console.log(error);
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    })
  }, [id, password]);
  
  return (
    <LoginContainer>
      <LoginTitle>Log In</LoginTitle>
      <form onSubmit={signIN}>
        <LoginInputBackground>
          <LoginInputTag 
            type='text' 
            className='input-tag' 
            placeholder='ID' 
            name='id' 
            value={id} 
            required 
            onChange={onChangeId}
          />
        </LoginInputBackground>
        <LoginInputBackground className='br'>
          <LoginInputTag 
            type='password' 
            className='input-tag' 
            placeholder='PASSWORD' 
            name='password' 
            value={password}
            required 
            onChange={onChangePassword} 
          />
        </LoginInputBackground>
        <br />
        <LinkToSignUp href='/signup'>아직 회원가입을 하지 않으셨나요?</LinkToSignUp> <br/>
        <LoginButton type='submit'>Log In</LoginButton>
      </form>
    </LoginContainer>
  );
};

export default MainLogin;