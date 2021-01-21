import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({user,file,setFile}) =>{
    console.log('user in ProgressBar',user)
    const {url,progress} = useStorage(file,user);
    useEffect(()=>{
        if (url) {
            setFile(null);
            document.getElementById("input").value = null
        }
    },[url,setFile])
    return(
    <div className="progress-bar" style={{width: progress + '%'}}>
      
    </div>
    )
};
export default ProgressBar; 