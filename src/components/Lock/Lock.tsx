import Nav from "../Nav/Nav";
import VideoList from "./VideoList";
import { ScrollContainer, VideoBackground } from './Lock.style';
import { useEffect } from "react";

const Lock = () => {
  useEffect(() => {
    sessionStorage.removeItem('accessToken');
  }, []);

  return (
    <>
      <Nav iconName='자물쇠' name='보안' />
      <VideoBackground>
        <ScrollContainer className="scroll">
          <VideoList />
        </ScrollContainer>
      </VideoBackground>
    </>
  );
};

export default Lock;