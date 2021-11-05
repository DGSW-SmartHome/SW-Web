import { useEffect, useState } from "react";
import { UserHeaders } from "src/api/SmartHome/SmartHome.config";
import { res } from "src/types/Roomlist.type";

import axios from "axios";

import ElectricityItem from "./ElectricityItem";

const ElectricityList = () => {
  const USER_TOKEN: string | null = sessionStorage.getItem('token');
  const [plugRoomlist, setPlugRoomlist] = useState<res[]>([]);

  const feathData = async() => {
    axios.get('/v1/user/data/room/plug/', UserHeaders)
    .then((res) => {
      setPlugRoomlist(res.data.data.data);
    }).catch((error) => {
      console.log(error);
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