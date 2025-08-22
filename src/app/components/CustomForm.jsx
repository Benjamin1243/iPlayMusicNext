"use client"
import { Chicle } from "next/font/google"
import "../style/components/customForm.scss"


export default function CustomForm({submit, children}){
    return(
        
        <form className="customForm" onSubmit={submit} >
        {children}
        <input className="customForm__submit" type="submit"/>
    </form>
    )
}