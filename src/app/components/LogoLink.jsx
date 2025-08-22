
import { Children } from "react"
import "../style/components/logoLink.scss"
import { useRouter } from "next/navigation";
export default function LogoLink({children, givenClass, text,onclickFunc,}){
    const router = useRouter();
    return(
        <a href={
            "https://accounts.spotify.com/authorize?"
            + "response_type=code"
            + `&client_id=${process.env.CLIENT_ID}`
            + "&scope=user-read-private%20user-read-email"
            + `&redirect_uri=${process.env.CALLBACK_URL}`

        }>
        <button   className={`logoLink ${givenClass ? givenClass : "" }`} onClick={onclickFunc} >
        {children}
    
       
    </button>
     <p  className="logoLinkText" >{text}</p>
     </a>
    )

}