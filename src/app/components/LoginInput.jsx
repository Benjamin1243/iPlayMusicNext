import "../style/components/loginInput.scss"
export default function LoginInput({label, placeholder ,children}){
    return(
           <div className="loginInput">
    <label className="loginInput__label" >{label }</label>
    <input className="loginInput__input" placeholder={placeholder} type="text"/>
  
    {children}
    
    


 </div>
    )
}