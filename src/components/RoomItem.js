//RoomItemコンポーネント
export const RoomItem = ({ roomsList, roomNumber, changeRoomStatus }) => {

    // ステータスに応じてクラスを設定する関数
    const getStatusClassName = (status) => {
        switch (status) {
            case "空室":
                return "room-status-empty";
            case "清掃指示":
                return "room-status-requiredcleaning";
            case "清掃中":
                return "room-status-cleaning";
            case "点検中":
              return "room-status-inspecting";
            case "清掃済":
              return "room-status-cleaned";
            case "D/D":
              return "room-status-dd";
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
                  <option value="清掃指示">清掃指示</option>
                  <option value="清掃中">清掃中</option>
                  <option value="点検中">点検中</option>
                  <option value="清掃済">清掃済</option>
                  <option value="D/D">D/D</option>
                  

                </select>
                {/*<button >▶️</button>*/}
              </p>
            ))}
          </>
        )}
      </>
    );
  };