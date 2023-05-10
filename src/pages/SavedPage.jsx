
import { useSelector } from "react-redux";

function SavedPage() {
  const saved = useSelector((store)=>store.save.saved);
  return (
    <div className="md:container md:mx-auto">
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
              <th scope="col" className="font-medium text-gray-900 px-6 py-3">
                News Page
              </th>
            </tr>
          </thead>
          <tbody>
            {saved.map((item, idx) => (
              <>
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {item.author} - {item.source.name}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    <div>
                      <a
                        href={item.url}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read More
                      </a>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SavedPage;
