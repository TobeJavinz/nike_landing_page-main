import {BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./sections/Home";
import Aboutus from "./sections/Aboutus";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (

    <>
      <BrowserRouter> 
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<Aboutus/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
