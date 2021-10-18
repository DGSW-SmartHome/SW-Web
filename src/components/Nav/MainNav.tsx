import { Link } from 'react-router-dom';
import homeicon from '../../Image/houseIcon.svg';
import lockicon from '../../Image/lock.png';
import settingicon from '../../Image/set.png';
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