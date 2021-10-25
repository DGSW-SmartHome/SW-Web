import { LightItemContent, LightItemDeleteImg, LightItemImage, LightItemName } from "./Light.style";
import LightON from '../../../assets/Image/morePage/light_ON.png';
import LightOff from '../../../assets/Image/morePage/light_OFF.png';
import RemoveImg from '../../../assets/Image/morePage/remove.png';

const LightItem = () => {
  return (
    <LightItemContent>
      <LightItemImage src={LightON} />
      <LightItemName>(방 이름)</LightItemName>
      <LightItemDeleteImg src={RemoveImg} />
    </LightItemContent>
  );
};

export default LightItem;