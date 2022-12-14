import { getDownloadURL, ref,uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import {storage} from "./firebase";


function App() {
  const [progress , setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
   if(!file) return ;
   const storageRef = ref(storage,`/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef,file);

  uploadTask.on("state_changed",(snapshot)=>{
    const prog = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    setProgress(prog);
  },(error) => console.log(error),
   ()=> {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
   });
  });
};
  return (
    <div className="App">
      <h1> Manish kumar</h1>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr/>
      <h2>uploading done { progress }% </h2>
    </div>
  );
}

export default App;
