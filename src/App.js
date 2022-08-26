
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home';
import SingleCourse from "./Pages/Single-course";
import SingleVideo from "./Pages/Single-video";

function App() {
  return (
   <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<SingleCourse/>} />
      <Route path="/:course/:category/:id" element={<SingleVideo/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
