import Nav from "../Nav/Nav";
import AirconControl from "./Aircon/AirconControl";
import LightAdd from "./Light/LightAdd";
import LightList from "./Light/LightList"
import PlugAdd from "./Pulg/PlugAdd";
import PlugList from "./Pulg/PlutList";

const More = () => {

  return (
    <div>
      <Nav iconName='톱니' name='설정' />
      <div style={lightBackground}>
        <LightAdd />
        <LightList />
      </div>
      <div style={plugBackground}>
        <PlugAdd />
        <PlugList />
      </div>
      <div style={airconBackground}>
        <AirconControl />
      </div>
    </div>
  );
};

const lightBackground = {
  position: 'relative',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  width: '30vw',
  height: '80vh',
  top: '3vh',
  left: '-3vw',
  borderRadius: '30px',
  textAlign: 'center',
  float: 'left'
}

const plugBackground = {
  position: 'relative',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  width: '30vw',
  height: '80vh',
  top: '3vh',
  borderRadius: '30px',
  textAlign: 'center',
  float: 'left'
}

const airconBackground = {
  position: 'relative',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  width: '30vw',
  height: '80vh',
  top: '3vh',
  left: '3vw',
  borderRadius: '30px',
  textAlign: 'center',
  float: 'left',
}

export default More;