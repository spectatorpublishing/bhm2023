import { React } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import { university_news_articles } from './data/articles';
import { opinion_articles } from './data/articles';
import { sports_articles } from './data/articles';
import { ae_articles } from './data/articles';
import { city_news_articles } from './data/articles';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="uni-news" element={<Section id="uni-news" header="UNIVERSITY NEWS" articles={university_news_articles} next="City News" link="/city-news" key={0} />} />
        <Route path="city-news" element={<Section id="city-news" header="CITY NEWS" articles={city_news_articles} next="Opinion" link="/opinion" key={1} />} />
        <Route path="opinion" element={<Section id="opinion" header="OPINION" articles={opinion_articles} next="A&E" link="/a&e" key={2} />} />
        <Route path="a&e" element={<Section id="a&e" header="A&E" articles={ae_articles} next="Sports" link="/sports" key={3} />} />
        <Route path="sports" element={<Section id="sports" header="SPORTS" articles={sports_articles} next="Home" link="/" key={4} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;