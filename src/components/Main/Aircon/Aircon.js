import { useEffect, useState } from 'react';
import { imgData } from './AirconImg';
import './Aircon.scss';

const Aircon = () => {
  const [airconTemp, setAirconTemp] = useState(() => JSON.parse(window.localStorage.getItem('airconTemp')) ? Number(window.localStorage.getItem('airconTemp').replace(/"/gi, '')) : 24);
  const [windStrange, setWindStrange] = useState(() => JSON.parse(window.localStorage.getItem('windStrage')) ? Number(window.localStorage.getItem('windStrage').replace(/"/gi, '')) : 1);

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
    <div className='aircon-content'>
      <span className='aircon-content-title'>희망<br/>온도</span>
      <div className='aircon-temp'>{ airconTemp }℃</div>
        {
          imgData.map(({ key, img }) => {
            return (
              <>
                <button 
                  onClick={() => changeWindStrange()} 
                  className='aircon-wind-strangth'
                >
                  바람<br/>세기
                </button>
                
                <>
                  {windStrange === key ? (
                    <img src={img} key={key} alt='Aircon-Img' className='wind-img' />
                  ) : null}
                </>
              </>
            )
          })
        }
      <button onClick={() => setWindStrange(1)} className='aircon-onoff'>운전<br/>정지</button>
      <div className='aircon-temp-control'>
        <button className='temp-up temp-control' onClick={tempUp}>up</button> <br />
        <span>온도</span> <br />
        <button className='temp-down temp-control' onClick={tempDown}>down</button>
      </div>
    </div>
  );
};

export default Aircon;