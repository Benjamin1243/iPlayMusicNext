"use client"
import { useState } from "react"
import "../style/components/imageSlideScroller.scss"
export default function ImageSlider({items, actual, setActual}){
    const [actualCheck, setActualCheck] = useState(actual)
    console.log(actual)
  
   
    return(
        
         <div className="imageSlideScroller">
    
   <h2 className="imageSlideScroller__Holeheading">Playlist</h2>
    <img className="imageSlideScroller__backGroundImg" src="/sound-wave.png" alt=""/>
 <div className="imageSlideScroller__flexDiv">
        <img onClick={()=>{upgrade("minus")}}  className="imageSlideScroller__img imageSlideScroller__img--little" src={items?.[actual?.[0]]?.images[0]?.url} alt=""/>
        <div><img style={{zIndex:1000}} onClick={()=>{alert("er")}}  className="imageSlideScroller__img" src={items?.[actual?.[1]]?.images[0]?.url} alt=""/>
        <h3 className="imageSlideScroller__heading">{items[actual + 1]?.name}</h3></div>
        <img style={{zIndex:1000}} onClick={()=>{upgrade()}} className="imageSlideScroller__img imageSlideScroller__img--little" src={items?.[actual?.[2]]?.images[0].url} alt=""/>
        </div>
    </div>
    )

    function upgrade(value){
        let nyArray = []
        console.log(actualCheck)
        console.log(actual[0])
        
        actualCheck.forEach((element,index) =>{
            console.log("element", element)
            if(value == "minus"){
              
                nyArray[index] = actualCheck[index] -1  
                if(element == 0){
               nyArray[index] = items.length -1
                 console.log("index",nyArray[index])
            } 
            }else{
            nyArray[index] = actualCheck[index] +1   
            if(element == items.length -1){
               nyArray[index] = 0   
            } 
        }
            
            setActualCheck(nyArray)
        })
       console.log("actualCjheck",actualCheck)
          console.log("items lengh", items.length -1)
        setActual(nyArray)
        
       
    }
}