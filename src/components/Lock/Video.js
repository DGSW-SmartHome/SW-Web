const Video = ({ article }) => {
  const { video } = article;
  return (
    <a href={video} download>
      <video style={securityVideo}>
        <source src={video} type='video/mp4' />
      </video>
    </a>
  );
};

// CSS
const securityVideo = {
  position: 'relative',
  top: '6vh',
  left: '1vw',
  width: '28vw',
  float: 'left',
  marginLeft: '2vw',
  marginBottom: '3vh'
}

export default Video;