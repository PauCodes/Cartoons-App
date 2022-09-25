import { Routes ,Route } from 'react-router-dom';
import Header from './components/Cartoons/Header';
import './App.css';
import Details from './components/Cartoons/Details';
import Data from './components/Cartoons/Data';
import { useState } from 'react';
import NewCartoon from './components/Cartoons/NewCartoon';
import ListOfFavs from './components/Cartoons/ListOfFavs';

function App() {

  //MAIN STATE
  const [ cartoons, setCartoons ] = useState(Data);
  const [ cartoonRepeated, setCartoonRepeated ] = useState();

  //CRUD FUNCTIONS
    //NEW CARTOON:
    const cartoonAdded = (cartoon) => {
      const findCartoon = cartoons.find(item => item.name.toLowerCase() === cartoon.name.toLowerCase());
      
      if(findCartoon === undefined) {
          setCartoons([...cartoons, cartoon]);
      }else {
         setCartoonRepeated({message: `${cartoon.name} already exist`})
      };
  };

    //DELETE CARTOON:
    const removeCartoon = (cartoon) => {
      const filteredCartoon = cartoons.filter(item => cartoon !== item);
      setCartoons(filteredCartoon);      
  };

    //UPDATE CARTOON
    const handleUpdate = (id, value, description) => { 
      const dataCopy = [...cartoons];
      const newCartoon = dataCopy.find(cartoon => cartoon.id === id);
      const newDescription = dataCopy.find(cartoon => cartoon.id === id);
      newCartoon.name = value;
      newDescription.description = description;
      setCartoons(dataCopy);
  };


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header data={cartoons}/>}/>
        <Route path='/details/:cartoonId' element={<Details data={cartoons}/>}/>
        <Route path='/favoritecartoons' element={<ListOfFavs data={cartoons}/>}/>
        <Route path='/newcartoon' element={<NewCartoon data={cartoons} cartoonAdded={cartoonAdded} removeCartoon={removeCartoon} handleUpdate={handleUpdate} cartoonRepeated={cartoonRepeated} setCartoonRepeated={setCartoonRepeated}/>} />
      </Routes>
    </div>
  );
}

export default App;
