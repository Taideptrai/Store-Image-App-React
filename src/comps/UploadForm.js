import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
const UploadForm = ({user}) => {
    console.log('user in uploadform', user)
    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)
    const types = ["image/png","image/jpeg"]
    const changeHandler = (e) =>{
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError("Please select an image file(png or jpeg)");
        }
    }
    

    return(
    <form className="uploadForm">
        <input id="input" type="file" onChange={changeHandler}/>
        <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar user={user} file={file} setFile={setFile}/>}
        </div>
    </form>
    )
}

export default UploadForm;