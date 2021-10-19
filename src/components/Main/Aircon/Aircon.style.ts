import styled from 'styled-components';

export const AirconContent = styled.div`
  position: absolute;
  width: 32vw;
  height: 31vh;
  background: rgba(0, 0, 0, 0.4);
  top: 40.3vh;
  left: 1vw;
  border-radius: 30px;

  button {
    font-family: 'NotoSansMedium', sans-serif;
  }
`;

export const AirconContentTitle = styled.span`
  position: absolute;
  font-size: 3.5vh;
  top: 4vh;
  left: 4vw;
`;

export const AirconTemp = styled.div`
  position: absolute;
  font-size: 6vh;
  top: 4.4vh;
  left: 9vw;
`;

export const AirconTempControl = styled.div`
  position: absolute;
  top: 5vh;
  left: 25.5vw;
  text-align: center;
  border-radius: 10px;
  border: 2px solid white;
  font-size: 3vh;
  width: 5vw;
  height: 20vh;
  background: linear-gradient(180deg, #FF7A7D 0%, #7EA2FF 100%);
`;

export const TempControl = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 41.5%;
  opacity: 0;
`;

export const AirconOnOff = styled.button`
  position: absolute;
  border-radius: 10px;
  width: 5vw;
  height: 9vh;
  top: 5vh;
  left: 19vw;
  font-size: 2.5vh;
  color: #FFA7A7;
  background-color: white;
  border: 2.5px solid #FFA7A7;
`;

export const AirconWindStrangeth = styled.button`
  position: absolute;
  border-radius: 10px;
  width: 5vw;
  height: 9vh;
  top: 16vh;
  left: 19vw;
  font-size: 2.5vh;
  color: white;
  background-color: #DBDBDB;
  border: 2.5px solid white;
`;

export const WindImg = styled.img`
  position: absolute;
  top: 14vh;
  left: 3.5vw;
  width: 12.5vw;
`;

export const SettingAirconOnOff = styled.button`
  position: absolute;
  border-radius: 10px;
  width: 5vw;
  height: 9vh;
  top: 5vh;
  left: 19vw;
  font-size: 2.5vh;
  color: #FFF;
  background-color: #DBDBDB;
  border: 2.5px solid #FFF;
`;

export const SettingAirconTempControl = styled.div`
  position: absolute;
  top: 5vh;
  left: 25.5vw;
  text-align: center;
  border-radius: 10px;
  border: 2px solid white;
  font-size: 3vh;
  width: 5vw;
  height: 20vh;
  background: #DBDBDB;
`;