import { Routes, Route } from "react-router-dom";

import { Home, About, Donate, Detail, MainLayout, Error404 } from "./views";

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/donate/details' element={<Detail />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  </div>
);

export default App;
