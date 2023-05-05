import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import CovidPage from "./pages/CovidPage";
import IndonesiaPage from "./pages/IndonesiaPage";
import ProgramingPage from "./pages/ProgramingPage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<IndonesiaPage />}></Route>
        <Route path="/programming" element={<ProgramingPage />}></Route>
        <Route path="/covid19" element={<CovidPage />}></Route>
        <Route path="/saved" element={<SavedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
