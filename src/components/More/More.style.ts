import styled from "styled-components";

export const LightBackground = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  width: 30vw;
  height: 80vh;
  top: 3vh;
  left: -3vw;
  border-radius: 30px;
  text-align: center;
  float: left;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PlugBackground = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  width: 30vw;
  height: 80vh;
  top: 3vh;
  border-radius: 30px;
  text-align: center;
  float: left;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AirconBackground = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  width: 30vw;
  height: 80vh;
  top: 3vh;
  left: 3vw;
  border-radius: 30px;
  text-align: center;
  float: left;
`;