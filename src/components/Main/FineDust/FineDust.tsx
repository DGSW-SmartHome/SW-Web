import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL, ServiceKey, ReturnType } from '../../../API/FineDust/FineDustConfig';
import { FineDustState, FirstCityName, LastCityName, FineDustValue } from '../../../Store/Recoil/Finedust';
import { useRecoilState } from 'recoil';

import HouseFineDustGood from '../../../Image/MainPage/finedustPage/dustHouseGood.png';
import HouseFineDustSoso from '../../../Image/MainPage/finedustPage/dustHouseSoso.png';
import HouseFineDustBad from '../../../Image/MainPage/finedustPage/dustHouseBad.png';
import HouseFineDustVeryBad from '../../../Image/MainPage/finedustPage/dustHouseVeryBad.png';

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
  const [replaceArea, setReplaceArea] = useState('');                                 // 새로 저장한 지역 이름

  useEffect(() => {
    const formatData = '' + firstCityName
    if (formatData.length === 7) {
      setReplaceArea(formatData.substring(0, formatData.length - 5));
    } else if (formatData.length === 6) {
      setReplaceArea(formatData.substring(0, formatData.length - 4));
    } else if (formatData.length === 5) {
      setReplaceArea(formatData.substring(0, formatData.length - 3));
    } else if (formatData.length === 4) {
      setReplaceArea(formatData.substring(0, formatData.length - 2));
    } else if (formatData.length === 3) {
      setReplaceArea(formatData.substring(0, formatData.length - 1));
    }
  }, [firstCityName]);

  useEffect(() => {
    const featchData = async () => {
      await axios.get(`${baseURL}?serviceKey=${ServiceKey}&returnType=${ReturnType}&sidoName=${replaceArea}&numOfRows=100`)
        .then((response) => {
          response && response.data.response.body.items.map(items => {
            if (items['stationName'] === lastCityName) {
              setFineDustValue(items['pm10Value']);
            }
            return <></>;
          })
        })
    }

    if (firstCityName !== '지역이 설정되지 않았습니다.') {
      featchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replaceArea])

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

  const changeCitiName = () => {
    if (!USER_TOKEN) {
      alert('로그인이 필요한 서비스입니다. 로그인을 먼저해주세요.');
      history.push('/mainlogin');
    } else {
      const place = prompt('지역을 입력해주세요. (**시 **동/면/읍)');
      if (!place) {
        alert('지역을 입력해 주세요.')
        setFirstCityName('지역이 설정되지 않았습니다.');
        setLastCityName('');
        setFineDustImg('');
        setFineDustValue(999);
        setFineDust(999);
      } else {
        const placeArray = place.split(' ');
        setFirstCityName(placeArray[0]);
        setLastCityName(placeArray[1]);
      }
    }
  }

  return (
    <FineDustContainer>
      <ExternalFineDust onClick={changeCitiName}>
        {
          fineDustValue !== 999 ? <FineDustImage src={fineDustImg} alt='Fine_Dust_Image' /> : null
        }
        {
          fineDustValue !== 999 ? <FineDustValueContent>{fineDust}</FineDustValueContent> : null
        }
        {
          firstCityName === '지역이 설정되지 않았습니다.' ? <NotSelectCity>{firstCityName}</NotSelectCity> : <FineDustPlaceContent>{firstCityName} {lastCityName !== '' ? lastCityName : null} </FineDustPlaceContent>
        }
      </ExternalFineDust>
    </FineDustContainer>
  );
};

export default FineDust;