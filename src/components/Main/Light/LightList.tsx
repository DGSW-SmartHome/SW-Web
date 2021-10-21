import LightItem from "./LightItem";
import { RoomList } from "src/Store/InterFace/RoomList";

const LightList = () => {
  const room: RoomList[] = [
    {
      'id': 1,
      'name': 'room1',
      'OnOff': 'ON'
    },
    {
      'id': 2,
      'name': 'room2',
      'OnOff': 'OFF'
    },
    {
      'id': 3,
      'name': 'room3',
      'OnOff': 'ON'
    },
    {
      'id': 4,
      'name': 'room4',
      'OnOff': 'ON'
    },
    {
      'id': 5,
      'name': 'room5',
      'OnOff': 'OFF'
    },
    {
      'id': 6,
      'name': 'room6',
      'OnOff': 'OFF'
    },
  ]

  return (
    <>
      {
        room.map(roomList => {
          return ( <LightItem key={roomList.id} roomName={roomList.name} value={roomList.OnOff} /> )
        })
      }
    </>
  );
};

export default LightList;