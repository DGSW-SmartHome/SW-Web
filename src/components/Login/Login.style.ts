import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 600px;
  height: 800px;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;

  .br {
    margin-bottom: 15px;
  }
`;

export const LoginTitle = styled.div`
  color: #000;
  padding-top: 73px;
  font-size: 60px;
`;

export const LoginInputBackground = styled.div`
  display: inline-block;
  width: 400px;
  height: 70px;
  margin-top: 88px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 35px;
`;

export const LoginInputTag = styled.input`
  margin-top: 1vh;
  margin-left: 2vw;
  width: 18vw;
  border: 0px;
  font-size: 30px;
  background: rgba(255, 255, 255, 0);
  font-family: 'NotoSansMedium';

  &::placeholder {
    font-weight: 40;
    color: darkgray;
  }

  &:focus {
    outline: 0px;
  }
`;

export const LinkToSignUp = styled.a`
  text-decoration: none;
  color: gray;
`;

export const LoginButton = styled.button`
  width: 170px;
  height: 75px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 35px;
  border: 0px;
  margin-top: 28%;
  font-size: 30px;
`;