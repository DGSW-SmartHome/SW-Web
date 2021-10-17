import styled from "styled-components";

export const LightBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 30vw;
  height: 80vh;
  top: 10vh;
  left: -3vw;
  border-radius: 30px;
  text-align: center;
  float: left;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LightItemContent = styled.div`
  position: relative;
  left: 2vw;
  top: 5vh;
  width: 26vw;
  height: 12vh;
  margin-bottom: 2vh;
  background: rgba(255, 255, 255, 0.3);
`;

export const LightItemImage = styled.img`
  position: relative;
  width: 3.5vw;
  top: 1.5vh;
  float: left;
  margin-left: 1vw;
`;

export const LightItemName = styled.div`
  position: relative;
  float: left;
  left: 2vw;
  font-size: 3.5vmin;
  top: 4vh;
`;

export const LightItemDeleteImg = styled.img`
  position: relative;
  float: right;
  width: 5vmin;
  top: 3vh;
  right: 2vmin;
`;