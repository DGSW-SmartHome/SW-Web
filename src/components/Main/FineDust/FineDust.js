import axios from 'axios';
import { useEffect, useState } from 'react';

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

const FineDust = () => {
  const serviceKey = 'KyfnBnvWKoiRG0ZwQx00xJWfOX4f5Lup6gGQD7wGeIPgpnvMYGiHG1%2Bi9UjjTnQ9x5vNXxKzLwhhf2koi2I%2B9A%3D%3D';  // API Key
  const returnType = 'json';  // API return Type
  const [firstCityName, setFirstCityName] = useState(() => window.localStorage.getItem('firstCityName') ? window.localStorage.getItem('firstCityName') : '지역이 설정되지 않았습니다.');
  const [lastCityName, setLastCityName] = useState(() => window.localStorage.getItem('lastCityName') ? window.localStorage.getItem('lastCityName') : '');
  const [fineDustImg, setFineDustImg] = useState(null);
  const [fineDustValue, setFineDustValue] = useState(() => window.localStorage.getItem('fineDustValue')? window.localStorage.getItem('fineDustValue') : 999);        // Fine Dust Value
  const [fineDust, setFineDust] = useState(() => window.localStorage.getItem('fineDust') ? window.localStorage.getItem('fineDust') : '.');
  const [replaceArea, setReplaceArea] = useState('');

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

    const featchData = async () => {
      await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&returnType=${returnType}&sidoName=${replaceArea}&numOfRows=100`)
        .then((response) => {
          response && response.data.response.body.items.map(items => {
            if (items['stationName'] === lastCityName) {
              setFineDustValue(items['pm10Value']);
              window.localStorage.setItem('fineDustValue', fineDustValue);
            }
            return <></>;
          })
        })
    }

    if (firstCityName !== '지역이 설정되지 않았습니다.') {
      featchData();
    }
  }, [firstCityName, fineDustValue, lastCityName, replaceArea]);

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
  }, [fineDustValue])

  const changeCitiName = () => {
    const place = prompt('지역을 입력해주세요. (**시 **동/면/읍)');
    if (!place) {
      alert('지역을 입력해 주세요.')
      setFirstCityName('지역이 설정되지 않았습니다.');
      setLastCityName('');
      setFineDustImg(null);
      setFineDustValue(999);
      setFineDust(999);
      window.localStorage.removeItem('firstCityName');
      window.localStorage.removeItem('lastCityName');
      window.localStorage.removeItem('fineDustValue');
      window.localStorage.removeItem('fineDust');
    } else {
      const placeArray = place.split(' ');
      setFirstCityName(placeArray[0]);
      setLastCityName(placeArray[1]);
      window.localStorage.setItem('firstCityName', placeArray[0]);
      window.localStorage.setItem('lastCityName', placeArray[1]);
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
          firstCityName === '지역이 설정되지 않았습니다.' ? <NotSelectCity>{firstCityName}</NotSelectCity> : <FineDustPlaceContent>{firstCityName} {lastCityName !== 1 ? lastCityName : null} </FineDustPlaceContent>
        }
      </ExternalFineDust>
    </FineDustContainer>
  );
};

export default FineDust;