import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { React } from 'react';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<University />} />
        <Route path="/" element={<City />} />
        <Route path="/" element={<Opinion />} />
        <Route path="/" element={<ArtsAndEntertainment />} />
        <Route path="/" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;