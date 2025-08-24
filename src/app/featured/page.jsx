import GradientHeading from "../components/GradientHeading";
import FeaturedCard from "../components/FeaturedCard";
import { cookies } from "next/headers";
import Image from 'next/image'
import TopNavBar from "../components/TopNavBar";
import Head from "next/head";
import NavBar from "../components/NavBar";





export default async function Featured(){
    const cookieStore = await cookies()
    const accesToken = cookieStore.get("ipm_acces_token")
    
    const repsponse = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers:{
            "Authorization" : `Bearer ${accesToken.value}`
        }
       
    })
    console.log("response", repsponse)
     const data = await repsponse?.json()
     

    return(
        <>
       
        <TopNavBar>Feutured</TopNavBar>
        <GradientHeading heading="Featured"></GradientHeading>
        {data?.albums?.items?.map((element, id)=>{
            return (
              
              
                <FeaturedCard key={id} linkId={element?.id} heading={element?.name} img={element?.images[0].url}>
            

                </FeaturedCard>
                
            )
        })}
   {/* <FeaturedCard type="soundrtrack" heading="The Greatest Snowman" img="/album.png"></FeaturedCard>
      <FeaturedCard type="soundrtrack" heading="The Greatest Snowman" img="/hard.png"></FeaturedCard> */}


      <NavBar></NavBar>
      </>
    )
}