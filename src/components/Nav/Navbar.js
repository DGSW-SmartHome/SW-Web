import './Navbar.scss';
import HomeIcon from '../../Image/weatherPage/houseIcon.svg';

const Navbar = () => {
  return (
    <div className='home'>
      <img className='home-icon' src={HomeIcon} />집
    </div>
  );
};

export default Navbar;