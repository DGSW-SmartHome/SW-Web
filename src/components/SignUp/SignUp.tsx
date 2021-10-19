import { useCallback, useState } from 'react';
import axios from 'axios';
import { baseURL, headers } from '../../API/MainConfig';
import useInput from '../../Hooks/useInput';
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

const SignUp = ({ history }) => {
  const [id, onChangeId] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [checkUserName, setCheckUserName] = useState(false);

  const onChangePasswordChk = useCallback((e) => {
    // 비밀번호를 입력할때마다 password를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
    // password state를 사용하기 때문에 password를 넣어준다
  }, [password]);

  const duplicateCheck = useCallback((e) => {
    e.preventDefault();
    setCheckUserName(true);
    const data = new URLSearchParams();
    data.append('id', id);

    axios.post(baseURL + '/v1/user/manage/signup/checkusername/', data, headers)
      .then(res => {
        console.log(res);
        alert('사용가능한 아이디입니다.');
      }).catch(error => {
        console.log(error.response.data['detail']);
        alert('이미 존재하는 아이디입니다.');
      })
  }, [id])

  const signUP = useCallback((e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('id', id);
    data.append('password', password);
    data.append('username', name);

    if(password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return setPasswordError(true);
    }

    if (checkUserName === false) {
      alert('아이디 중복 확인을 먼저 해주세요.');
    } else {
      axios.post(baseURL + '/v1/user/manage/signup/', data, headers)
      .then(res => {
        alert('아이디 생성을 성공하였습니다.');
        history.push('/login');
      }).catch(res => {
        alert('이미 존재하는 유저입니다.');
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