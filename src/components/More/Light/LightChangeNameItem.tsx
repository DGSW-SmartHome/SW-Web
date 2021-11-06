import LightON from '../../../assets/Image/morePage/light_ON.png';

import Swal from 'sweetalert2';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { res } from "src/types/Roomlist.type";
import { UserHeaders } from 'src/api/SmartHome/SmartHome.config';
import { SwalChangeName } from 'src/Utils/SweetAlert/Success';

import { 
  SwalBadRequest, 
  SwalCustomText, 
  SwalServerError, 
  SwalUnauthorized 
} from 'src/Utils/SweetAlert/Error';

import { 
  LightItemContent, 
  LightItemImage, 
  LightItemName 
} from "./Light.style";

const LightChangeNameItem = ({roomlist}:{roomlist:res}) => {
  const USER_TOKEN: string | null = sessionStorage.getItem('token');

  const { id, name } = roomlist;
  const [roomName, setRoomName] = useState<string>(name);

  const ChangeName = async () => {
    const { value: ROOM_NAME } = await Swal.fire({
      title: '변경할 방 이름을 적어주세요.',
      input: 'text',
      inputPlaceholder: '방 이름을 입력해주세요.'
    })

    if (ROOM_NAME) setRoomName(ROOM_NAME);
    else SwalCustomText('방 이름을 입력하지 않았습니다.');
  }

  const PostChangeName = async () => {
    const data = new URLSearchParams();
    data.append('id', id);
    data.append('name', roomName);

    await axios.post('/v1/user/data/room/light/name/', data, UserHeaders)
    .then((res) => {
      if (res.data.status === 200) SwalChangeName();
    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUnauthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  useEffect(() => {
    if (USER_TOKEN) PostChangeName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomName]);

  return (
    <LightItemContent onClick={ChangeName}>
      <LightItemImage src={LightON} />
      <LightItemName>{ roomName }</LightItemName>
    </LightItemContent>
  );
};

export default LightChangeNameItem;