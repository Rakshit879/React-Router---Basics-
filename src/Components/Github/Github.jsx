import React, { useState, useEffect } from 'react';
import "../Github/Github.css";

export default function Github() {
    const [info, setInfo] = useState({
        name: "",
        userName: "",
        followers: 0,
        imgUrl: ""
    });
    useEffect(() => {
        // fetch("https://api.github.com/users/Rakshit879")
        //     .then(response => response.json())
        //     .then(data => setInfo({ name: data.name, userName: data.login, followers: data.followers, imgUrl: data.avatar_url }))
        testfunc();
    }, [])
    async function testfunc(){
        let api = await fetch("https://api.github.com/users/Rakshit879")
        let apijson = await api.json();
        setInfo({ name: apijson.name, userName: apijson.login, followers: apijson.followers, imgUrl: apijson.avatar_url })
    }
    return (
        <div className="github_container">
            <div className="github_info">
                <div className="info_paras">
                    <p className='github_para'>Github Name: {info.name}</p>
                    <p className='github_para'>Github UserName: {info.userName}</p>
                    <p className='github_para'>Github Followers: {info.followers}</p>
                </div>
                <img src={info.imgUrl} alt="github profile image" id='github_image'/>
            </div>
        </div>
    )
}