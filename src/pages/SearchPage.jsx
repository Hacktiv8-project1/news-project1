import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearchResults,
  getAllSearch,
  searchSuccess,
  searchPending,
} from "../features/search/searchSlice";
import { add, getAllSaved } from "../features/saved/savedSlice";

function SearchPage() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchResults = useSelector(getAllSearch);
  const saved = useSelector(getAllSaved);
  const [isSaved, setIsSaved] = useState([]);

  useEffect(() => {
    dispatch(searchPending());
    setIsSaved(saved);
    dispatch(fetchSearchResults(query))
      .then((response) => {
        dispatch(searchSuccess(response.payload));
      })
      .catch((error) => {});
  }, [query, dispatch, saved]);

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

  if (searchResults.status === "loading") {
    return (
      <div className="text-center min-h-[calc(100vh_-_100px)] flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!searchResults.results || searchResults.results.length === 0) {
    return (
      <div className="text-center min-h-[calc(100vh_-_100px)] flex justify-center items-center">
        No results found.
      </div>
    );
  }

  return (
    <div className="md:container md:mx-auto">
      <div>
        <h1 className="capitalize text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          {query} news
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {searchResults.results?.map((result, idx) => (
          <div
            key={idx}
            className=" mb-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {result.source.name}
            </h5>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {result.title}
            </h3>
            <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {result.author}
            </h5>
            <p className="mb-3 text-lg font-normal text-gray-900 dark:text-gray-400">
              {result.description}
            </p>
            <div className="flex justify-end">
              <div>
                <a
                  href={result.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  News Page
                </a>
              </div>
              <div className="ml-[10px] mt-1">
                <button onClick={() => handleAdd(result)}>
                  {isSaved.findIndex((x) => x.title === result.title) >= 0 ? (
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

export default SearchPage;
