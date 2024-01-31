import {useEffect} from 'react'
import "./Components.css"


function Initial() {
    useEffect(()=>{
        document.title="Firma Virtual"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div>
        <img src="firmavirtual_logo.png" alt='Hola Mundo'/>
          </div>

          
        );
}


export default Initial;