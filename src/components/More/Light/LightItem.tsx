import { LightItemContent, LightItemImage, LightItemName } from "./Light.style";
import LightON from '../../../assets/Image/morePage/light_ON.png';
import LightOff from '../../../assets/Image/morePage/light_OFF.png';

const LightItem = () => {
  return (
    <LightItemContent>
      <LightItemImage src={LightON} />
      <LightItemName>(방 이름)</LightItemName>
    </LightItemContent>
  );
};

export default LightItem;