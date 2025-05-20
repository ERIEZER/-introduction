import React from "react";
// import custom_buttom from "./custom_buttom";

function Profile  ()  {

    // dict of lists 
    // const profile_dict = {

    //     "kumatanni": this_pro_url ,
    //     "ebara" : this_pro_url ,
    //     "Yui" : this_pro_url ,
    //     "wada" : this_pro_url,
    //     "kan" : this_pro_url,
    //     "choumanka" : this_pro_url ,
    //     "david" : this_pro_url 

    // };

    // get list form buttom function 
    // let get = document.getElementById("goToProfile");
    // let profile_name = get;


    // buttom function 
    // loop the dict and return the url for profile
    // const goTOProfile = ( profile_name , profile_dict ) => {
        
    //     const fliter_dict = profile_dict.filter(( name , output) => {
    //         if ( profile_name == name ){
    //             return output;
    //         }

    //     });
        
    // }

    return (
        <div>
            <div className='main-profile'> 
                < img src = " ../assets/profile_img/" />
                <p className="">私のプロフィール

                    test
                </p>
                 {/* <Buttom className = "profile_buttom" //onPress = { goTOProfile() } 
                > 
                テスト

                </Buttom> */}
            </div>
        </div>
    );

}


export default  Profile;