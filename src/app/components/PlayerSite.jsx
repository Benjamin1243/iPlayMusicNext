import TopNavBar from "./TopNavBar"
import "../style/pages/player.scss"
import { useEffect, useState } from "react"
import { IoIosSkipBackward } from "react-icons/io";
import { FaBackward } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdSkipNext } from "react-icons/md";


import { IoMdPause } from "react-icons/io";
import { convertSecondToMinutes } from "../functions";




export default function PlayerSite({style, id, token, setPlayOpen, duration, actualTime, playing, isPaused, playerState}){
   
 
const [data, setData] = useState({});



    useEffect((setPlayOpen)=>{
        async function fetcher(){
            const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
                headers:{
                    "Authorization": `Bearer ${token}`

                }
            })
            const fetchData = await response.json();
            console.log(fetchData)
            setData(fetchData)
            
        }
        fetcher()

        

    },[])
   


    return(
        <>
      {/*Her var jeg nødt til at adde ekstra stylling pga. nogle mærkelige render ting */}
          
<div className="player animate__animated animate__fadeIn" style={style}>
    <TopNavBar style={{ zIndex: 10000,position: "fixed", width: "100%", top: 0, ...style}} setPlayOpen={setPlayOpen} 
          navColor={"white"}>{data?.name}</TopNavBar>
    <div className="player__overlay" style={{position: "absolute"}}></div>
    <img className="player__img" src={data?.album?.images?.[0].url} alt=""/>
    <div className="player__middleImgDiv">
        <div className="player__middleImgDivInner">
        <img className="player__middleImg" src={data?.album?.images?.[0].url} alt=""/>
        </div>
    </div>
    <h2 className="player__title">{data?.name}</h2>
    <p className="player__artist">{data?.artists?.[0]?.name}</p>
    <div className="player__playBarDiv">
         <div className="player__playerInputButton"></div>
        <div className="player__range">
            
            <div className="player__rangeInput"></div>
           
        </div>
        <p className="player__minText">{convertSecondToMinutes( actualTime)}</p>    
        <p className="player__minText player__minText--last">{convertSecondToMinutes(duration)}</p>
           <div className="player__playerButtonsDiv ">
        <button className="player__button"><IoIosSkipBackward  className="player__littleIcon"/></button>
        <button className="player__button"><FaBackward  className="player__littleIcon" /></button>
       <button onClick={()=>{
        if(!isPaused){
        playerState.pause()}else{
            playerState.resume()
        }
       }} className="player__button">{!isPaused?  <IoMdPause  className="player__bigIcon" />: <IoMdPlay className="player__bigIcon" />}</button>

      <button className="player__button"> <TbPlayerTrackNextFilled  className="player__littleIcon" /></button>
       <button className="player__button"><MdSkipNext  className="player__littleIcon" /></button>

    </div>
    </div>
 
    </div>

    </>
    )

    }