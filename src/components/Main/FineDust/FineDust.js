import axios from 'axios';
import { useEffect, useState } from 'react';
import './FineDust.scss';

import HouseFineDustGood from '../../../Image/MainPage/finedustPage/dustHouseGood.png';
import HouseFineDustSoso from '../../../Image/MainPage/finedustPage/dustHouseSoso.png';
import HouseFineDustBad from '../../../Image/MainPage/finedustPage/dustHouseBad.png';
import HouseFineDustVeryBad from '../../../Image/MainPage/finedustPage/dustHouseVeryBad.png';

const FineDust = () => {
  const serviceKey = 'KyfnBnvWKoiRG0ZwQx00xJWfOX4f5Lup6gGQD7wGeIPgpnvMYGiHG1%2Bi9UjjTnQ9x5vNXxKzLwhhf2koi2I%2B9A%3D%3D';  // API Key
  const returnType = 'json';  // API return Type
  const [firstCityName, setFirstCityName] = useState(() => window.localStorage.getItem('firstCityName') ? window.localStorage.getItem('firstCityName') : '지역이 설정되지 않았습니다.');
  const [lastCityName, setLastCityName] = useState(() => window.localStorage.getItem('lastCityName') ? window.localStorage.getItem('lastCityName') : '');
  const [fineDustImg, setFineDustImg] = useState(null);
  const [fineDustValue, setFineDustValue] = useState(() => window.localStorage.getItem('fineDustValue')? window.localStorage.getItem('fineDustValue') : 999);        // Fine Dust Value
  const [fineDust, setFineDust] = useState(() => window.localStorage.getItem('fineDust') ? window.localStorage.getItem('fineDust') : 999);

  useEffect(() => {
    const formatData = '' + firstCityName
    const replaceArea = formatData.substring(0, formatData.length - 3);
    const featchData = async () => {
      await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&returnType=${returnType}&sidoName=${replaceArea}&numOfRows=100`)
        .then((response) => {
          console.log(response.data['response']['body']);
          response.data['response']['body'].items.map(items => {
            if (items['stationName'] === lastCityName) {
              setFineDustValue(items['pm10Value']);
              window.localStorage.setItem('fineDustValue', fineDustValue);
            }
          })
        })
    }

    if (firstCityName !== '지역이 설정되지 않았습니다.') {
      featchData();
    }
  }, [firstCityName, fineDustValue, lastCityName]);

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
    <div className='finedust-content'>
      <div className='external-fine-dust' onClick={changeCitiName}>
        {
          fineDustValue !== 999 ? <img className='fine-dust' src={fineDustImg} alt='Fine Dust Image' /> : null
        }
        {
          fineDustValue !== 999 ? <div style={FineDustValueCSS}>{fineDust}</div> : null
        }
        <p style={FinseDustPlaceCSS}>{firstCityName} {lastCityName !== 1 ? lastCityName : null}</p>
      </div>
    </div>
  );
};

// CSS
const FineDustValueCSS = {
  position: 'absolute',
  left: '5.8vw',
  top: '6vh',
  width: '4vw',
  fontSize: '3.5vmin',
  textAlign: 'center'
}

const FinseDustPlaceCSS = {
  position: 'absolute',
  left: '6.5vw',
  top: '8vh',
  textAlign: 'center'
}

export default FineDust;