import HomeIcon from '../../Image/houseIcon.svg';
import Lock from '../../Image/lock.png';
import Setting from '../../Image/set.png';

const Navbar = () => {
  return (
    <div style={home}>
      <img style={homeIcon} src={HomeIcon} alt="집 아이콘" />
      <span>집</span>
      <img style={lockIcon} src={Lock} alt='보안' />
      <img style={settingIcon} src={Setting} alt='설정' />
    </div>
  );
};

const home = {
  position: 'absolute',
  height: '5vh',
  fontSize: '4vh',
  color: 'white',
  left: '2vw',
  top: '4vh',
  alignContent: 'center',
  fontFamily: 'Jua'
}

const homeIcon = {
  marginBottom: '10px',
  verticalAlign: 'middle',
  height: '3.5vh'
}

const lockIcon = {
  position: 'relative',
  marginBottom: '10px',
  verticalAlign: 'middle',
  height: '3.5vh',
  left: '87.5vw'
}

const settingIcon = {
  position: 'relative',
  marginBottom: '10px',
  verticalAlign: 'middle',
  height: '3.5vh',
  left: '88.5vw'
}

export default Navbar;