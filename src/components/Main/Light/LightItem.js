import lightON from '../../../Image/MainPage/lightPage/light_ON.png';
import lightOFF from '../../../Image/MainPage/lightPage/light_OFF.png';

const LightItem = ({ roomName, value }) => {
  return (
    <div className='light-item'>
      {
        value === 'ON' ? <img className='light-img' src={lightON} alt='lightON' /> : <img className='light-img off' src={lightOFF} alt='lightOFF' />
      }
      <div className='room-name'>{roomName}</div>
    </div>
  );
};

export default LightItem;