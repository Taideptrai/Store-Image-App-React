import {useState,useEffect} from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collectionName) =>{
    const [docs, setDocs] = useState([]);
    useEffect(()=> {
        const unsub = projectFirestore.collection(collectionName) /// function
        .orderBy('createdAt','desc')
        .onSnapshot(snap => { ///subcrible the collection data , if it have change, callback function will be called;
           let documents = [];
           snap.forEach(item => {
               documents.push({...item.data(), id: item.id });
           });
           setDocs(documents)     
        });
    return () => unsub();  //clean up function

    },[collectionName])


    return {docs}
}
export default useFirestore;