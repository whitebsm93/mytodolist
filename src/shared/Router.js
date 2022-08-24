import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
