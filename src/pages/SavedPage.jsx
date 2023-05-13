
import { useSelector } from "react-redux";
import { NewsPageButton } from "../components/NewsPageButton";



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
                  <NewsPageButton url={item.url}>Read More</NewsPageButton> 
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
