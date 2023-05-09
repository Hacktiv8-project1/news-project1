import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProNews, getAllProNews } from "../features/news/proNewsSlice";
import { add, getAllSaved } from "../features/saved/savedSlice";

function ProgramingPage() {
  const dispatch = useDispatch();
  const programNews = useSelector(getAllProNews);
  const saved = useSelector(getAllSaved);
  const [isSaved, setIsSaved] = useState([]);

  useEffect(() => {
    dispatch(fetchProNews());
    setIsSaved(saved);
  }, [dispatch, saved]);

  const handleAdd = (item) => {
    dispatch(add(item));
    let index = isSaved.findIndex((x) => x.title === item.title);
    if (index >= 0) {
      let updatedSaved = isSaved.filter((x) => x.title !== item.title);
      setIsSaved(updatedSaved);
    } else {
      let updatedSaved = [...isSaved, item];
      setIsSaved(updatedSaved);
    }
  };

  return (
    <div className="md:container md:mx-auto">
      <div>
        <h1 className="text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Programing News
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {programNews.map((proNews, idx) => (
          <div
            key={idx}
            className=" mb-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {proNews.source.name}
            </h5>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {proNews.title}
            </h3>
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {proNews.author}
            </h5>
            <p className="mb-3 text-lg font-normal text-gray-900 dark:text-gray-400">
              {proNews.description}
            </p>
            <div className="flex justify-end">
              <div>
                <a
                  href={proNews.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  News Page
                </a>
              </div>
              <div className="ml-[10px] mt-1">
                <button onClick={() => handleAdd(proNews)}>
                  {isSaved.findIndex((x) => x.title === proNews.title) >= 0 ? (
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

export default ProgramingPage;
