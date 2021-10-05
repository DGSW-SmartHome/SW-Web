import './SignUp.scss';
import showPassword from '../../Image/signUpPage/showPassword.png';
import React, { useCallback, useState } from 'react';

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

  const [firstPasswordType, setfirstPasswordType] = useState({
    type: 'password',
    visible: false
  });

  const [secondPasswordType, setSecondPasswordType] = useState({
    type: 'password',
    visible: false
  });

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordChk = useCallback((e) => {
    // 비밀번호를 입력할때마다 password를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
    // password state를 사용하기 때문에 password를 넣어준다
  }, [password]);

  const handlePassword = () => {
    setfirstPasswordType(() => {
      if (!setfirstPasswordType.visible) {
        return { type: 'text', visible: true }
      }
      return { type: 'password', visible: false }
    })
  }

  const handleShowPassword = () => {
    setSecondPasswordType(() => {
      if (!setSecondPasswordType.visible) {
        return { type: 'text', visible: true }
      }
      return { type: 'password', visible: false }
    })
  }

  const duplicateCheck = () => {
    alert('Duplicate Check');
  }

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if(password !== passwordCheck) {
      alert('asdf');
      return setPasswordError(true);
    }
    alert('회원가입에 성공하였습니다.');
  }, [password, passwordCheck]);
  
  return (
    <div className='signup-content'>
      <p className='signup-content-title'>Sign Up</p>
      <form onSubmit={onSubmit}>
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
              type={firstPasswordType.type} 
              className='signup-input-tag' 
              placeholder='PASSWORD' 
              name='firstPassword' 
              value={password} 
              required 
              onChange={onChangePassword}
            />
            <img 
              className='show-password-img' 
              onClick={handlePassword} 
              src={showPassword} 
              alt='showPasswordImg' 
            />
          </div>
        </div>
        <div className='signup-input'>
          <p className='signup-input-password-check'>비밀번호 확인</p>
          <div className='signup-input-background'>
            <input 
              type={secondPasswordType.type} 
              className='signup-input-tag' 
              placeholder='PASSWORD' 
              name='secondPassword' 
              value={passwordCheck} 
              required 
              onChange={onChangePasswordChk}
            />
            <img 
              className='show-password-img' 
              onClick={handleShowPassword} 
              src={showPassword} 
              alt='showPasswordImg' 
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