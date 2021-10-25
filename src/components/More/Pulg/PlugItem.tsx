import { PlugItemContainer, PlugItemImage, PlugItemName } from './Plug.style';
import PulgON from '../../../assets/Image/morePage/plug_ON.png';
import PlugOFF from '../../../assets/Image/morePage/plug_OFF.png';

const PlugItem = () => {
  return (
    <PlugItemContainer>
      <PlugItemImage src={PulgON} />
      <PlugItemName>(방 이름)</PlugItemName>
    </PlugItemContainer>
  );
};

export default PlugItem