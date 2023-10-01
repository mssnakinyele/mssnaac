import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';

// eslint-disable-next-line react/prefer-stateless-function

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
