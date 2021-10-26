import Nav from "../Nav/Nav";
import { LightBackground, PlugBackground } from "./More.style";
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
    </>
  );
};

export default More;