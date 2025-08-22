"use client"
import Link from "next/link";
import "../style/components/navBar.scss"
import { CiWavePulse1 } from "react-icons/ci";
import { IoMdMicrophone } from "react-icons/io";
import { IoMdWifi } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { LuSquareMenu } from "react-icons/lu";
import { PiPlaylistFill } from "react-icons/pi";

import { TfiMenuAlt } from "react-icons/tfi";



import { MdOutlineStars } from "react-icons/md";
import { usePathname } from "next/navigation";





export default function NavBar() {
    const pathname = usePathname()

    return (
        <>
            
            <nav className="navBar">
                <ul className="navBar__list">
                   
                    <li className="navBar__listItem"> <Link   href="featured"><CiWavePulse1 className={`navBar__icon ${pathname == '/' ? 'navBar__icon--active' : ''}`} /></Link>
                    </li>
                    <li className="navBar__listItem"><Link href="/allAlbums" className="navBar__link"><TfiMenuAlt className={`navBar__icon ${pathname == '/allAlbums' ? 'navBar__icon--active' : ''}`} /></Link></li>
                    <li className="navBar__listItem"> <Link href="/featured" className="navBar__link"><MdOutlineStars className={`navBar__icon ${pathname == '/featured' ? 'navBar__icon--active' : ''}`} />
                    </Link></li>
                    <li className="navBar__listItem"> <Link href="/playlist" className="navBar__link"><PiPlaylistFill className={`navBar__icon ${pathname == '/playlist' ? 'navBar__icon--active' : ''}`} />

                    </Link>
                    </li>
                    <li className="navBar__listItem"> <button className="navBar__button" onClick={()=>{
                        document.querySelector("html").classList.toggle("dark")
                    }}><CgDarkMode className="navBar__icon" />
 </button>
                    </li>
                    
                    
                </ul>
            </nav>
        </>
    )
}