import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import HeaderComponent from "./components/HeaderComponent";
import NewsPage from "./pages/NewsPage";
import SavedPage from "./pages/SavedPage";

function App() {
  const programNews = useSelector((store) => store.programNews.proNews);
  const covidNews = useSelector((store) => store.covidNews.covNews);
  const indNews = useSelector((store) => store.indNews.idNews);
  const searchResults = useSelector((store) => store.search);

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<NewsPage setOfNews={indNews} />} />
        <Route
          path="/programming"
          element={<NewsPage setOfNews={programNews} />}
        />
        <Route path="/covid19" element={<NewsPage setOfNews={covidNews} />} />

        <Route path="/saved" element={<SavedPage />} />
        <Route
          path="/search/:query"
          element={<NewsPage setOfNews={searchResults} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
