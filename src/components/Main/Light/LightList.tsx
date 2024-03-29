import { useState, useEffect } from "react";
import { res } from "src/types/Roomlist.type";

import axios from "axios";
import LightItem from "./LightItem";

import { 
  SwalBadRequest, 
  SwalServerError, 
  SwalUnauthorized 
} from "src/Utils/SweetAlert/Error";

const LightList = () => {
  const GetUserToken: string | null = sessionStorage.getItem('token');

  const UserHeaders: object = {
    headers: {
      "Authorization": `Token ${GetUserToken}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }

  const [lightRoomlist, setLightRoomlist] = useState<res[]>([]);

  const feathData = async () => {
    axios.get('/v1/user/data/room/light/', UserHeaders)
    .then((res) => {
      setLightRoomlist(res.data.data.data);
    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUnauthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  useEffect(() => {
    if (GetUserToken) feathData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        lightRoomlist && lightRoomlist.map(roomList => {
          return ( <LightItem roomlist={roomList} /> )
        })
      }
    </>
  );
};

export default LightList;