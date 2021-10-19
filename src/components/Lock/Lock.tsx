import Nav from "../Nav/Nav";
import VideoList from "./VideoList";
import { VideoBackground } from './Lock.style';
import { useEffect } from "react";

const Lock = () => {
  useEffect(() => {
    sessionStorage.removeItem('accessToken');
  }, []);

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