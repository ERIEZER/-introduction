import React, { useState } from "react";
import Profile from "./Profile";
import Custom_Buttom from "./Custom_buttom";



function ProfileDetaile({ profiles }) {
    return (
      <div className="test">
        <p>名前: {profiles.name    || "未設定"}</p>
        <p>会社: {profiles.company || "未設定"}</p>
        <p>誕生日: {profiles.year  || "未設定"}</p>
        <p>趣味: {profiles.hobby   || "未設定"}</p>
      </div>
    );
  }

export default ProfileDetaile;