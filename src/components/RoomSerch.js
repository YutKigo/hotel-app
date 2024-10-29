//RoomSerchコンポーネント
export const RoomSerch = ({ setRoomNumbers }) => {
  const handleInputChange = (event) => {
    const input = event.target.value;
    if (input) {
      //textareaに入力されている文字列をroomNumbers配列にセット
      setRoomNumbers(input.split(",").map((num) => num.trim()));
    } else {
      //textareaに何も入力されていないときは全ての部屋を表示
      const initialRoomNumbers = [];
      for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 15; j++) {
          initialRoomNumbers.push(`${i * 100 + j}`);
        }
      }
      initialRoomNumbers.splice(initialRoomNumbers.indexOf("914"), 2); // 914と915を削除
      setRoomNumbers(initialRoomNumbers);
    }
  };

  return (
    <textarea className='serch-textarea' placeholder='Serch for Room Number (e.g., 201, 202)' onChange={handleInputChange} />
  );
};