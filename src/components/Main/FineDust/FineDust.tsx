import { useEffect, useState } from 'react';
import { baseURL, ServiceKey, ReturnType } from '../../../api/FineDust/FineDust.config';
import { UserHeaders } from 'src/api/SmartHome/SmartHome.config';
import { FineDustState, FirstCityName, LastCityName, FineDustValue } from '../../../Store/Finedust';
import { useRecoilState } from 'recoil';

import axios from 'axios';
import Swal from 'sweetalert2';

import HouseFineDustGood from '../../../assets/Image/MainPage/finedustPage/dustHouseGood.png';
import HouseFineDustSoso from '../../../assets/Image/MainPage/finedustPage/dustHouseSoso.png';
import HouseFineDustBad from '../../../assets/Image/MainPage/finedustPage/dustHouseBad.png';
import HouseFineDustVeryBad from '../../../assets/Image/MainPage/finedustPage/dustHouseVeryBad.png';

import {
  FineDustValueContent,
  FineDustPlaceContent,
  NotSelectCity,
  FineDustContainer,
  ExternalFineDust,
  FineDustImage
} from './FineDust.style';

const FineDust = ({ history }) => {
  const USER_TOKEN = sessionStorage.getItem('token');

  const [firstCityName, setFirstCityName] = useRecoilState(FirstCityName);            // 입력된 지역의 앞 부분
  const [lastCityName, setLastCityName] = useRecoilState(LastCityName);               // 입력된 지역의 뒷 부분
  const [fineDustValue, setFineDustValue] = useRecoilState(FineDustValue);            // 미세먼지 농도
  const [fineDust, setFineDust] = useRecoilState(FineDustState);                      // 미세먼지 상태 (좋음, 보통, 나쁨, 매우 나쁨)
  
  const [fineDustImg, setFineDustImg] = useState<string>('');                         // 미세먼지 이미지
  const [replaceArea, setReplaceArea] = useState<string>('');                         // 새로 저장한 지역 이름

  // 미세먼지 API 호출
  const getFineDustValue = async () => {
    await axios.get(`${baseURL}?serviceKey=${ServiceKey}&returnType=${ReturnType}&sidoName=${replaceArea}&numOfRows=100`)
      .then((response) => {
        if (response.data.response.body.totalCount === 0) {
          Swal.fire({
            icon: 'error',
            title:'미세먼지 측정소가 없습니다.',
            text: '지역을 다시 입력해주세요.'
          })
          NotFineDustStation();
        } else {
          response && response.data.response.body.items.map(items => {
            if (items['stationName'] === lastCityName) setFineDustValue(items['pm10Value']);
            return <></>;
          })
        }
      })
  };

  // 지역 입력에 아무것도 하지 않았을 경우
  const NotFineDustStation = () => {
    setFirstCityName('지역이 설정되지 않았습니다.');
    setLastCityName('');
    setFineDustValue(999);
    setFineDust(999);
  };

  // 미세먼지 값 저장 API 호출
  const PostFineDust = async (firstCityName, lastCityName, fineDustValue, fineDust) => {
    const Data = new URLSearchParams();
    Data.append('firstCityName', firstCityName);
    Data.append('lastCityName', lastCityName);
    Data.append('fineDustValue', fineDustValue);
    Data.append('fineDust', fineDust);
    await axios.post('/v1/user/data/finedust/', Data, UserHeaders)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error.response);
      })
  };
  // 지역이 변경 되었을 때 서버에 값 저장
  useEffect(() => {
    if (USER_TOKEN && firstCityName !== '지역이 설정되지 않았습니다.') {
      PostFineDust(firstCityName, lastCityName, fineDustValue, fineDust);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fineDust]);

  // 미세먼지 값 불러오기 API 호출
  const GetFineDust = async () => {
    await axios.get('/v1/user/data/finedust', UserHeaders)
    .then((res) => {
      const response = res.data.data;
      setFirstCityName(response.firstCityName);
      setLastCityName(response.lastCityName);
      setFineDustValue(response.fineDustValue);
      setFineDust(response.fineDust);
    })
  }
  // 로그인 토큰이 존재하면 서버에서 값 불러오기
  useEffect(() => {
    if (USER_TOKEN) {
      GetFineDust();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [USER_TOKEN]);

  // 미세먼지 값을 가져올 지역 문자열 가공
  useEffect(() => {
    const formatData: string = '' + firstCityName;
    if (formatData.length === 7) setReplaceArea(formatData.substring(0, formatData.length - 5));
    else if (formatData.length === 6) setReplaceArea(formatData.substring(0, formatData.length - 4));
    else if (formatData.length === 5) setReplaceArea(formatData.substring(0, formatData.length - 3));
    else if (formatData.length === 4) setReplaceArea(formatData.substring(0, formatData.length - 2));
    else if (formatData.length === 3) setReplaceArea(formatData.substring(0, formatData.length - 1));
  }, [firstCityName]);

  // 지역 이름이 바뀌었을 때 실행
  useEffect(() => {
    if (firstCityName !== '지역이 설정되지 않았습니다.') {
      getFineDustValue();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replaceArea]);

  // 미세먼지 값이 바뀌었을 때 실행
  useEffect(() => {
    if (fineDustValue <= 30) {
      setFineDustImg(HouseFineDustGood);
      setFineDust('좋음');
    } else if (fineDustValue <= 80) {
      setFineDustImg(HouseFineDustSoso);
      setFineDust('보통');
    } else if (fineDustValue <= 150) {
      setFineDustImg(HouseFineDustBad);
      setFineDust('나쁨');
    } else if (fineDustValue > 150 && fineDustValue < 999) {
      setFineDustImg(HouseFineDustVeryBad);
      setFineDust('매우 나쁨');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fineDustValue]);

  // 미세먼지 지역 변경
  const changeCityName = async () => {
    if (!USER_TOKEN) {
      Swal.fire({
        icon: 'error',
        title: '로그인이 필요한 서비스입니다.',
        text: '로그인을 먼저해주세요.',
      }).then((result) => {
        if (result.isConfirmed === true) {
          history.push('/mainlogin');
        }
      });
    } else {
      const { value: place } = await Swal.fire({
        title: '지역을 입력해주세요.',
        text: '(**시 **읍/면/동)',
        input: 'text',
        inputPlaceholder: 'ex) 대구광역시 유가읍'
      })

      if (!place) {
        Swal.fire({
          icon: 'error',
          title: '지역이 입력되지 않았습니다.',
          text: '지역을 입력해주세요'
        }).then((result) => {
          if (result.isConfirmed === true) {
            NotFineDustStation();
          }
        });
      } else {
        const placeArray: string[] = place.split(' ');
        setFirstCityName(placeArray[0]);
        setLastCityName(placeArray[1]);
      }
    }
  }

  return (
    <FineDustContainer>
      <ExternalFineDust onClick={changeCityName}>
        { fineDustValue !== 999 ? <FineDustImage src={fineDustImg} alt='Fine_Dust_Image' /> : null }
        { fineDustValue !== 999 ? <FineDustValueContent>{fineDust}</FineDustValueContent> : null }
        { firstCityName === '지역이 설정되지 않았습니다.' ? <NotSelectCity>{firstCityName}</NotSelectCity> : <FineDustPlaceContent>{firstCityName} {lastCityName !== '' ? lastCityName : null} </FineDustPlaceContent> }
      </ExternalFineDust>
    </FineDustContainer>
  );
};

export default FineDust;