import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { saveNews,unSaveNews } from '../features/saved/savedSlice'


export function SaveButton ({keepNews}) {
   const dispatch = useDispatch()
   const [isSaved,setisSaved] = useState(true)
   const saved = useSelector((store)=>store.save.saved)
   
   useEffect(()=>{
      const keep = saved.findIndex((x)=>x.title === keepNews.title) 
      
      const initialIsSaved= keep !==-1
      setisSaved(initialIsSaved)
   },[keepNews.title])
   
   
   // 

   const handleActionSave=(keepNews)=>{
      if(isSaved){
         dispatch(unSaveNews(keepNews))
         setisSaved(!isSaved)
      }else{
         setisSaved(!isSaved)
         dispatch(saveNews(keepNews));
      }
   }
  return <>
   {
      isSaved ? 
      <button className="ml-[10px] " onClick={()=>handleActionSave(keepNews) }  ><i className="fa-xl text-yellow-400 items-center fa-solid fa-bookmark"></i></button>:
      <button className="ml-[10px]" onClick={()=>handleActionSave(keepNews)}  ><i className="fa-xl items-center fa-regular fa-bookmark"></i></button>
      
   }

   </>
  
}

