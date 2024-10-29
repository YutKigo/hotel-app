import { useNavigate } from 'react-router-dom';  // ページ遷移用
import { useRef } from 'react';
//RoomItemコンポーネント
export const RoomItem = ({ roomsList, roomNumber, changeRoomStatus }) => {

    // ステータスに応じてクラスを設定する関数
    const getStatusClassName = (status) => {
        switch (status) {
            case "空室":
                return "room-status-empty";
            case "清掃中":
                return "room-status-cleaning";
            case "清掃済":
                return "room-status-cleaned";
            
            default:
                return "";
    }
  };

    const handleChangeRoomStatus = (event) => {
      changeRoomStatus(roomNumber, event.target.value);
    };

    return (
      <>
        {roomsList.length !== 0 && (
          <>
            {roomsList.map((room) => roomNumber === room.id && (
              <p className={`room-item ${getStatusClassName(room.status)}`} key={room.id}>

                <div className='room-number'>{room.id}</div>
                <div className='room-status'>{room.status} </div>
                
                <select className='status-change' onChange={handleChangeRoomStatus}>
                  <option value="空室">空室</option>
                  <option value="清掃中">清掃中</option>
                  <option value="清掃済">清掃済</option>
                </select>
                <button >▶️</button>
              </p>
            ))}
          </>
        )}
      </>
    );
  };