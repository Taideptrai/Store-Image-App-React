import React from 'react';

const Modal = ({selectedImg,setSelectedImgfromModal}) =>{
    const handleClick = (e) =>{
    if (e.target.classList.contains("backdrop")){
        setSelectedImgfromModal(null); 
       }
    }
    return(
        <div className="backdrop" onClick={handleClick}>
           <img src={selectedImg} alt="enlarge pic"/>      
        </div>
        
    )
}
export default Modal;