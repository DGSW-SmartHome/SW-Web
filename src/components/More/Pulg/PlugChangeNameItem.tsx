import PulgON from '../../../assets/Image/morePage/plug_ON.png';

import Swal from 'sweetalert2';
import axios from 'axios';

import { useState } from 'react';
import { res } from 'src/types/Roomlist.type';
import { UserHeaders } from 'src/api/SmartHome/SmartHome.config';
import { SwalChangeName } from 'src/Utils/SweetAlert/Success';

import { 
  SwalBadRequest, 
  SwalCustomText, 
  SwalServerError, 
  SwalUnauthorized 
} from 'src/Utils/SweetAlert/Error';

import {
  PlugItemContainer,
  PlugItemImage,
  PlugItemName
} from './Plug.style';

const PlugChangeNameItem = ({roomlist}:{roomlist:res}) => {
  const { id, name } = roomlist;
  const [roomName, setRoomName] = useState<string>(name);

  const ChangeName = async () => {
    const { value: ROOM_NAME } = await Swal.fire({
      title: '변경할 방 이름을 적어주세요.',
      input: 'text',
      inputPlaceholder: '방 이름을 입력해주세요.'
    });

    if (ROOM_NAME) {
      setRoomName(ROOM_NAME);
      PostChangename(ROOM_NAME);
    }
    else SwalCustomText('방 이름을 입력하지 않았습니다.');
  }

  const PostChangename = async ({RoomName}: {RoomName: string}) => {
    const data = new URLSearchParams();
    data.append('id', id);
    data.append('name', RoomName);

    await axios.post('/v1/user/data/room/plug/name/', data, UserHeaders)
    .then((res) => {
      if (res.data.status === 200) SwalChangeName();
    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUnauthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  return (
    <PlugItemContainer onClick={ChangeName}>
      <PlugItemImage src={PulgON} />
      <PlugItemName>{ roomName }</PlugItemName>
    </PlugItemContainer>
  );
};

export default PlugChangeNameItem