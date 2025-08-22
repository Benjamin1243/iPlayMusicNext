# Dokumentation for iPlayMusic
Benjamin Jasek Smith, WU12

## Sådan kommer du igang
"npm install"

"npm run dev"

https://minadresse.dk/iplaymusic

Jeg har lavet valgfri opgave B

## Tech-stack
* **Next.js**
er et javascript framework, som bruges til blandt andet at arbejde med serverside.
* **React**
er et javascript bibliotek,  
* Git
* TailWind 
* Sass
* animate.css
* web-api fra spotify
* react-icons


## Kode-eksempel
LogoLink component, src/app/components/LogoLink.jxs
```jsx export default function LogoLink({children, givenClass, text,onclickFunc,}){
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

````
# B
Hvis jeg havde en usestate, havde jeg skrevet: Jeg starter med at bruge en usestate, som er en inbygget funktion i react, som returnere et array. med en state og en setter funktion. Usestate tager imod et paramter, som vi kalder initial state. Man bruger useState istedet for normale varialbler, fordi at react re render komponentet, når staten ændrer sig.

USEEffect

#



