import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import "./profilePage.css"


export default function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState()
  const [picture, setPicture] = useState()

  const picClick = () => {

  }

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setUser(data)
    }


    fetchUser()
  }, [id])

  useEffect(() => {
    async function fetchImg(data) {
        const image = await fetch(`/api/users/picture/${data.id}`)
        const img_url = await image.json()
        if(img_url) setPicture(img_url.img_url)
      }
      if(user){
        fetchImg(user)
      }
  },[user])

  const username = user?.username

  return (
    <div className="profile_container">
    <div className="profile_card">
      <img src={picture} className="profile_picture"/>
      <button className="picture_button" onClick={picClick}>Upload a Picture</button>
      <div className="user_confirmed">{username} Confirmed</div>
      <div><i className="fas fa-check-square"></i> E-Mail</div>
    </div>
    <div className="profile_info">
      <h1 className="user_greeting">Hi, I'm {username}</h1>
      <div><i className="fas fa-star"></i> Reviews</div>
    </div>
    </div>
  );
}
