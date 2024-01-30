import React, { useState, useEffect} from 'react';

const FileUploadFunction = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Aquí puedes agregar la lógica para subir el archivo al servidor
    console.log('Subir archivo:', selectedFile);
  };

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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir</button>
    </div>
    </div>
    </div>
  );
};

export default FileUploadFunction;
