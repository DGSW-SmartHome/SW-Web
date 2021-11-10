import { useCallback, useEffect } from 'react';
import { SmartHomeURL, headers } from '../../api/SmartHome/SmartHome.config';
import { SwalDiscordance, SwalErrorCustomText, SwalServerError, SwalUnauthorized } from 'src/Utils/SweetAlert/Error';

import axios from 'axios';
import useInput from '../../Hooks/useInput';

import {
  LoginContainer,
  LoginTitle,
  LoginInputBackground,
  LoginInputTag,
  LinkToSignUp,
  LoginButton
} from './Login.style';

const Login = ({ history }) => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const signIN = useCallback((e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('id', id);
    data.append('password', password);

    axios.post(SmartHomeURL + '/v1/user/manage/signin/', data, headers)
    .then(res => {
      sessionStorage.setItem('accessToken', res.data.data.token);
      history.push('/lock');
    }).catch(error => {
      if (error.response.status === 400) SwalDiscordance();
      else if (error.response.status === 401) SwalUnauthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, password]);

  useEffect(() => {
    SwalErrorCustomText('아직 구현되지 않았어요!');
    history.push('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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

export default Login;