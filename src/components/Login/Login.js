import './Login.scss';

const Login = () => {
  return (
    <div className='login-content'>
      <div className='login-content-title'>Log In</div>
      <form>
        <div className='input-background'>
          <input type='text' className='input-tag' placeholder='ID' />
        </div>
        <div className='password input-background br'>
          <input type='password' className='input-tag' placeholder='PASSWORD' />
        </div>
        <br />
        <a href='/signup' className='signUp'>아직 회원가입을 하지 않으셨나요?</a> <br/>
        <button type='submit' className='login-button'>Log In</button>
      </form>
    </div>
  );
};

export default Login;