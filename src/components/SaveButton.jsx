import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { saveNews,unSaveNews } from '../features/saved/savedSlice'


export function SaveButton ({keepNews}) {
   const dispatch = useDispatch()
   
   const saved = useSelector((store)=>store.save.saved)
   const keep = saved.findIndex((x)=>x.title === keepNews.title) 
   
   const [isSaved,setisSaved] = useState(keep>=0)
   
   
   // 

   const handleActionSave=(keepNews)=>{
      if(keep >= 0){
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
      <button  onClick={()=>handleActionSave(keepNews) }  ><i className="fa-xl text-yellow-400 items-center fa-solid fa-bookmark"></i></button>:
      <button  onClick={()=>handleActionSave(keepNews)}  ><i className="fa-xl items-center fa-regular fa-bookmark"></i></button>
      
   }

   </>
  
}

