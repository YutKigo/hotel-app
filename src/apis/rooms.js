import axios from "axios";
const roomsDataUrl = "http://localhost:3100/rooms";

//サーバ上のすべてのroomsデータを取得する関数
export const getAllRoomsData = async () => {
    const response = await axios.get(roomsDataUrl);
    return response.data;
};

/*
//引数todoをサーバ上のデータベースから削除する関数
export const deleteTodoData = async (id) => {
    await axios.delete(`${todoDataUrl}/${id}`)
    return id; //削除したTodoのidを返す
}*/



//引数の部屋番号の部屋情報をサーバ上で引数roomに更新する関数
export const updateTodoData = async (id, room) => {
    const responce = await axios.put(`${roomsDataUrl}/${id}`, room);
    return responce.data;
}