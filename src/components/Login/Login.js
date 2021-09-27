import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className='login-content'>
      <div className='login-content-title'>Log In</div>
      <form>
        <div className='input-background'>
          <input type='text' className='input-tag' placeholder='ID' />
        </div>
        <div className='password input-background'>
          <input type='password' className='input-tag' placeholder='PASSWORD' />
        </div>
        <br/>
        <Link to='/signup' className='signUp'>아직 회원가입을 하지 않으셨나요?</Link> <br/>
        <button type='submit' className='login-button'>Log in</button>
      </form>
    </div>
  );
};

export default Login;