import React, { useEffect, useState } from "react";
import axios from "axios";
import { addCovNews, getAllCovNews } from "../features/news/covNewsSlice";
import { useDispatch, useSelector } from "react-redux";

function CovidPage() {
  const dispatch = useDispatch();
  const covidNews = useSelector(getAllCovNews);
  console.log(covidNews);

  useEffect(() => {
    const getCovNews = async () => {
      await axios
        .get(
          "https://newsapi.org/v2/everything?q=Covid&from=2023-04-11&sortBy=popularity&apiKey=16d7589cf0574ceb98d7827cebba4d32"
        )
        .then((response) => {
          dispatch(addCovNews(response.data.articles));
          // console.log(response.data.articles);
        })
        .catch((err) => {
          console.log("Err:", err);
        });
    };
    getCovNews();
  }, []);
  return (
    <div className="md:container md:mx-auto">
      <div>
        <h1 className="text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Covid-19 News
        </h1>
      </div>
      <div className="flex flex-wrap justify-between">
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
              <div>
                <a
                  href={covNews.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  News Page
                </a>
              </div>
              <div className="ml-[10px] mt-1">
                <i className="fa-xl items-center fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CovidPage;
