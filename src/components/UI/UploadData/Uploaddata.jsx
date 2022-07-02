import React,{useState} from 'react'
import { storage } from '../../../firebase';
import {ref,uploadBytes} from 'firebase/storage';
import {v4} from "uuid";
import "./uploaddata.css"
const Uploaddata = () => {
    const [uploadimage,setUploadImage]=useState('');
    const uploadfile=()=>{
        if(uploadimage==null) return;

        const imageRef=ref(storage,`images/${uploadimage.name + v4()}`);
        uploadBytes(imageRef,uploadimage).then(()=>{
            alert("yes upload successfully")
        })
    }
  return (
    <>
    <div className='App'>
    <div className='box'>
    <input className='in__btn' type="file" onChange={(e)=>{setUploadImage(e.target.files[0])}}/>
    <button className='up__btn  gap-1' onClick={uploadfile}> Upload data</button>
    </div>
    </div>
    </>
  )
}

export default Uploaddata
