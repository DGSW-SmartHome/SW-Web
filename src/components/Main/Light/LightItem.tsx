import lightON from '../../../assets/Image/MainPage/lightPage/light_ON.png';
import lightOFF from '../../../assets/Image/MainPage/lightPage/light_OFF.png';

import axios from 'axios';

import { res } from "src/types/Roomlist.type";

import { 
  LightItemContainer,
  LightItemImage,
  LightRoomName
} from './Light.style';

import {
  SwalBadRequest,
  SwalErrorCustomText,
  SwalServerError,
  SwalUnauthorized
} from 'src/Utils/SweetAlert/Error';
import { useState } from 'react';

const LightItem = ({ roomlist }:{roomlist:res}) => {
  const GetUserToken: string | null = sessionStorage.getItem('token');

  const UserHeaders: object = {
    headers: {
      "Authorization": `Token ${GetUserToken}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
  
  const { id, name, status } = roomlist;
  const [lightStatus, setLightStatus] = useState<boolean>(status);

  const PostTurnPlug = async () => {
    const data = new URLSearchParams();
    data.append('id', id);

    if (id < 4) {
      await axios.post('/v1/user/data/room/light/', data, UserHeaders)
      .then((res) => {
        setLightStatus(res.data.data.status);
      }).catch((error) => {
        if (error.response.status === 400) SwalBadRequest();
        else if (error.response.status === 401) SwalUnauthorized();
        else if (error.response.status >= 500) SwalServerError();
      })
    } else {
      SwalErrorCustomText('등록되지 않았습니다.');
    }
  }

  return (
    <LightItemContainer onClick={PostTurnPlug}>
      {
        lightStatus === true 
        ? <LightItemImage src={lightON} alt='lightON' /> 
        : <LightItemImage className='off' src={lightOFF} alt='lightOFF' />
      }
      <LightRoomName>{name}</LightRoomName>
    </LightItemContainer>
  );
};

export default LightItem;