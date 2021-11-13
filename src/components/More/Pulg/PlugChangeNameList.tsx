import axios from "axios";

import { useEffect, useState } from "react";
import { res } from "src/types/Roomlist.type";

import PlugChangeNameItem from "./PlugChangeNameItem";

import { 
  SwalBadRequest, 
  SwalServerError, 
  SwalUnauthorized 
} from "src/Utils/SweetAlert/Error";

const PlugChangeNameList = () => {
  const GetUserToken: string | null = sessionStorage.getItem('token');

  const UserHeaders: object = {
    headers: {
      "Authorization": `Token ${GetUserToken}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }

  const [plugRoomlist, setPlugRoomlist] = useState<res[]>([]);

  const feathData = async () => {
    axios.get('/v1/user/data/room/plug/', UserHeaders)
    .then((res) => {
      setPlugRoomlist(res.data.data.data);
    }).catch((error) => {
      if (error.response.status === 400) SwalBadRequest();
      else if (error.response.status === 401) SwalUnauthorized();
      else if (error.response.status >= 500) SwalServerError();
    })
  }

  useEffect(() => {
    if (GetUserToken) feathData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GetUserToken]);

  return (
    <>
      {
        plugRoomlist && plugRoomlist.map(roomlist => {
          return ( <PlugChangeNameItem roomlist={roomlist} />)
        })
      }
    </>
  );
};

export default PlugChangeNameList