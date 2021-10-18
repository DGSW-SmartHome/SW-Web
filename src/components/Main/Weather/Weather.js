import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
  WeatherContainer,
  WeatherIcon,
  NotSelectArea,
  WeatherPlace,
  WeatherTemp
} from './Weather.style';

const Weather = () => {
  const [area, setArea] = useState(() => window.localStorage.getItem('place') ? window.localStorage.getItem('place').replace(/"/gi, '') : '지역이 입력되지 않았습니다.');
  const [temp, setTemp] = useState(() => window.localStorage.getItem('temp') ? window.localStorage.getItem('temp').replace(/"/gi, '') : 1000);
  const [weather, setWeather] = useState(() => window.localStorage.getItem('weather') ? window.localStorage.getItem('weather').replace(/"/gi, '') : 1);

  useEffect(() => {
    const featchData = async () => {
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${area}&appid=c2a3abfbf70fb1c617186ea9b096b1d8&units=metric`)
      .then((Response) => {
        setTemp(Math.round(Response.data['main']['temp']) + '℃');
        setWeather(Response.data['weather'][0]['icon']);
        window.localStorage.setItem('place', area);
        window.localStorage.setItem('temp', JSON.stringify(Math.round(Response.data['main']['temp']) + '℃'));
        window.localStorage.setItem('weather', weather);
      }).catch((Error) => {
        console.log(Error);
      });
    }

    if (area !== '지역이 입력되지 않았습니다.') {
      featchData();
      console.log(area);
    }
  }, [area, temp, weather]);

  const editPlace = useCallback(() => {
    const place = prompt('설정할 지역을 입력하세요. (시 단위로 입력해주세요.');
    if (!place) {
      alert('지역을 입력해 주세요.');
      setArea('지역이 입력되지 않았습니다.');
      setTemp(1000);
      setWeather(1);
      window.localStorage.removeItem('place');
      window.localStorage.removeItem('temp');
      window.localStorage.removeItem('weather');
    } else {
      setArea(place);
    }
  }, []);

  return (
    <WeatherContainer onClick={editPlace}>
      {
        weather !== 1 ? <WeatherIcon src={`http://openweathermap.org/img/wn/${weather}@2x.png`} alt='날씨' /> : null
      }
      {
        area === '지역이 입력되지 않았습니다.' ? <NotSelectArea>{area}</NotSelectArea> : <WeatherPlace>{area}</WeatherPlace>
      }
      {
        temp !== 1000 ? <WeatherTemp>{temp}</WeatherTemp> : null
      }
    </WeatherContainer>
  );
};

export default Weather;