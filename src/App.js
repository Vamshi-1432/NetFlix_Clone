import "./App.css";
import Home from "./components/layout/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/specific/Login";
import Movies from "./components/layout/Movies/Movies";
import TvShows from "./components/layout/TvShows/TvShows";

const App = () => {
  return (
    // <div className="App bg-bgcolor bg-custom-gradient w-[100%] h-[100%] min-h-[32rem]">
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/movie" element={<Movies />} />
        <Route exact path="/tv" element={<TvShows />} />
      </Routes>
    </div>
  );
};

export default App;
