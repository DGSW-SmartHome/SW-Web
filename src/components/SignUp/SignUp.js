import './SignUp.scss';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { baseURL, headers } from '../../API/config';

const SignUp = () => {
  const useInput = (inintValue = null) => {
    const [value, setter] = useState(inintValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  }

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
        window.location.replace('/login');
      }).catch(res => {
        alert('이미 존재하는 유저입니다.');
      })
    }
  }, [id, name, password, passwordCheck, checkUserName]);
  
  return (
    <div className='signup-content'>
      <p className='signup-content-title'>Sign Up</p>
      <form onSubmit={signUP}>
        <div className='signup-input'>
          <p className='signup-input-name'>이름</p>
          <div className='signup-input-background'>
            <input 
              type='text' 
              className='signup-input-tag tag' 
              placeholder='이름' 
              name='name' 
              value={name} 
              required 
              onChange={onChangeName}
            />
          </div>
        </div>
        <div className='signup-input'>
          <p className='signup-input-id'>아이디</p>
          <div className='signup-input-background id'>
            <input 
              type='text' 
              className='signup-input-tag tag' 
              placeholder='ID' 
              name='id' 
              value={id}
              required 
              onChange={onChangeId}
            />
          </div>
          <button 
            type='button' 
            className='duplicate-check'
            onClick={duplicateCheck}
          >
            중복 확인
          </button>
        </div>
        <div className='signup-input'>
          <p className='signup-input-password'>비밀번호</p>
          <div className='signup-input-background'>
            <input 
              type='password' 
              className='signup-input-tag' 
              placeholder='PASSWORD' 
              name='firstPassword' 
              value={password} 
              required 
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className='signup-input'>
          <p className='signup-input-password-check'>비밀번호 확인</p>
          <div className='signup-input-background'>
            <input 
              type='password' 
              className='signup-input-tag' 
              placeholder='PASSWORD' 
              name='secondPassword' 
              value={passwordCheck} 
              required 
              onChange={onChangePasswordChk}
            />
          </div>
        </div>
        <div>
          {passwordError && <div style={ passwordErrorStyle }>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <button 
          type='submit' 
          className='signup-button'
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

const passwordErrorStyle = {
  color: 'red',
  position: 'relative',
  top: '40px'
}

export default SignUp;