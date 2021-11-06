import PulgON from '../../../assets/Image/morePage/plug_ON.png';

import Swal from 'sweetalert2';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { res } from 'src/types/Roomlist.type';
import { UserHeaders } from 'src/api/SmartHome/SmartHome.config';
import { SwalChangeName } from 'src/Utils/SweetAlert/Success';

import { 
  SwalBadRequest, 
  SwalNotInsert, 
  SwalServerError, 
  SwalUasuthorized 
} from 'src/Utils/SweetAlert/Error';

import {
  PlugItemContainer,
  PlugItemImage,
  PlugItemName
} from './Plug.style';

const PlugChangeNameItem = ({roomlist}:{roomlist:res}) => {
  const USER_TOKEN: string | null = sessionStorage.getItem('token');

  const { id, name } = roomlist;
  const [roomName, setRoomName] = useState<string>(name);

  const ChangeName = async () => {
    const { value: ROOM_NAME } = await Swal.fire({
      title: '변경할 방 이름을 적어주세요.',
      input: 'text',
      inputPlaceholder: '방 이름을 입력해주세요.'
    });

    if (ROOM_NAME) setRoomName(ROOM_NAME);
    else SwalNotInsert('방 이름을 입력하지 않았습니다.');
  }

  const PostChangename = async () => {
    const data = new URLSearchParams();
    data.append('id', id);
    data.append('name', roomName);

    await axios.post('/v1/user/data/room/plug/name/', data, UserHeaders)
    .then((res) => {
      if (res.data.status === 200) SwalChangeName();
    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUasuthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  useEffect(() => {
    if (USER_TOKEN) PostChangename();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomName]);

  return (
    <PlugItemContainer onClick={ChangeName}>
      <PlugItemImage src={PulgON} />
      <PlugItemName>{ roomName }</PlugItemName>
    </PlugItemContainer>
  );
};

export default PlugChangeNameItem