import { useCallback, useState } from 'react';
import { SmartHomeURL, headers } from '../../api/SmartHome/SmartHome.config';

import useInput from '../../Hooks/useInput';
import axios from 'axios';

import {
  SignUpContainer,
  SignUpTitle,
  SignUpInput,
  SignUpInputName,
  SignUpInputBackground,
  SignUpInputForm,
  PasswordError,
  PasswordDuplicateCheck,
  SignUpInputID,
  SignUpInputPassword,
  SignUpInputPasswordCheck,
  SignUpSubmitButtom
} from './SignUp.style';

import { SwalCustomText, SwalServerError } from 'src/Utils/SweetAlert/Error';
import { SwalIDCheck } from 'src/Utils/SweetAlert/Success';

const SignUp = ({ history }) => {
  const [id, onChangeId] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [checkUserName, setCheckUserName] = useState<boolean>(false);

  const onChangePasswordChk = useCallback((e) => {
    // 비밀번호를 입력할때마다 password를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
    // password state를 사용하기 때문에 password를 넣어준다
  }, [password]);

  const duplicateCheck = useCallback((e) => {
    e.preventDefault();
    
    if (id !== '') {
      setCheckUserName(true);
      const data = new URLSearchParams();
      data.append('id', id);

      axios.post(SmartHomeURL + '/v1/user/manage/signup/checkusername/', data, headers)
        .then(res => {
          SwalIDCheck();
        }).catch(error => {
          if (error.response.status === 400) SwalCustomText('이미 존재하는 아이디입니다.');
          else if (error.response.status >= 500) SwalServerError();
        })
    } else {
      SwalCustomText('아이디를 입력하지 않았습니다.');
    }
  }, [id])

  const signUP = useCallback((e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('id', id);
    data.append('password', password);
    data.append('username', name);

    if(password !== passwordCheck) {
      SwalCustomText('비밀번호가 일치하지 않습니다.');
      return setPasswordError(true);
    }

    if (checkUserName === false) {
      SwalCustomText('아이디 중복 확인을 먼저 해주세요.');
    } else {
      axios.post(SmartHomeURL + '/v1/user/manage/signup/', data, headers)
      .then(res => {
        SwalCustomText('아이디 생성을 성공하였습니다.');
        history.push('/');
      }).catch(error => {
        if (error.response.detail === 'Some Values are missing') SwalCustomText('일부 값이 전달되지 않았습니다.');
        else if (error.response.detail === 'User Already Exists') SwalCustomText('이미 회원가입이 되어있습니다.');
      })
    }
  }, [id, name, password, passwordCheck, checkUserName, history]);
  
  return (
    <SignUpContainer>
      <SignUpTitle>Sign Up</SignUpTitle>
      <form onSubmit={signUP}>
        <SignUpInput>
          <SignUpInputName>이름</SignUpInputName>
          <SignUpInputBackground>
            <SignUpInputForm 
              type='text' 
              className='tag' 
              placeholder='이름' 
              name='name' 
              value={name} 
              required 
              onChange={onChangeName}
            />
          </SignUpInputBackground>
        </SignUpInput>
        <SignUpInput>
          <SignUpInputID>아이디</SignUpInputID>
          <SignUpInputBackground className='id'>
            <SignUpInputForm 
              type='text' 
              className='tag' 
              placeholder='ID' 
              name='id' 
              value={id}
              required 
              onChange={onChangeId}
            />
          </SignUpInputBackground>
          <PasswordDuplicateCheck 
            type='button' 
            onClick={duplicateCheck}
          >
            중복 확인
          </PasswordDuplicateCheck>
        </SignUpInput>
        <SignUpInput>
          <SignUpInputPassword>비밀번호</SignUpInputPassword>
          <SignUpInputBackground>
            <SignUpInputForm 
              type='password' 
              placeholder='PASSWORD' 
              name='firstPassword' 
              value={password} 
              required 
              onChange={onChangePassword}
            />
          </SignUpInputBackground>
        </SignUpInput>
        <SignUpInput>
          <SignUpInputPasswordCheck>비밀번호 확인</SignUpInputPasswordCheck>
          <SignUpInputBackground>
            <SignUpInputForm 
              type='password' 
              placeholder='PASSWORD' 
              name='secondPassword' 
              value={passwordCheck} 
              required 
              onChange={onChangePasswordChk}
            />
          </SignUpInputBackground>
        </SignUpInput>
        <>
          {passwordError && <PasswordError>비밀번호가 일치하지 않습니다.</PasswordError>}
        </>
        <SignUpSubmitButtom 
          type='submit' 
          className='signup-button'
        >
          회원가입
        </SignUpSubmitButtom>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;