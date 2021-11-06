import lightON from '../../../assets/Image/MainPage/lightPage/light_ON.png';
import lightOFF from '../../../assets/Image/MainPage/lightPage/light_OFF.png';

import axios from 'axios';

import { res } from "src/types/Roomlist.type";
import { UserHeaders } from 'src/api/SmartHome/SmartHome.config';

import { 
  LightItemContainer,
  LightItemImage,
  LightRoomName
} from './Light.style';

import {
  SwalBadRequest,
  SwalServerError,
  SwalUnauthorized
} from 'src/Utils/SweetAlert/Error';

const LightItem = ({ roomlist }:{roomlist:res}) => {
  const { id, name, status } = roomlist;

  const PostTurnPlug = async () => {
    const data = new URLSearchParams();
    data.append('id', id);

    await axios.post('/v1/user/data/room/plug', data, UserHeaders)
    .then((res) => {

    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUnauthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  return (
    <LightItemContainer onClick={PostTurnPlug}>
      {
        status === 'ON' 
        ? <LightItemImage src={lightON} alt='lightON' /> 
        : <LightItemImage className='off' src={lightOFF} alt='lightOFF' />
      }
      <LightRoomName>{name}</LightRoomName>
    </LightItemContainer>
  );
};

export default LightItem;