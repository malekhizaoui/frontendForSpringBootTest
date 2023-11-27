import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./transcription.css";
import axios from "axios";
function Transcription() {
  const [audio_url, setAudio_url] = useState("");
  const [text, setText] = useState("");
  const [id, setid] = useState("");
  const [isLoad,setIsLoad]=useState(false)
  const [messageError,setMessageError]=useState("")
  const handleUpload = async () => {
    await axios
      .post("http://localhost:8080/transcribe", { audio_url })
      .then(async (res) => {
        setid(res.data.id);
        setIsLoad(true)
        console.log("lasjdhglajdhvLQSJHVD");
      }).catch((err)=>{
        setMessageError("this audio url cannot coneverted to text please try another URL")
      })
  };

  const getText = () => {
    setTimeout(() => {
      if (id.length > 0) {
        axios.get(`http://localhost:8080/transcript/${id}`).then((response) => {
          console.log("response", response);
          if(response.data.text!==null){
            setIsLoad(false)

          }
            setText(response.data.text);
            console.log("ssSSSSSSSSSSSSSSSSSSSS");

          
        });
      }
    }, 5000);
  };
  useEffect(() => {
    getText();
  });
console.log("id",id);
console.log("text",text);
  return (
    <div className="container-transcription">
      <h2>Convertir un fichier audio en texte</h2>
      <div className="upload-section">
        <label htmlFor="audioFile">Sélectionner un fichier audio :</label>
        <input
          type="text"
          id="audioFile"
          onChange={(event) => {
            setAudio_url(event.target.value);
          }}
        />
        <p>{messageError}</p>
        <button onClick={handleUpload}>Convertir en texte</button>
        {isLoad&&<div><div class="loader"></div><p>just wait </p></div>}
        {/* {id.length>0 && text!==null?<p>{text}</p>:id.length>0&&<div class="loader"></div>} */}
        <p>{text}</p>
      </div>
      {/* <p>{text}</p> */}
    </div>
  );
}

export default Transcription;
