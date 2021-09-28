import { useEffect, useState } from 'react';
import './Aircon.scss';

const Aircon = () => {
  const [airconTemp, setAirconTemp] = useState(() => JSON.parse(window.localStorage.getItem('airconTemp')) ? Number(window.localStorage.getItem('airconTemp').replace(/"/gi, '')) : 24);
  useEffect(() => {
    window.localStorage.setItem('airconTemp', JSON.stringify(airconTemp));
  }, [airconTemp])

  const tempUp = () => {
    setAirconTemp(airconTemp => airconTemp + 1);
    
  }

  const tempDown = () => {
    setAirconTemp(airconTemp => airconTemp - 1);
  }

  return (
    <div className='aircon-content'>
      <span className='aircon-content-title'>희망<br/>온도</span>
      <div className='aircon-temp'>{ airconTemp }℃</div>
      <div className='aircon-temp-control'>
        <button className='temp-up temp-control' onClick={tempUp}>up</button> <br />
        <span>온도</span> <br />
        <button className='temp-down temp-control' onClick={tempDown}>down</button>
      </div>
      <button className='aircon-onoff'>운전<br/>정지</button>
      <button className='aircon-wind-strangth'>바람<br/>세기</button>
    </div>
  );
};

export default Aircon;