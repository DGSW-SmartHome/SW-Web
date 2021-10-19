import { PlugItemContainer, PlugItemDeleteImg, PlugItemImage, PlugItemName } from './Plug.style';
import PulgON from '../../../Image/morePage/plug_ON.png';
import PlugOFF from '../../../Image/morePage/plug_OFF.png';
import RemoveImg from '../../../Image/morePage/remove.png';

const PlugItem = () => {
  return (
    <PlugItemContainer>
      <PlugItemImage src={PulgON} />
      <PlugItemName>(방 이름)</PlugItemName>
      <PlugItemDeleteImg src={RemoveImg} />
    </PlugItemContainer>
  );
};

export default PlugItem