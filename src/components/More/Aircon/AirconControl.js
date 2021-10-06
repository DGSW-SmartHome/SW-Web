import './Style.scss';

const AirconControl = () => {
  const AirconONOFFValue = '대충 IR 센서 값';
  const WindPWValue = '대충 IR 센서 값';
  const TempUPValue = '대충 IR 센서 값';
  const TempDownValue = '대충 IR 센서 값';
  return (
    <>
      <button style={airconMode}>설정모드</button>
      <button className='button'>운전<br/>정지</button>
      <button className='button temp-plus'>온도<br/>+</button>
      <button className='button wind-strange'>바람<br/>세기</button>
      <button className='button temp-minus'>온도<br/>-</button>
      <div style={sensorValueBox}>
        <div style={sensorValue}>Aircon On Off: {AirconONOFFValue}</div>
        <div style={sensorValue}>Wind PW: {WindPWValue}</div>
        <div style={sensorValue}>Temp Up: {TempUPValue}</div>
        <div style={sensorValue}>Temp Down: {TempDownValue}</div>
      </div>
    </>
  );
};

const airconMode = {
  position: 'relative',
  width: '27vw',
  height: '10vh',
  borderRadius: '30px',
  top: '2.5vh',
  fontSize: '3vmin',
  fontFamily: 'Jua'
}

const sensorValueBox = {
  position: 'relative',
  width: '27vw',
  height: '17vh',
  backgroundColor: '#c4c4c4',
  left: '1.5vw',
  top: '13vh',
  borderRadius: '0px 0px 30px 30px'
}

const sensorValue = {
  position: 'relative',
  left: '1vw',
  top: '2vh',
  fontSize: '2vmin',
  marginBottom: '1vh',
  textAlign: 'left'
}

export default AirconControl;