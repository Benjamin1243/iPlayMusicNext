import { cookies } from "next/headers";
import PlayList from "../components/Playlist";
import NavBar from "../components/NavBar";

export default async function Page() {
    const cookiestore  = await cookies();
        const access_token = cookiestore.get("ipm_acces_token");

    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
            "Authorization": `Bearer ${access_token?.value}`
        }

    })
    const fetchData = await response.json();
    const data = fetchData
    return(
        <>
        <PlayList data={data} token={access_token}></PlayList>
        <NavBar></NavBar>
        </>
    )
    



}

