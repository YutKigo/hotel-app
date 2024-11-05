import axios from "axios";
const roomsDataUrl = "http://localhost:3100/rooms";

//サーバ上のすべてのroomsデータを取得する関数
export const getAllRoomsData = async () => {
    const response = await axios.get(roomsDataUrl);
    return response.data;
};

//引数の部屋番号の部屋情報をサーバ上で引数roomに更新する関数
export const updateRoomData = async (id, room) => {
    const response = await axios.put(`${roomsDataUrl}/${id}`, room);
    return response.data;
}