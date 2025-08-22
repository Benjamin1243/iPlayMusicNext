"use client"
import Image from "next/image";
import 'animate.css';


import "./style/variabels.scss"
import "./style/components/splashScreen.scss"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

        const router = useRouter();


  setTimeout(function(){
         router.push("/login")

  }, 3000)


  return (
    
   <section className="splashScreen animate__animated animate__bounceInDown">
     
    <img className="splashScreen__image animate__animated" src="/music-logo-solid.png" alt=""/>
    <h1 className="splashScreen__heading animate__animated">iPlayMusic</h1>
  
    </section>

    );
}