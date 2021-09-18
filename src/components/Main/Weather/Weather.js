import '../Weather/Weather.scss';
import Cloud from '../../../Image/weatherPage/cloud.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [place, setPlace] = useState('');
  const [temp, setTemp] = useState('25');

  const RestAPIKey = '1370e85596600eecc55f090db5a3d594'
  const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
      "Authoerization": "KakaoAK " + RestAPIKey,
      "Access-Control-Allow-Origin": "*",
    }
  });

  useEffect(() => {
    console.log(place);
    getWeather();
  }, [place]);

  const koreanToEnglish = () => {
    Kakao.get('/v2/translation/translate?src_lang=kr&target_lang=en&query=' + place)
      .then((res) => {
        console.log(res);
      })
  };

  const getWeather = () => {
    console.log(place);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=c2a3abfbf70fb1c617186ea9b096b1d8&units=metric`)
    .then((Response) => {
      console.log(Response.data['main']['temp']);
      setTemp(Math.round(Response.data['main']['temp']));
    }).catch((Error) => {
      console.log(Error);
    })
  }

  return (
    <div className='weather-content'>
      <img className='cloud-icon' src={Cloud} />
      <p className='weather-place'>{place}</p>
      <p className='weather-temp'>{temp}℃</p>
      <button
        type='submit'
        className='place-edit'
        onClick={() => {
          setPlace(prompt('수정할 지역을 입력하세요. (시 단위로 입력해주세요.)'));
        }}
      >
        지역 수정
      </button>
    </div>
  );
};

export default Weather;