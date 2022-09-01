import "./App.css";
import ReactDOM from "react-dom/client";

import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "../src/Pages/CreateUser";
import Appbar from "./Components/Appbar";
import Footest from "./Components/Footest";
import SearchAccount from "./Pages/SearchAccount";
import AddPolicy from "./Pages/AddPolicy";

import SearchPolicy from "./Pages/SearchPolicy";
import ClaimAdd from "./Pages/ClaimAdd";
import SearchFileClaim from "./Pages/SearchFileClaim";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/SearchAccount" element={<SearchAccount />} />
          <Route path="/AddPolicy" element={<AddPolicy />} />
          <Route path="/SearchPolicy" element={<SearchPolicy />} />
          <Route path="/FileClaim" element={<ClaimAdd />} />
          <Route path="/getFileClaim" element={<SearchFileClaim />} />
        </Routes>
      </BrowserRouter>
      <Footest />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
