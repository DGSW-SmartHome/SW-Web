import homeicon from '../../assets/Image/houseIcon.svg';
import lockicon from '../../assets/Image/lock.png';
import settingicon from '../../assets/Image/set.png';

import { Link } from 'react-router-dom';

import {
  Home,
  HomeIcon,
  LockIcon,
  SettingIcon
} from './MainNav.style';

const Navbar = () => {
  return (
    <Home>
      <HomeIcon src={homeicon} alt="집 아이콘" />
      <span>집</span>
      <Link to='/login'><LockIcon src={lockicon} alt='보안' /></Link>
      <Link to='/setting'><SettingIcon src={settingicon} alt='설정' /></Link>
    </Home>
  );
};

export default Navbar;