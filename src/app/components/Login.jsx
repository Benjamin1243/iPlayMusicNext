"use client"
import CustomForm from "../components/CustomForm";
import LoginInput from "../components/LoginInput";
import LogoLink from "../components/LogoLink";
import "../style/pages/login.scss"
import { BsPersonCircle } from "react-icons/bs";
import { FaHandMiddleFinger } from "react-icons/fa";
import { IoIosKey } from "react-icons/io";
import { FaFingerprint } from "react-icons/fa";
import { useRouter } from "next/navigation";


import "../style/pages/login.scss"
const inputs = [{label: "Username",  icon: "<FaHandMiddleFinger/>", placeholder: "Enter you username" }, {label: "Password",  icon: "FaHandMiddleFinger", placeholder:"Enter you password" }]



export default function Login(){
   
  const router = useRouter();
    function tjekker(evt){
        evt.preventDefault();
        router.push("/intro")
       
    }
    return( <>
        <h1 className="login__heading">Login</h1>
<CustomForm submit={tjekker}>
 {inputs.map((element, index)=>{
    return(
    <LoginInput key={index}   placeholder={element.placeholder} label={element.label}>
       
       {index == 0?<BsPersonCircle className="icon"> </BsPersonCircle>: <IoIosKey className="icon" />}


</LoginInput>)

 })}

</CustomForm>

<LogoLink href="erhh" givenClass={"logoLink--red"} className="logoLink" text="OneTouch-login"><FaFingerprint className="icon" />

</LogoLink>
</>
    )
}