import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );
}

export default App;
