import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchCovNews, getAllCovNews } from "../features/news/covNewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { saveNews } from "../features/saved/savedSlice";
import { SaveButton } from "../components/SaveButton";
import { NewsPageButton } from "../components/NewsPageButton";



function CovidPage() {
  const dispatch = useDispatch();
  const covidNews = useSelector(getAllCovNews);
  const [isSaved, setIsSaved] = useState([]);

  useEffect(() => {
    dispatch(fetchCovNews());
  }, [dispatch, isSaved]);

  const handleAdd = (item) => {
    dispatch(saveNews(item));
    let index = isSaved.findIndex((x) => x === item.title);
    if (index >= 0) {
      isSaved.splice(index, 1);
    } else {
      isSaved.push(item.title);
      setIsSaved([...isSaved]);
    }
  };
  return (
    <div className="md:container md:mx-auto">
      <div>
        <h1 className="text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Covid-19 News
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {covidNews.map((covNews, idx) => (
          <div
            key={idx}
            className=" mb-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {covNews.source.name}
            </h5>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {covNews.title}
            </h3>
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {covNews.author}
            </h5>
            <p className="mb-3 text-lg font-normal text-gray-900 dark:text-gray-400">
              {covNews.description}
            </p>
            <div className="flex justify-end">
              <NewsPageButton url={covNews.url}/> 
              <div className="ml-[10px] mt-1">
              <SaveButton keepNews={covNews} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CovidPage;
