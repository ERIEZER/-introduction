import React, { useState } from "react";
import Custom_buttom from "./Custom_buttom";
import ProfileDetaile from "./ProfileDetaile";


import './styles/Profile.css';




const profiles = {

  Asisu: {
    name: "khdka Aashish",
    jp_name: "カドカ アシス",
    company: "日本ITビズネスカレッジ",
    year: "1999/09/02",
    hobby: "",
    prof_img: "",
  },
  mana: {
    name: "Mana Iizuka",
    jp_name: "飯塚 愛菜",
    company: "きらぼしシステム株式会社",
    year: "2002/06/09",
    hobby: "",
    prof_img: "",
  },
  ebara: {
    name: "yuki ebara",
    jp_name: "江原 裕基",
    company: "(株)シードライブ",
    year: "1999/09/02",
    hobby: "演劇（演じるのも観るのも）、イラストを描くこと、読書",
    prof_img: "",
  },
  kan: {
    name: "Yuichiro Kan",
    jp_name: "菅 悠一郎",
    company: "株式会社khronos",
    year: "1996/09/06",
    hobby: "読書",
    prof_img: "",
  },
  kumagai: {
    name: "KumagaiKazuki",
    jp_name: "熊谷 一希",
    company: "株式会社khronos",
    year: "2003/02/02",
    hobby: "",
    prof_img: "",
  },
};



function Profile() {
  

  const [selectedProfile, setSelectedProfile] = useState(null);


  return (
    <div className="profiles-container">
      {Object.values(profiles).map((person, index) => (
                <div
            key={index}
            className="main_profile"
            >
            
                <img
                className="profile-avatar"
                src={person.prof_img || "/docs/images/blog/image-1.jpg"}
                // alt={`${person.name}のプロフィール画像`}
                />
            

                <div className="p-5">
                    <p className="profile-name">
                    {person.jp_name}
                    {/* </p>
                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    名前：{person.jp_name} */}
                    </p> 
                    {/* <p className="">
                    会社名：{person.company}
                    </p> */}
                    {/* <p className="">
                    誕生日：{person.year}
                    </p>
                    {person.hobby && (
                    <p className="">
                        趣味： {person.hobby}
                    </p> */}
                    <Custom_buttom onClick={() => setSelectedProfile(person)} />
                </div>
            </div>
      ))}


      {/* 詳細プロフィールを表示 */}
      {selectedProfile && <ProfileDetaile profile={selectedProfile} />}
      </div>
  );
}


export default Profile;
