import HomeIcon from '../../Image/houseIcon.svg';

const Navbar = () => {
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

  return (
    <div style={home}>
      <img style={homeIcon} src={HomeIcon} alt="집 아이콘" />
      <span>집</span>
    </div>
  );
};

export default Navbar;