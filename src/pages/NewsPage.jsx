import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProNews } from "../features/news/proNewsSlice";
import {fetchIdNews} from "../features/news/idNewsSlice";
import { fetchCovNews } from "../features/news/covNewsSlice";

import { SaveButton } from "../components/SaveButton";
import { NewsPageButton } from "../components/NewsPageButton";

import { useLocation } from "react-router-dom";


function NewsPage({setOfNews}) {
 
  const dispatch = useDispatch();
  // to get data based on pathName
  const {pathname} = useLocation()
  // to set NewsPagesTitle based on pathName
  const [newsPagesTitle,setNewsPageTitle] = useState('')
  
  useEffect(() => {
    switch(pathname){
      case '/':
        dispatch(fetchIdNews());
        setNewsPageTitle('News')
        break
        case '/programming':
          dispatch(fetchProNews());
          setNewsPageTitle('Programming News')
        break
        case '/covid19':
          dispatch(fetchCovNews());
          setNewsPageTitle('COVID-19 News')
        break
      default:break
    }
   
  }, [pathname]);


  return (
    <div className="md:container md:mx-auto">
        <div>
        <h1 className="text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          {newsPagesTitle}
        </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {setOfNews?.map((News, idx) => (
            <div
              key={idx}
              className=" mb-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {News.source.name}
            </h5>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {News.title}
            </h3>
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {News.author}
            </h5>
            <p className="mb-3 text-lg font-normal text-gray-900 dark:text-gray-400">
             {News.description}
            </p>
            <div className="flex justify-end">
                <NewsPageButton url={News.url}/> 
                <div className="ml-[10px] mt-1">
                <SaveButton keepNews={News} />
                </div>
              </div>
          </div>
          ))}
        </div>
    </div>
  );
}

export default NewsPage;
