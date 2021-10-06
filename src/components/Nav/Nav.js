import lockIcon from '../../Image/lock.png';
import settingIcon from '../../Image/set.png';
import homeIcon from '../../Image/houseIcon.svg';
import { Link } from 'react-router-dom';

const Nav = ({ iconName, name }) => {  
  return (
    <div style={home}>
      {
        iconName === '자물쇠' ? <img style={icon} src={lockIcon} alt='lockIcon' /> : <img style={icon} src={settingIcon} alt='settingIcon' />
      }
      <span style={title}>{name}</span>
      <Link to='/'><img style={main} src={homeIcon} alt='메인 화면 아이콘' /></Link>
    </div>
  );
};

const home = {
  position: 'absolute',
  height: '5vh',
  fontSize: '4vh',
  color: 'whtie',
  left: '2vw',
  top: '4vh',
  alignContent: 'center',
  fontFamily: 'Jua'
}

const icon = {
  marginBottom: '12px',
  verticalAlign: 'middle',
  height: '3.5vh'
}

const title = {
  marginLeft: '0.5vw'
}

const main = {
  position: 'relative',
  left: '88.5vw',
  height: '3.5vh'
}

export default Nav;