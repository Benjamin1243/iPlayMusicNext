import { cookies } from "next/headers"
import "../style/pages/detail.scss"
import HashTagLink from "../components/HashTagLink"
import SongPreiew from "../components/SongPreview"
import TopNavBar from "../components/TopNavBar"
import Test from "../components/Player"
import ControlPlay from "../components/controlPlay"
import Player from "../components/Player"
import NavBar from "../components/NavBar"
import "../style/components/songPreviewScroll.scss"




export async function generateMetadata({ searchParams}){
    const {id} = await searchParams
   
    console.log("dette er id" + id)
    const cookiestore  = await cookies();
    const access_token = cookiestore.get("ipm_acces_token");
    
    const repsonse = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers:{
            "Authorization": `Bearer ${access_token.value}`
        }
    })
    const data = await repsonse.json();
    return {
        title: data.name
    }

}


export default async function Page({searchParams}){
     const cookiestore  = await cookies();
    const access_token = cookiestore.get("ipm_acces_token");
       const params = await searchParams


  
     const cookieStore = await cookies()
        const accesToken = cookieStore.get("ipm_acces_token")
    const repsonse = await fetch(`https://api.spotify.com/v1/albums/${params.id}`, {
        headers:{
            "Authorization": `Bearer ${accesToken.value}`
        }
    })
    const data = await repsonse.json();
    
   
console.log(data.uri)

return(
    
    <>
    
    <TopNavBar navColor={"white"}>{data.name}</TopNavBar>
    
    <div className="introDiv">
    <h2 className="introDiv__heading">{data?.name}</h2>
    <p className="introDiv__text">{data.total_tracks} song(s) </p>
    <div className="introDiv__gradientDiv"></div>
    <img className="introDiv__img" src={data?.images[0].url} alt=""/>

    <div className="introDiv__bottomDiv">
        <p className="introDiv__bottomText">Genres Hashtag</p>
        <div className="introDiv__linkFlex">
            {data.genres.map((element)=>{
                return <HashTagLink  tag={element}></HashTagLink> 
            })}
            <HashTagLink  tag={data.label}></HashTagLink> 
         
           
        </div>
    </div>
</div>


  <section className="songPreviewScroll">
  {data.tracks.items.map((song, index)=>{
    console.log(song)
 
  return <SongPreiew id={song?.id} key={index} uri={song.uri} playTime={song.duration_ms} title={song.name} artist={song.artists[0].name}></SongPreiew>
  
  })}
  </section>

 <NavBar></NavBar>
</>

)
    

}