import lightON from '../../../Image/MainPage/lightPage/light_ON.png';
import lightOFF from '../../../Image/MainPage/lightPage/light_OFF.png';
import { LightItemContainer, LightItemImage, LightRoomName } from './Light.style';

const LightItem = ({ roomName, value }) => {
  return (
    <LightItemContainer>
      {
        value === 'ON' 
        ? <LightItemImage src={lightON} alt='lightON' /> 
        : <LightItemImage className='off' src={lightOFF} alt='lightOFF' />
      }
      <LightRoomName className='room-name'>{roomName}</LightRoomName>
    </LightItemContainer>
  );
};

export default LightItem;