import './App.css';
import { useEffect, useState } from 'react';

import { RoomSerch } from './RoomSerch';
import { RoomDisplay } from './RoomDisplay';

import { useRooms } from '../hooks/useRooms';

function App() {
  const { roomsList, changeRoomStatus } = useRooms();

  //部屋番号文字列を格納する状態変数配列roomNumbersとsetメソッド
  //textareaの入力内容によってroomNumbersの値が動的に変化
  const [roomNumbers, setRoomNumbers] = useState([]);

  // 初期値として全ての部屋番号を設定
  useEffect(() => {
    const initialRoomNumbers = [];
    for (let i = 2; i <= 9; i++) {
      for (let j = 1; j <= 15; j++) {
        initialRoomNumbers.push(`${i * 100 + j}`);
      }
    }
    initialRoomNumbers.splice(initialRoomNumbers.indexOf("914"), 2); // 914と915を削除
    setRoomNumbers(initialRoomNumbers);
  }, []);

  return (
    
    <div className="App">
      <h1>部屋ステータス変更画面</h1>
      <RoomSerch setRoomNumbers={setRoomNumbers} />
      <RoomDisplay roomsList={roomsList} roomNumbers={roomNumbers} changeRoomStatus={changeRoomStatus} />
    </div>


  );
}

export default App;

