import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIdNews,
  getSearchTerm,
} from "../features/news/idNewsSlice";
import {SaveButton} from "../components/SaveButton";
import { NewsPageButton } from "../components/NewsPageButton";


function IndonesiaPage() {
  const dispatch = useDispatch();
  const indNews = useSelector((store)=>store.indNews.idNews);
 
  const searchTerm = useSelector(getSearchTerm);

  useEffect(() => {
    dispatch(fetchIdNews());
  }, [dispatch]);



  const filteredNews = indNews.filter((indoNews) =>
    indoNews.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    
    <div className="md:container md:mx-auto">
      <div>
        <h1 className="text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          News
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredNews?.map((indoNews, idx) => (
          <div
            key={idx}
            className=" mb-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {indoNews.source.name}
            </h5>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {indoNews.title}
            </h3>
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {indoNews.author}
            </h5>
            <p className="mb-3 text-lg font-normal text-gray-900 dark:text-gray-400">
              {indoNews.description}
            </p>
            <div className="flex justify-end">
               <NewsPageButton url={indoNews.url}/> 
              <div className="ml-[10px] mt-1">
                <SaveButton keepNews={indoNews} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
        </>
  );
}

export default IndonesiaPage;
