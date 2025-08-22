"use client"
import { MdArrowBackIos } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import "../style/components/topNavBar.scss"
import { useRouter } from 'next/navigation'


export default function TopNavBar({children, navColor, func, setPlayOpen, style}){
    

    const router = useRouter();
    return(
        
        <section  className="topNavBar" style={navColor == 'white' ? {color: 'white', background:" linear-gradient(#000 10%, rgba(255, 255, 255, 0) 100%)", ...style} : {...style} }>
   
    <MdArrowBackIos  className="topNavBar__icon" onClick={()=>{
        document.querySelector(".player").classList.add("fadeOut")
        setTimeout(()=>{
            setPlayOpen ? setPlayOpen(false)  :router.back()
        }, 1000)
        
        }} />

<h1 className="topNavBar__heading">{children}</h1>
 <IoIosSearch className="topNavBar__icon" />

</section>
    )
    
}