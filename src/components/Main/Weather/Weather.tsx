import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { API_KEY, API_TYPE, WeatherBaseURL } from 'src/api/Weather/Weather.config';
import { WeatherArea, WeatherImg, WeatherState, WeatherTempState } from 'src/Store/Weather';
import { UserHeaders } from 'src/api/SmartHome/SmartHome.config';

import Swal from 'sweetalert2';
import axios from 'axios';

import cloudy from 'src/assets/Image/MainPage/weatherPage/cloudy.png';
import manyCloudy from 'src/assets/Image/MainPage/weatherPage/manyCloudy.png';
import foggy from 'src/assets/Image/MainPage/weatherPage/foggy.png';
import sun from 'src/assets/Image/MainPage/weatherPage/sun.png';

import {
  WeatherContainer,
  WeatherIcon,
  NotSelectArea,
  WeatherPlace,
  WeatherTemp
} from './Weather.style';

const Weather = ({ history }) => {
  const USER_TOKEN: string | null = sessionStorage.getItem('token');
  const [area, setArea] = useRecoilState(WeatherArea);
  const [temp, setTemp] = useRecoilState(WeatherTempState);
  const [weather, setWeather] = useRecoilState(WeatherState);
  const [weatherImg, setWeatherImg] = useRecoilState(WeatherImg);

  const GetWeather = async () => {
    await axios.get ('/v1/user/data/weather/', UserHeaders)
    .then((res) => {
      const response = res.data.data;
      setArea(response.city);
      setTemp(response.weather);
      setWeather(response.temperature);
    })
  }
  useEffect(() => {
    if (USER_TOKEN) {
      GetWeather();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [USER_TOKEN]);

  const PostWeather = async (area, temp, weather) => {
    const Data = new URLSearchParams();
    Data.append('city', area);
    Data.append('weather', weather);
    Data.append('temperature', temp);

    await axios.post('/v1/user/data/weather/', Data, UserHeaders)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    if (USER_TOKEN && area !== '지역이 입력되지 않았습니다.') {
      PostWeather(area, temp, weather);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area])

  useEffect(() => {
    const featchData = async () => {
      const today = new Date();
      const year = today.getFullYear();
      const date = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      const hour = ('0' + (today.getHours() - 2)).slice(-2);

      await axios.get(`${WeatherBaseURL}?key=${API_KEY}&type=${API_TYPE}&sdate=${year}${date}${day}&stdHour=${hour}`)
      .then((res) => {
        res.data.list.map(items => {
          const value = items.addr.substr(0, area.length);
          if (value === area) {
            setWeather(items.weatherContents);
            setTemp(parseInt(items.tempValue) + '℃');
          }
          return <></>;
        })
      }).catch((Error) => {
        console.log(Error);
      });
    }

    if (area !== '지역이 입력되지 않았습니다.') {
      featchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area]);

  useEffect(() => {
    if (weather === '구름많음') {
      setWeatherImg(manyCloudy);
    } else if (weather === '구름조금') {
      setWeatherImg(cloudy);
    } else if (weather === '맑음') {
      setWeatherImg(sun);
    } else if (weather === '연무') {
      setWeatherImg(foggy);
    } else if (weather === '안개끝') {
      setWeatherImg(foggy);
    }
    console.log(weatherImg);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);

  const editPlace = useCallback(async() => {
    if (!USER_TOKEN) {
      Swal.fire({
        icon: 'error',
        title: '로그인이 필요한 서비스입니다.',
        text: '로그인을 먼저 해주세요.'
      }).then((result) => {
        if (result.isConfirmed === true) {
          history.push('/mainlogin');
        }
      })
    } else {
      const { value: place } = await Swal.fire({
        title: '지역을 입력해주세요.',
        text: '(**시 **군 **읍/면/동)',
        input: 'text',
        inputPlaceholder: 'ex) 대구광역시 달성군 현풍면'
      })
      if (!place) {
        Swal.fire({
          icon: 'error',
          title: '지역이 입력되지 않았습니다.',
          text: '지역을 입력해주세요.'
        })
        setArea('지역이 입력되지 않았습니다.');
        setTemp(1000);
        setWeather(1);
      } else {
        setArea(place);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setArea, setWeather, setTemp, USER_TOKEN, history]);

  return (
    <WeatherContainer onClick={editPlace}>
      { weather !== 1 ? <WeatherIcon src={weatherImg} alt='날씨' /> : null }
      { area === '지역이 입력되지 않았습니다.' ? <NotSelectArea>{area}</NotSelectArea> : <WeatherPlace>{area}</WeatherPlace> }
      { temp !== 1000 ? <WeatherTemp>{temp}</WeatherTemp> : null }
    </WeatherContainer>
  );
};

export default Weather;