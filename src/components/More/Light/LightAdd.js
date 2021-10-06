import AddIcon from '../../../Image/morePage/add.png';

const LightAdd = () => {
  return (
    <div style={AddBackground}>
      <img style={addIcon} src={AddIcon} alt='더하기' />
    </div>
  );
};

const AddBackground = {
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  width: '28vw',
  height: '10vh',
  display: 'inline-block',
  position: 'relative',
  top: '2.5vh',
  borderRadius: '30px'
}

const addIcon = {
  position: 'relative',
  width: '5vmin',
  top: '2.5vh'
}

export default LightAdd;