import '../Weather/Weather.scss';
import Cloud from '../../../Image/weatherPage/cloud.svg';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// import { apiHeader } from './config';

const Weather = () => {
  const [area, setArea] = useState(() => JSON.parse(window.localStorage.getItem('place')) ? window.localStorage.getItem('place').replace(/"/gi, '') : '지역이 입력되지 않았습니다.');
  const [temp, setTemp] = useState(() => JSON.parse(window.localStorage.getItem('temp')));


  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${area}&appid=c2a3abfbf70fb1c617186ea9b096b1d8&units=metric`)
      .then((Response) => {
        setTemp(Math.round(Response.data['main']['temp']) + '℃');
        window.localStorage.setItem('place', JSON.stringify(area));
        window.localStorage.setItem('temp', JSON.stringify(Math.round(Response.data['main']['temp']) + '℃'));
      }).catch((Error) => {
        console.log(Error);
      });
  }, [area]);

  const editPlace = useCallback(() => {
    const place = prompt('설정할 지역을 입력하세요. (시 단위로 입력해주세요.');
    setArea(place);
    console.log(area);
  }, [area]);

  // const koreanToEnglish = () => {
  //   axios.post(
  //     "https://openapi.naver.com/v1/papago/n2mt", { source: "ko", target: "en", text: place }, apiHeader
  //   ).then((Response) => {
  //     console.log(Response);
  //   }).catch((Error) => {
  //     console.log(Error);
  //   });
  // };

  return (
    <div className='weather-content'>
      <img className='weather-icon' src={Cloud} alt='날씨' />
      <p className='weather-place'>{area}</p>
      <p className='weather-temp'>{temp}</p>
      <div className='edit-place'>
        <button
          type='submit'
          onClick={editPlace}
        >
          지역 설정
        </button>
      </div>
    </div>
  );
};

export default Weather;