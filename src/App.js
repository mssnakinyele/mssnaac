import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";

import { Home, About, Donation, Detail, MainLayout, Error404 } from "./views";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/")
      animateScroll.scrollToTop({
        duration: 1500,
        smooth: "easeInOutQuart",
      });
  }, [location.pathname]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/donate' element={<Donation />} />
          <Route path='/donate/details' element={<Detail />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
