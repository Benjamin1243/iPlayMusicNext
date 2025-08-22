import { cookies } from "next/headers";
import "../style/components/imagesList.scss"
import GradientHeading from "../components/GradientHeading"
import ImageList from "../components/ImageList"
import ListDetails from "../components/ListDetails"
import NavBar from "../components/NavBar";

export default async function Page(){
     const cookiestore  = await cookies();
            const access_token = cookiestore.get("ipm_acces_token");
            
    const response = await fetch("https://api.spotify.com/v1/search?q=year:2025&type=album&limit=30", {
        headers: {
            'Authorization': `Bearer ${access_token.value}` 
        }
    })
    const data = await response.json();
    console.log(data.albums.items[1].images[0])
    return(
   <>
          <div className="about">
    <GradientHeading heading="All Albums"></GradientHeading>
      <ImageList heading="feutured" images={data.albums.items} ></ImageList>
      <ListDetails heading="New Realese" items={data.albums.items}></ListDetails>
  </div>
  <NavBar></NavBar>
  </>

  
    )
}