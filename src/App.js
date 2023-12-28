import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Detail from "./components/Donate/Detail";
import MainLayout from "./Layouts/MainLayout";

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/donate/details' element={<Detail />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  </div>
);

export default App;
