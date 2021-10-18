import Nav from "../Nav/Nav";
import AirconControl from "./Aircon/AirconControl";
import { LightBackground, PlugBackground, AirconBackground } from "./More.style";
import LightAdd from "./Light/LightAdd";
import LightList from "./Light/LightList"
import PlugAdd from "./Pulg/PlugAdd";
import PlugList from "./Pulg/PlutList";

const More = () => {

  return (
    <>
      <Nav iconName='톱니' name='설정' />
      <LightBackground>
        <LightAdd />
        <LightList />
      </LightBackground>
      <PlugBackground>
        <PlugAdd />
        <PlugList />
      </PlugBackground>
      <AirconBackground>
        <AirconControl />
      </AirconBackground>
    </>
  );
};

export default More;