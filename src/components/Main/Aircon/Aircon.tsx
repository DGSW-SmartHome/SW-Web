import { useEffect, useState } from 'react';
import { imgData } from './AirconImg';
import { AirconContent, AirconContentTitle, AirconOnOff, AirconTemp, AirconTempControl, AirconWindStrangeth, TempControl, WindImg, SettingAirconOnOff, SettingAirconTempControl } from './Aircon.style';
import airWind0 from '../../../Image/MainPage/airconPage/airWind0.png';

const Aircon = () => {
  const [airconTemp, setAirconTemp] = useState<number>(24);
  const [windStrange, setWindStrange] = useState<number>(1);
  const airconMode = window.localStorage.getItem('controlMode');

  useEffect(() => {
    window.localStorage.setItem('airconTemp', JSON.stringify(airconTemp));
  }, [airconTemp])

  useEffect(() => {
    window.localStorage.setItem('windStrage', JSON.stringify(windStrange));
  }, [windStrange])

  const tempUp = () => {
    setAirconTemp(airconTemp => airconTemp + 1);
  }

  const tempDown = () => {
    setAirconTemp(airconTemp => airconTemp - 1);
  }

  const changeWindStrange = () => {
    if (windStrange === 5) {
      setWindStrange(1);
    } else {
      setWindStrange(windStrange => windStrange + 1);
    }
  }

  return (
    <AirconContent>
      {
        airconMode === 'control' ? 
        <>
          <AirconContentTitle>희망<br />온도</AirconContentTitle>
          <AirconTemp>{airconTemp}℃</AirconTemp>
          {
            imgData.map(({ key, img }) => {
              return(
                <>
                  <AirconWindStrangeth
                    onClick={() => changeWindStrange()}
                  >
                    바람<br/>세기
                  </AirconWindStrangeth>
                  <>
                  {
                    windStrange === key ? (
                      <WindImg src={img} key={key} alt='Aircon-Img' />
                    ) : null
                  }
                  </>
                </>
              )
            })
          }
          <AirconOnOff onClick={() => setWindStrange(1)}>운전<br/>정지</AirconOnOff>
          <AirconTempControl>
            <TempControl onClick={tempUp}>up</TempControl> <br />
            <span>온도</span> <br />
            <TempControl onClick={tempDown}>down</TempControl>
          </AirconTempControl>
        </> : 
        <>
          <AirconContentTitle>희망<br />온도</AirconContentTitle>
          <AirconTemp>24℃</AirconTemp>
          <AirconWindStrangeth>
            바람<br />세기
          </AirconWindStrangeth>
          <WindImg src={airWind0} alt='Aircon-Img' />
          <SettingAirconOnOff>운전<br />정지</SettingAirconOnOff>
          <SettingAirconTempControl>
            <TempControl>up</TempControl> <br />
            <span>온도</span> <br />
            <TempControl>down</TempControl>
          </SettingAirconTempControl>
        </>
      }
    </AirconContent>
  );
};

export default Aircon;