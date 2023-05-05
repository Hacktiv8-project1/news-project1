import React from "react";

function CardComponent() {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          www.google.com
        </h5>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h3>
        <h5 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Jhon .F
        </h5>
        <p className="mb-3 text-lg font-normal text-gray-900 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-end">
          <div>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              News Page
            </a>
          </div>
          <div className="ml-[10px] mt-1">
            <i className="fa-xl items-center fa-regular fa-bookmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
