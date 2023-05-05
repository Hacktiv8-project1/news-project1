import React from "react";

function TableComponent() {
  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="font-medium text-gray-900 px-6 py-3">
              Source
            </th>
            <th scope="col" className="font-medium text-gray-900 px-6 py-3">
              Title
            </th>
            <th scope="col" className="font-medium text-gray-900 px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">Silver</td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">Laptop</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4  text-gray-900  dark:text-white">
              Microsoft Surface Pro
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">White</td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Laptop PC
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td
              className="px-6 py-4 text-gray-900  dark:text-white"
            >
              Magic Mouse 2
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">Black</td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Accessories
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
