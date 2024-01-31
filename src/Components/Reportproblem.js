import {useEffect} from 'react'
import "./Components.css"


function Reportproblem() {
    useEffect(()=>{
        document.title="Report a Problem"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div  >
      <div>
      <h1>Report a Problem</h1>
      
      <p>
      Si encuentra un error o bug en la APP puede enviar un correo a email @ <span style={{color:'blue'}}>quijadap@gmail.com. </span>
Tu Email Subject debe ser "Problema con la App Firma Digital"
      
      </p>
      
      </div>
          </div>
        );
}

export default Reportproblem;