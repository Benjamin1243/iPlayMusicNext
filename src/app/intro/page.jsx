"use client"
import Link from "next/link";
import LogoLink from "../components/LogoLink";
import { MdWifiTethering } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoIosMusicalNote } from "react-icons/io";
import "../style/pages/intro.scss"
import { useState } from "react";
import { BsBroadcast } from "react-icons/bs";




export default function Intro() {
    const [actual, setActual] = useState(0)
const information = [{heading: "Where Words Fail,Music Speaks", text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend."}, {heading: "No Music No Life", text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend."}, {heading: "Peace.Love Music", text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend."}]

     function hej(number){

        setActual(number)
        }
    const data = [1,1,1]

    function test(index){
        if(index == 0 ){
            return <BsBroadcast />

        }
         if(index == 1 ){
            return  <FaHeart />

        }
        if(index == 2){
            return <IoIosMusicalNote />

        }
        
    }

    return (
        <section className="intro">
            <img className="intro__img" src="/colorWave.png" alt="" />
            <h1 className="intro__heading">{information[actual].heading}</h1>
            <p className="intro__text">{information[actual].text }</p>
            <div className="intro__flexDiv">
                {data.map((element,index)=>{
                    return( 
                        <LogoLink onclickFunc={function(){
                            hej(index)
                        }}  
                         key={index}
                         givenClass={actual == index? "logoLink--red": ""}
                         >
                         {test(index)}
                    
                        </LogoLink>
                    )
                })}
               


            </div>
            <Link className="intro__link" href="/featured">Skip</Link>
        </section>)
}