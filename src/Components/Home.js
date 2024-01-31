import {useEffect} from 'react'
import "./Components.css"


function Home() {
    useEffect(()=>{
        document.title="Firma Digital"
        document.getElementsByTagName("META")[3].content="Proyecto de Firma Digital Simple - Pedro Quijada";
      }, [])
      
        return (
          <div>
      <div>

      <div class="logohome"><br/><img src="../firmavirtual_logo.png"  height="250" width="250" /></div>
         </div>
      
          </div>

        );
}

export default Home;