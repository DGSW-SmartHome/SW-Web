import { useEffect, useState } from "react";
import { UserHeaders } from "src/api/SmartHome/SmartHome.config";
import { res } from "src/types/Roomlist.type";

import axios from "axios";
import Swal from 'sweetalert2';

import ElectricityItem from "./ElectricityItem";

const ElectricityList = () => {
  const USER_TOKEN: string | null = sessionStorage.getItem('token');
  const [plugRoomlist, setPlugRoomlist] = useState<res[]>([]);

  const feathData = async() => {
    axios.get('/v1/user/data/room/plug/', UserHeaders)
    .then((res) => {
      setPlugRoomlist(res.data.data.data);
    }).catch((error) => {
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: '값을 제대로 전달하지 못하였습니다.'
        });
      } else if (error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: '토큰이 존재하지 않습니다.'
        });
      }
    })
  }

  useEffect(() => {
    if (USER_TOKEN) feathData();
  }, [USER_TOKEN])

  return (
    <>
      {
        plugRoomlist && plugRoomlist.map(roomList => {
          return ( <ElectricityItem roomlist={roomList} /> )
        })
      }
    </>
  );
};

export default ElectricityList;