import {useState,useEffect} from 'react'
import "./Components.css"


function Upload() {

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Aquí puedes agregar la lógica para subir el archivo al servidor
    console.log('Subir archivo:', selectedFile);

    var fileInput = document.getElementById('fileUp');
    var filePath = fileInput.value;
    var allowedExtensions = /(.pdf|.docx)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Error: Por Favor Subir un Archivo PDF o Word');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
              var FileExt = filePath.split('.').pop().toUpperCase();
              var fileShow = 'fileShow'+FileExt+'.jpg';
                document.getElementById('imagePreview').innerHTML = '<br/><br/><img src="../'+fileShow+'" height="100" width="100"/>';
                document.getElementById('Nombre_Archivo').innerHTML = '<b>'+fileInput.files[0].name+'</b>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
 
  };
    useEffect(()=>{
        document.title="Subir un Archivo"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div  >
      <div>
      <h1>Subir un Archivo</h1>
       
      <div>
      <input type="file" onChange={handleFileChange} id="fileUp"/>
      <button onClick={handleUpload}>Subir</button>
    </div>
    <div id="imagePreview"><br></br></div>
    <div id="Nombre_Archivo"></div>
      </div>

         </div>
        );
}

export default Upload;
