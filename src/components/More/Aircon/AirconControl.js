import { AirconMode } from '../../AirconMode/AirconMode';
import { useRecoilState } from 'recoil';
import './Style.scss';
import { AirconTempUp, Mode, AirconOnOff, AirconWindStrange, AirconTempDown, SensorValueBox, SensorValue } from './AirconControl.style';
import { useEffect } from 'react';

const AirconControl = () => {
  const [airconControlMode, setAirconControlMode] = useRecoilState(AirconMode);

  const changeAirconMode = () => {
    if (airconControlMode === 'setting') {
      setAirconControlMode('control');
    } else {
      setAirconControlMode('setting');
    }
  }

  useEffect(() => {
    window.localStorage.setItem('controlMode', airconControlMode);
  }, [airconControlMode]);

  const AirconONOFFValue = '대충 IR 센서 값';
  const WindPWValue = '대충 IR 센서 값';
  const TempUPValue = '대충 IR 센서 값';
  const TempDownValue = '대충 IR 센서 값';

  return (
    <>
      {
        airconControlMode === 'setting' ?
        <>
          <Mode onClick={changeAirconMode}>설정모드</Mode>
          <AirconOnOff>운전<br/>정지</AirconOnOff>
          <AirconWindStrange>바람<br/>세기</AirconWindStrange>
          <AirconTempUp>온도<br/>+</AirconTempUp>
          <AirconTempDown>온도<br/>-</AirconTempDown>
          <SensorValueBox>
            <SensorValue>Aircon On Off: {AirconONOFFValue}</SensorValue>
            <SensorValue>Wind PW: {WindPWValue}</SensorValue>
            <SensorValue>Temp Up: {TempUPValue}</SensorValue>
            <SensorValue>Temp Down: {TempDownValue}</SensorValue>
          </SensorValueBox>
        </> : 
        <>
          <Mode onClick={changeAirconMode}>제어모드</Mode>
          <AirconOnOff>운전<br/>정지</AirconOnOff>
          <AirconWindStrange>바람<br/>세기</AirconWindStrange>
          <AirconTempUp>온도<br/>+</AirconTempUp>
          <AirconTempDown>온도<br/>-</AirconTempDown>
          <SensorValueBox>
            <SensorValue>Aircon On Off: {AirconONOFFValue}</SensorValue>
            <SensorValue>Wind PW: {WindPWValue}</SensorValue>
            <SensorValue>Temp Up: {TempUPValue}</SensorValue>
            <SensorValue>Temp Down: {TempDownValue}</SensorValue>
          </SensorValueBox>
        </>
      }
    </>
  );
};

export default AirconControl;