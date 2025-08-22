"use client"

import { createContext, useEffect, useState } from "react"
import "../style/components/playerBar.scss"
import PlayerSite from "./PlayerSite"
import PlayerTest from "./PlayerTest"

 export const UserContext = createContext()

export default function Player({token, uri, children}){
  

    
    const [player,setPlayer] = useState()
    const [playingUri, setPlayingUri] = useState("")
    const [song, setSong] = useState("")
    const [time, setTime] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [playOpen, setPlayOpen] = useState(false)
    const [actualLink, setActualLink] = useState("")
    const [actualTime, setActualTime] = useState(0)
    const [paused, setPaused] = useState(false)
    const [songDuration, setSongDuration] = useState(0)
    const [actualPlayingUri, setactualPlayingUri ] = useState("")
    const [imgUrl, setImgUrl] = useState({})
 

  let bar;
    

   
    useEffect(()=>{

        const script = document.createElement("script")
        script.src = "https://open.spotify.com/embed/iframe-api/v1"
        document.body.appendChild(script)
      
      
      
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
      uri: uri,
      height: 0,
      width: 0
    };
  const callback = (EmbedController) => {

    setPlayer(EmbedController)
  };
  IFrameAPI.createController(element, options, callback);
};







   

 

  // Ready

    },[])


    const playerObject = {
        ...player,
        playingUri,
        setPlayingUri, 
        song,
        setSong,
        setTime,
        playing,setPlaying,
        setActualLink,
        paused,
        token: token.value,
        setSongDuration, 
        setImgUrl,
    }

   let interval 
   const actualSong = song;
//her er min listener der opdatere spiller baren
  player?.addListener('playback_update', e => {
     setPaused(e?.data?.isPaused)
    
    setactualPlayingUri(e?.data?.playingURI)
    
    if(e.data.isPaused == true){
      setPaused(true)
    }else{
      setPaused(false)
    }
    let seconds = (e.data.position/ 1000)
    setActualTime(seconds)
    
    const duration = e.data.duration / 1000
    setSongDuration(duration)
    let time = seconds / duration *100
   
    

    document.querySelector(".playerBar__line").style.width = time + "%"
    document.querySelector(".player__rangeInput").style.width = time + "%"
    document.querySelector(".player__playerInputButton").style.marginLeft = time + "%"
  
});


  player?.addListener('ready', ({ device_id }) => {
  });
   
    player?.addListener('playback_started', e => {
     
     
      

});

   
function addTime(){

    setTime((prevState) => prevState + 1);

}


   


    return (
    <>
   
    {playOpen? <PlayerSite  playerState={player} isPaused={paused} actualTime={actualTime} duration={songDuration} setPlayOpen={setPlayOpen} token={token.value} id={actualLink}></PlayerSite>: ""}
    <PlayerSite playerState={player} style={{"display":"none"}}></PlayerSite>
   
    
    
<div id="embed-iframe"></div>

<UserContext.Provider value={playerObject}>
{children}
</UserContext.Provider>


{playingUri &&<article className="playerBar" style={{backgroundImage: `url(${imgUrl})`}} onClick={()=>{
  setPlayOpen(true)
}}>
  <div className="playerBar__overlay"></div>
    <h2 className="playerBar__heading">{song}</h2>
    <div className="playerBar__info" style={{zIndex: 1000}} onClick={(e)=>{
      //gør sådan at den ikke afspiller fordi man trykker på baren
        e.stopPropagation()
        console.log("client",e.clientX)
        let touchPoint
        //hvis client x er over 900 vil den også fejle da det max width på baren er 900px
        // så skal jeg finde ud af hvor meget det tal er i frohold til 900
        
        
          touchPoint = e.screenX
        
        console.log(window.innerWidth)
        let allWidth = window.innerWidth - 32
        
        console.log(allWidth)
        console.log(songDuration)
        //her får jeg procent ud af hvor meget man har spolet frem
        const procent = (touchPoint/allWidth) 
        console.log(procent)
        console.log("gange",songDuration*procent)
        //nu skal vi så tage det antal procent af sangens varighed
        const percent = songDuration*procent
        player.seek(percent)

        console.log(procent)

      
    }}>
          <div className="playerBar__line" style={ {width: time + "px"}} ></div>
    </div>
    
    
</article>
}

</>



)

}