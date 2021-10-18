import { Link } from 'react-router-dom';
import homeicon from '../../Image/houseIcon.svg';
import lockicon from '../../Image/lock.png';
import settingicon from '../../Image/set.png';
import {
  Home,
  Icon,
  Title,
  MainIcon
} from './Nav.style';

const Nav = ({ iconName, name }) => {  
  return (
    <Home>
      {
        iconName === '자물쇠' ? <Icon src={lockicon} alt='lockIcon' /> : <Icon src={settingicon} alt='settingIcon' />
      }
      <Title>{name}</Title>
      <Link style={main} to='/'><MainIcon src={homeicon} alt='메인 화면 아이콘' /></Link>
    </Home>
  );
};

const main = {
  position: 'relative',
  left: '88.5vw',
  height: '3.5vh'
}

export default Nav;