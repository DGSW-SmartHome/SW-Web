import PlugON from '../../../Image/MainPage/electriccityPage/plug_ON.png';
import PlugOFF from '../../../Image/MainPage/electriccityPage/plug_OFF.png';
import {
  ElectricityItemContainer,
  ElectricityItemImage,
  ElectricityRoomName
} from './Electricity.style';

const ElectricityItem = ({ roomList }) => {
  const { name, OnOff } = roomList;

  return (
    <ElectricityItemContainer>
      {
        OnOff === 'ON' ? <ElectricityItemImage src={PlugON} alt='plugON' />  : <ElectricityItemImage src={PlugOFF} alt='plugOFF' />
      }
      <ElectricityRoomName>{name}</ElectricityRoomName>
    </ElectricityItemContainer>
  );
};

export default ElectricityItem;