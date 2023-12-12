import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/about';
import Donate from './components/Donate/Donate';
import Detail from './components/Donate/Detail';

// eslint-disable-next-line react/prefer-stateless-function

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
