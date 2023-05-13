import { fetchIdNews } from "../features/news/idNewsSlice";
import { fetchProNews } from "../features/news/proNewsSlice";
import { fetchCovNews } from "../features/news/covNewsSlice";

import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

const useFetchNews = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [newsPagesTitle, setNewsPageTitle] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/":
        dispatch(fetchIdNews());
        setNewsPageTitle("News");
        break;
      case "/programming":
        dispatch(fetchProNews());
        setNewsPageTitle("Programming News");
        break;
      case "/covid19":
        dispatch(fetchCovNews());
        setNewsPageTitle("COVID-19 News");
        break;

      default:
        break;
    }
  }, [dispatch, pathname]);

  return [newsPagesTitle];
};

export default useFetchNews;
