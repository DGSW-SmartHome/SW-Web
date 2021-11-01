import ElectricityItem from "./ElectricityItem";
import { RoomList } from "src/Store/InterFace/RoomList";

const ElectricityList = () => {
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
      'OnOff': 'OFF'
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
      'OnOff': 'ON'
    },
  ]
  
  return (
    <>
      {
        room.map(roomList => {
          return ( <ElectricityItem key={roomList.id} roomList={roomList} /> )
        })
      }
    </>
  );
};

export default ElectricityList;