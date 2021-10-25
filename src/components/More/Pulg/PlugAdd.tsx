import AddIcon from '../../../assets/Image/morePage/add.png';
import { PlugAddBackground, PlugAddIcon } from './Plug.style';

const PlugAdd = () => {
  return (
    <PlugAddBackground>
      <PlugAddIcon src={AddIcon} alt='더하기' />
    </PlugAddBackground>
  );
};

export default PlugAdd