import PlugON from '../../../Image/MainPage/electriccityPage/plug_ON.png';
import PlugOFF from '../../../Image/MainPage/electriccityPage/plug_OFF.png';

const ElectricityItem = ({ roomList }) => {
  const { name, OnOff } = roomList;

  return (
    <div className='electricity-item'>
      {
        OnOff === 'ON' ? <img className='electricity-img' src={PlugON} alt='plugON' />  : <img className='electricity-img' src={PlugOFF} alt='plugOFF' />
      }
      <div className='room-name'>{name}</div>
    </div>
  );
};

export default ElectricityItem;