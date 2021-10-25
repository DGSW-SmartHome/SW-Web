import Nav from "../Nav/Nav";
import AirconControl from "./Aircon/AirconControl";
import { LightBackground, PlugBackground, AirconBackground } from "./More.style";
import LightList from "./Light/LightList"
import PlugList from "./Pulg/PlutList";

const More = () => {

  return (
    <>
      <Nav iconName='톱니' name='설정' />
      <LightBackground>
        <LightList />
      </LightBackground>
      <PlugBackground>
        <PlugList />
      </PlugBackground>
      <AirconBackground>
        <AirconControl />
      </AirconBackground>
    </>
  );
};

export default More;