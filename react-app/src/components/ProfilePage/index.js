import React, {useEffect, useState} from "react";
import { useParams } from "react-router";


export default function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState()
  const [picture, setPicture] = useState()

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setUser(data)
    }


    fetchUser()
  }, [])

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

  return (
    <div>
      <h1>Welcome to AirBrB</h1>
      <div><img src={picture}/></div>
    </div>
  );
}
