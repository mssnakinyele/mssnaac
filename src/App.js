import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Detail from './components/Donate/Detail';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/details" element={<Detail />} />
    </Routes>
  </div>
);

export default App;
