import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchSearchResults } from "../features/search/searchSlice";

const useSearchNews = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  // search logic
  useEffect(() => {
    dispatch(fetchSearchResults(query));
  }, [query]);

  return [query];
};

export default useSearchNews;
