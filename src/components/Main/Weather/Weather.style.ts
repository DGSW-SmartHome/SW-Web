import styled from "styled-components";

export const WeatherContainer = styled.div`
  font-family: 'NotoSansMedium', sans-serif;
  position: absolute;
  width: 32vw;
  height: 20.5vh;
  background: rgba(0, 0, 0, 0.4);
  top: 17.8vh;
  left: 1vw;
  border-radius: 30px;
`;

export const WeatherIcon = styled.img`
  position: absolute;
  width: 6vw;
  left: 1.5vw;
  top: 2.5vh;
`;

export const NotSelectArea = styled.div`
  position: absolute;
  font-size: 3vmin;
  left: 12vmin;
  right: 10vmin;
  top: 8.5vh;
`;

export const WeatherPlace = styled.p`
  position: absolute;
  top: 11.2vh;
  left: 1.5vw;
  font-size: 2.6vh;
  color: white;
`;

export const WeatherTemp = styled.p`
  position: absolute;
  left: 25vw;
  font-size: 5vh;
  color: white;
`;