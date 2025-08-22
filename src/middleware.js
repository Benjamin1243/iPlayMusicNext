import { NextResponse } from "next/server";

export default async function middleware(request){
    const { pathname } =request.nextUrl
    
    const url = "https://accounts.spotify.com/api/token";

    if(pathname.includes("/login") || pathname.includes("/api")){

        if(request.cookies.has("ipm_acces_token")){
            return NextResponse.redirect(new URL("/featured", request.url))

        }
        return;
    }
    if(!request.cookies.has("ipm_acces_token") ){
        if(!request.cookies.has("ipm_refresh_token")){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    const response = await fetch(url,{
         method: "POST",
        body: new URLSearchParams({
         grant_type: "refresh_token", 
         refresh_token : request.cookies.get("ipm_refresh_token").value,
         client_id : process.env.CLIENT_ID
        }),
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET)}`
        },
       
    })
   
    const data = await response.json();
    console.log("erer")
    const res = NextResponse.next()
    res.cookies.set("ipm_acces_token", data.access_token, {
        maxAge: data.expires_in
    });

    return res


    }
    return;
}
export const config= {
    matcher:["/", "/featured", "/albums", "/playlist", "/allAlbums", "/login"]

}
