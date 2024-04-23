import React, {useState, useEffect} from "react";

function ScreenSize () {
   const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
   })

        const detectSize = () => {
         detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
         })  
        }
         useEffect(() => {
            window.addEventListener('resize', detectSize)

            return() => {
                window.removeEventListener('resize', detectSize)
            }
         }, [windowDimension])
        
    return (
        <div>
            <p>Ширина: <strong>{windowDimension.winWidth}</strong></p>
            <p>Высота: <strong>{windowDimension.winHeight}</strong></p>
        </div>
    )
}


export default ScreenSize