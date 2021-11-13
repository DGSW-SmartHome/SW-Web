import Nav from "../Nav/Nav";
import LightChangeNameList from "./Light/LightChangeNameList"
import PlugList from "./Pulg/PlugChangeNameList";

import { LightBackground, PlugBackground } from "./More.style";

const More = () => {

  return (
    <>
      <Nav iconName='톱니' name='설정' />
      <LightBackground>
        <LightChangeNameList />
      </LightBackground>
      <PlugBackground>
        <PlugList />
      </PlugBackground>
    </>
  );
};

export default More;