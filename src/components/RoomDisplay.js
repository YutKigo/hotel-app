import { RoomItem } from "./RoomItem";
//RoomDisplayコンポーネント
export const RoomDisplay = ({ roomsList, roomNumbers, changeRoomStatus }) => {
    return (
      <>
        {roomNumbers.map((roomNumber) => (
          <RoomItem
            key={roomNumber}
            roomsList={roomsList}
            roomNumber={roomNumber}
            changeRoomStatus={changeRoomStatus}
          />
        ))}
      </>
    );
  };