import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/about';

// eslint-disable-next-line react/prefer-stateless-function

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;
