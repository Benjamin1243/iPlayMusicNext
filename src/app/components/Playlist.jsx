"use client"

import SongPreiew from "../components/SongPreview";
import TopNavBar from "../components/TopNavBar";
import ImageSlider from "../components/ImageSlider";
import { useEffect, useState } from "react";
import Test from "./Player";
import Player from "./Player";


export default  function PlayList({data, token}){
   
    const [actual, setActual] = useState([0,1,2])
    console.log("actaul i Playlist ", actual)
    const [songs, setSongs] = useState([])

   
    useEffect(()=>{
        async function fetcher(){
           const response = await fetch(data?.items?.[actual[1]]?.tracks?.href,{  headers:{
            "Authorization" : `Bearer ${token.value}`
        }
       
    })
    const result = await response.json()
    setSongs(result)
        }
        fetcher()
    }, [actual])
    
    
    return(
        <>
        <TopNavBar>Playlist</TopNavBar>
        <ImageSlider items={data?.items} actual={actual} setActual={setActual}></ImageSlider>
       
      
       
          
          {songs?.items?.map((element, index)=>{
           
         
          return <SongPreiew id={element.track.id} key={index} uri={element.track.uri} playTime={element.track.duration_ms} title={element.track.name} artist={element.track.artists[0].name}></SongPreiew>
          
          })}
        
        
        </>
    )
}