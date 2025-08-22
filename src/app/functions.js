export function convertSecondToMinutes(seconds){
   let minutes = seconds/60
  
   let splitMinutes = minutes.toString()
  
   let secondsDecimal = splitMinutes.split(".")
  
   let newSeconds = Number(0+ "."+secondsDecimal[1]) * 60
   let secondsConvertetDeciam = newSeconds.toString().split(".")[0] 
   if(secondsConvertetDeciam.length == 1){
    secondsConvertetDeciam = 0 + secondsConvertetDeciam 
   }
   return secondsDecimal[0] + " : " + secondsConvertetDeciam


}