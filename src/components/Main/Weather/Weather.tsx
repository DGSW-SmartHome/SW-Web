import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { WeatherImage } from 'src/API/Weather/WeatherConfig';
import { WeatherArea, WeatherState, WeatherTempState } from 'src/Store/Weather';

import {
  WeatherContainer,
  WeatherIcon,
  NotSelectArea,
  WeatherPlace,
  WeatherTemp
} from './Weather.style';

const Weather = () => {
  const [area, setArea] = useRecoilState(WeatherArea);
  const [temp, setTemp] = useRecoilState(WeatherTempState);
  const [weather, setWeather] = useRecoilState(WeatherState);

  useEffect(() => {
    const featchData = async () => {
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${area}&appid=c2a3abfbf70fb1c617186ea9b096b1d8&units=metric`)
      .then((Response) => {
        setTemp(Math.round(Response.data['main']['temp']) + '℃');
        setWeather(Response.data['weather'][0]['icon']);
      }).catch((Error) => {
        console.log(Error);
      });
    }

    if (area !== '지역이 입력되지 않았습니다.') {
      featchData();
    }
  }, [area, temp, weather, setTemp, setWeather]);

  const editPlace = useCallback(() => {
    const place = prompt('설정할 지역을 입력하세요. (시 단위로 입력해주세요.');
    if (!place) {
      alert('지역을 입력해 주세요.');
      setArea('지역이 입력되지 않았습니다.');
      setTemp(1000);
      setWeather(1);
    } else {
      setArea(place);
    }
  }, [setArea, setWeather, setTemp]);

  return (
    <WeatherContainer onClick={editPlace}>
      {
        weather !== 1 ? <WeatherIcon src={`${WeatherImage}${weather}@2x.png`} alt='날씨' /> : null
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