import { useState, useEffect } from 'react';
import * as roomsData from "../apis/rooms";
//useRoomsフック
export const useRooms = () => {
    const [roomsList, setRoomsList] = useState([]);
  
    useEffect(() => {
      roomsData.getAllRoomsData().then((room) => {
        setRoomsList([...room]);
      });
    }, []);
  
    const changeRoomStatus = (roomNumber, newStatus) => {
      const targetRoom = roomsList.find((room) => room.id == roomNumber);
      const newTargetRoom = { ...targetRoom, status: newStatus.toString() };
  
      roomsData.updateRoomData(roomNumber, newTargetRoom).then((updatedRoom) => {
        const newRoomsList = roomsList.map((room) =>
          room.id !== updatedRoom.id ? room : updatedRoom
        );
        setRoomsList(newRoomsList);
      });
    };
  
    return {
      roomsList,
      changeRoomStatus,
    };
  };