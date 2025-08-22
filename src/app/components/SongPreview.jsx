"use client"
import Link from "next/link";
import "../style/components/songPreview.scss"
import { FaPause } from "react-icons/fa";

import { FaCirclePlay } from "react-icons/fa6";
import Test from "./Player";
import { useContext, useEffect, useState, createContext } from "react";
//lige nu hedder min playContext bare UserContext
import {UserContext} from "./Player"
import { convertSecondToMinutes } from "../functions";

export default function SongPreiew({title, artist, playTime, id, uri, play, token}){
     const player = useContext(UserContext);
     const [playing, setPlaying] = useState(false);
     const [time, setTime] = useState(0)
     const [thisImgUrl, setThisImgUrl] =useState({})
     
    
    
      //her komer min player tjekker

 


   
  //min useeefct der sætter pause knap og sætter afpsil knap afhængigt af hvor man er
   useEffect(()=>{
    console.log("id", id)



    if(player?.playingUri == uri){
setPlaying(true)
}else{
    setPlaying(false)
}

   },[player?.playingUri])



   useEffect(()=>{
    async function fetcher(){
            const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
                headers:{
                    "Authorization": `Bearer ${player?.token}`

                }
            })
            const fetchData = await response.json();
            console.log(fetchData.album.images[0].url)

            setThisImgUrl(fetchData.album.images[0].url)}
            fetcher()

   },[id])
   
 
   
    let realPlayTime = playTime /1000


    const handlePlay = () => {
        player.setImgUrl(thisImgUrl)
       player.setPlaying(true)
       player.setActualLink(id)
       player.setSong(title)
       setPlaying(true)
       
        


    // Skift sang og afspil med lille delay for at sikre controlleren er klar
    player?.loadUri(uri);
    
     player?.setPlayingUri(uri)
     player.resume()

     
      
   
  };

  function pauseFunc(){
    
    player.pause()
  
    

  }



    return(
        <>
      


    <article className="songPreview" >
       

{player?.paused == false && player.playingUri == uri?  <FaPause className="songPreview__icon" onClick={()=>{pauseFunc()}} />:<FaCirclePlay className="songPreview__icon" onClick={handlePlay} />}

<div className="songPreview__textDiv">
    <h3 className="songPreview__heading">{ title }</h3>
    <p className="songPreview__artist">{ artist }</p>
</div>
<p className="songPreview__time">{convertSecondToMinutes(realPlayTime) }</p>
</article>
</>)
}

