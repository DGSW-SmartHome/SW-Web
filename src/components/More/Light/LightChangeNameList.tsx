import axios from "axios";

import { useEffect, useState } from "react";
import { UserHeaders } from "src/api/SmartHome/SmartHome.config";
import { res } from "src/types/Roomlist.type";

import LightChangeNameItem from "./LightChangeNameItem";

import { 
  SwalBadRequest, 
  SwalServerError, 
  SwalUasuthorized 
} from "src/Utils/SweetAlert/Error";

const LightChangeNameList = () => {
  const USER_TOKEN: string | null = sessionStorage.getItem('token');
  const [lightRoomlist, setLightRoomlist] = useState<res[]>([]);
  
  const feathData = async () => {
    axios.get('/v1/user/data/room/light/', UserHeaders)
    .then((res) => {
      setLightRoomlist(res.data.data.data);
    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUasuthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  useEffect(() => {
    if (USER_TOKEN) feathData();
  }, [USER_TOKEN]);

  return (
    <>
      {
        lightRoomlist && lightRoomlist.map(roomlist => {
          return ( <LightChangeNameItem roomlist={roomlist} />)
        })}
    </>
  );
};

export default LightChangeNameList;