import { Routes ,Route } from 'react-router-dom';
import Header from './components/Cartoons/Header';
import './App.css';
import Details from './components/Cartoons/Details';
import Data from './components/Cartoons/Data';
import { useState } from 'react';
import FavoriteCartoons from './components/Cartoons/FavoriteCartoons';
import NewCartoon from './components/Cartoons/NewCartoon';

function App() {

  const [ cartoons, setCartoons ] = useState(Data);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header data={cartoons}/>}/>
        <Route path='/details/:cartoonId' element={<Details data={cartoons}/>}/>
        <Route path='/favoritecartoons/' element={<FavoriteCartoons data={cartoons}/>}/>
        <Route path='/newcartoon' element={<NewCartoon data={cartoons} setCartoons={setCartoons}/>} />
      </Routes>
    </div>
  );
}

export default App;
