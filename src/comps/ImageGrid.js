import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
import { projectFirestore } from '../firebase/config';


const ImageGrid = ({user,setSelectedImg}) => {
    console.log('imageGrid render')
    const handleClickDeleteImage = (e,data) =>{
        e.stopPropagation();
        if (window.confirm("Delete the item?")){ //delete item in Firebase with data.id
            projectFirestore.collection(user).doc(data).delete().then(function() {
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        }
        else{
            return;
        }
       
    }
    const { docs } = useFirestore(user);
    console.log(docs)
    return(
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <motion.div className="img-wrap" key={doc.id}
                layout
                onClick={()=>setSelectedImg(doc.url)}
                >
                <motion.img src={doc.url} alt="img-uploaded"
                initial={{  opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1}}
                />
                <span className="close" onClick={(e)=>handleClickDeleteImage(e,doc.id)}>x</span>   
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid; 