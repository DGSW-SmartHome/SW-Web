import Nav from "../Nav/Nav";
import VideoList from "./VideoList";
import { VideoBackground } from './Lock.style';

const Lock = () => {
  return (
    <>
      <Nav iconName='자물쇠' name='보안' />
      <VideoBackground>
        <VideoList />
      </VideoBackground>
    </>
  );
};

export default Lock;