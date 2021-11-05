import PlugON from '../../../assets/Image/MainPage/electriccityPage/plug_ON.png';
import PlugOFF from '../../../assets/Image/MainPage/electriccityPage/plug_OFF.png';

import { res } from "src/types/Roomlist.type";

import {
  ElectricityItemContainer,
  ElectricityItemImage,
  ElectricityRoomName
} from './Electricity.style';

const ElectricityItem = ({ roomlist }:{roomlist:res}) => {
  const { name, status } = roomlist;

  return (
    <ElectricityItemContainer>
      {
        status === 'ON' 
        ? <ElectricityItemImage src={PlugON} alt='plugON' /> 
        : <ElectricityItemImage src={PlugOFF} alt='plugOFF' />
      }
      <ElectricityRoomName>{name}</ElectricityRoomName>
    </ElectricityItemContainer>
  );
};

export default ElectricityItem;