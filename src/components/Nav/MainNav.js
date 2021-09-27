import HomeIcon from '../../Image/weatherPage/houseIcon.svg';

const Navbar = () => {
  const home = {
    position: 'absolute',
    height: '50px',
    fontSize: '40px',
    color: 'white',
    left: '45px',
    top: '40px',
    alignContent: 'center',
    fontFamily: 'Jua'
  }

  const homeIcon = {
    marginBottom: '10px',
    verticalAlign: 'middle',
    width: '45px',
    height: '45px'
  }

  return (
    <div style={home}>
      <img style={homeIcon} src={HomeIcon} alt="집 아이콘" />
      <span>집</span>
    </div>
  );
};

export default Navbar;