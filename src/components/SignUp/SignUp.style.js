import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 600px;
  height: 800px;
  text-align: center;
  font-family: 'NotoSansMedium';
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;

  p {
    margin: 0;
  }
`;

export const SignUpTitle = styled.p`
  color: #000;
  padding-top: 50px;
  font-size: 60px;
`;

export const SignUpInput = styled.div`
  position: relative;
  top: 40px;
  margin-bottom: 15px;

  p{
    font-size: 24px;
  }

  .id {
    position: relative;
    right: 0px;
  }
`;

export const SignUpInputName = styled.p`
  position: relative;
  left: -180px;
`;

export const SignUpInputBackground = styled.div`
  display: inline-block;
  position: relative;
  right: 40px;
  width: 350px;
  height: 65px;
  margin-top: 0px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 35px;

  .tag {
    position: relative;
    left: 0px;
  }
`;

export const SignUpInputForm = styled.input`
  position: relative;
  left: 10px;
  width: 250px;
  margin-top: 4%;
  border: 0px;
  font-size: 30px;
  font-family: 'Jua';
  background: rgba(255, 255, 255, 0);

  &::placeholder {
    font-weight: 40;
    color: darkgray;
  }

  &:focus {
    outline: 0px;
  }
`;

export const PasswordError = styled.div`
  position: relative;
  color: red;
  top: 40px;
`;

export const PasswordDuplicateCheck = styled.button`
  position: relative;
  left: 10px;
  font-family: 'DoHyeon', sans-serif;
  font-size: 20px;
  font-weight: 100;
  background: #fff;
  border: 0px;
  border-radius: 5px;
`;

export const SignUpInputID = styled.p`
  position: relative;
  left: -170px;
`;

export const SignUpInputPassword = styled.p`
  position: relative;
  left: -160px;
`;

export const SignUpInputPasswordCheck = styled.p`
  position: relative;
  left: -135px;
`;

export const SignUpSubmitButtom = styled.button`
  position: relative;
  width: 170px;
  height: 70px;
  top: 70px;
  font-size: 30px;
  font-family: 'Jua', sans-serif;
  background: rgba(255, 255, 255, 0.7);
  border: 0px;
  border-radius: 35px;
`;