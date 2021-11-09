import PlugON from '../../../assets/Image/MainPage/electriccityPage/plug_ON.png';
import PlugOFF from '../../../assets/Image/MainPage/electriccityPage/plug_OFF.png';

import axios from 'axios';

import { res } from "src/types/Roomlist.type";

import {
  ElectricityItemContainer,
  ElectricityItemImage,
  ElectricityRoomName
} from './Electricity.style';

import { 
  SwalBadRequest, 
  SwalErrorCustomText, 
  SwalServerError, 
  SwalUnauthorized 
} from 'src/Utils/SweetAlert/Error';

const ElectricityItem = ({ roomlist }:{roomlist:res}) => {
  const GetUserToken: string | null = sessionStorage.getItem('token');

  const UserHeaders: object = {
    headers: {
      "Authorization": `Token ${GetUserToken}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }

  const { id, name, status } = roomlist;

  const PostTurnLight = async () => {
    const data = new URLSearchParams();
    data.append('id', id);

    if (id < 2) {
      await axios.post('/v1/user/data/room/plug/', data, UserHeaders)
      .then((res) => {
        
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
    <ElectricityItemContainer onClick={PostTurnLight}>
      {
        status === 'ON' 
        ? <ElectricityItemImage src={PlugON} alt='plugON' /> 
        : <ElectricityItemImage src={PlugOFF} alt='plugOFF' />
      }
      <ElectricityRoomName>{name}</ElectricityRoomName>
    </ElectricityItemContainer>
  );
};

export default ElectricityItem;