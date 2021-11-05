import lightON from '../../../assets/Image/MainPage/lightPage/light_ON.png';
import lightOFF from '../../../assets/Image/MainPage/lightPage/light_OFF.png';

import { res } from "src/types/Roomlist.type";

import { 
  LightItemContainer,
  LightItemImage,
  LightRoomName
} from './Light.style';

const LightItem = ({ roomlist }:{roomlist:res}) => {
  const { name, status } = roomlist;

  return (
    <LightItemContainer>
      {
        status === 'ON' 
        ? <LightItemImage src={lightON} alt='lightON' /> 
        : <LightItemImage className='off' src={lightOFF} alt='lightOFF' />
      }
      <LightRoomName>{name}</LightRoomName>
    </LightItemContainer>
  );
};

export default LightItem;