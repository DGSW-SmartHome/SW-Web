import addIcon from '../../../assets/Image/morePage/add.png';
import { LightAddBackground, AddIcon } from './Light.style';

const LightAdd = () => {
  return (
    <LightAddBackground>
      <AddIcon src={addIcon} alt='더하기' />
    </LightAddBackground>
  );
};

export default LightAdd;