import {useEffect} from 'react'
import "./Components.css"


function Home() {
    useEffect(()=>{
        document.title="reactdeveloper.pk"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div>
      <div>
         </div>
      
          </div>

        );
}

export default Home;