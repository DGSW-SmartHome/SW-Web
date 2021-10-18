import { SecurityVideo } from './Lock.style';

const Video = ({ article }) => {
  const { video } = article;
  return (
    <a href={video} download>
      <SecurityVideo>
        <source src={video} type='video/mp4' />
      </SecurityVideo>
    </a>
  );
};

export default Video;