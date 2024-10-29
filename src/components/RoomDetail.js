import React from 'react';
import { useParams } from 'react-router-dom';

export const RoomDetail = () => {
  const { roomId } = useParams();  // URLパラメータから部屋番号を取得

  return (
    <div>
      <h2>部屋詳細設定画面</h2>
      <p>部屋番号: {roomId}</p>
      {/* 部屋の詳細設定をここで表示・操作 */}
    </div>
  );
};

export default RoomDetail;