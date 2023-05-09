import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIdNews,
  getAllIdNews,
  getSearchTerm,
} from "../features/news/idNewsSlice";
import { add, getAllSaved } from "../features/saved/savedSlice";

function IndonesiaPage() {
  const dispatch = useDispatch();
  const indNews = useSelector(getAllIdNews);
  const saved = useSelector(getAllSaved);
  const searchTerm = useSelector(getSearchTerm);

  const [isSaved, setIsSaved] = useState([]);

  useEffect(() => {
    dispatch(fetchIdNews());
  }, [dispatch, isSaved]);

  const handleAdd = (item) => {
    dispatch(add(item));
    let index = isSaved.findIndex((x) => x === item.title);
    if (index >= 0) {
      isSaved.splice(index, 1);
    } else {
      isSaved.push(item.title);
      setIsSaved([...isSaved]);
    }
  };

  const filteredNews = indNews.filter((indoNews) =>
    indoNews.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
              <div>
                <a
                  href={indoNews.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  News Page
                </a>
              </div>
              <div className="ml-[10px] mt-1">
                <button onClick={() => handleAdd(indoNews)}>
                  {isSaved.findIndex((x) => x === indoNews.title) >= 0 ? (
                    <i className="fa-xl text-yellow-400 items-center fa-solid fa-bookmark"></i>
                  ) : (
                    <i className="fa-xl items-center fa-regular fa-bookmark"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndonesiaPage;
