import Nav from "../Nav/Nav";
import './Lock.scss';
import VideoList from "./VideoList";

const Lock = () => {
  return (
    <>
      <Nav iconName='자물쇠' name='보안' />
      <div className='video-background'>
        <VideoList />
      </div>
    </>
  );
};

export default Lock;