import {useEffect} from 'react'
import "./Components.css"


function Upload() {
    useEffect(()=>{
        document.title="Subir un Archivo"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div  >
      <div>
      <h1>Subir un Archivo</h1>
      
      <p>
      Subiendo un Archivo @ <span style={{color:'blue'}}>contact@musk-technology.com. </span>
Your email subject line should be "problem in the reactdeveloper.pk"
      
      </p>
      
      </div>

         </div>
        );
}

export default Upload;
