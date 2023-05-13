import {useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../features/search/searchSlice";

function HeaderComponent() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(fetchSearchResults(query));
    navigate(`/search/${query}`);
  };
  
  
  const [isOpen,setIsOpen]= useState(false)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const handleMenuAction=()=>{
    setIsOpen(!isOpen)
  }


  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">

          <div className="flex justify-between w-full md:w-max md:order-2 ">
          {/* search bar */}
            <form onSubmit={handleSearch}>
              <div className="flex justify-center space-x-3  ">
                <input
                  type="text"
                  id="search-navbar"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  className="block w-full py-2 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  w-24   font-medium rounded-lg text-sm  py-2 px-9  dark:bg-purple-600 dark:hover:bg-purple-700  dark:focus:ring-purple-900"
                >
                  Cari
                </button>
              </div>
            </form>
          {/* humburger menu button */}
            <button
              onClick={handleMenuAction}
              className=" inline-flex  p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
            >
             {isOpen&&viewportWidth<=767.33?
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect> </clipPath> </defs> </g></svg>:
               <svg  className="w-6 h-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="28.672000000000004"></g><g id="SVGRepo_iconCarrier"><path fill="#6b7280" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
            }
            
            </button>
          </div>




          
          <div
            className="w-full md:flex md:justify-between md:w-auto md:order-1"
          >
          
            <ul 
             className={isOpen&&viewportWidth<=767.33?"hidden items-center flex-col justify-evenly  p-4 font-medium  rounded-lg ":"border-2 border-gray-300 mt-2 items-center flex flex-col justify-evenly  p-4 font-medium  rounded-lg md:space-y-0 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 "}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Indonesia
              </NavLink>
              <NavLink
                to="/programming"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Programming
              </NavLink>
              <NavLink
                to="/covid19"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                COVID-19
              </NavLink>
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Saved
              </NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
