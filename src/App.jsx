import { useState, useEffect } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';
import CatCard from './assets/components/CatCard';


function App() {
  const [error, setErrorMsg] = useState("");
  const [catImages, setCatImages] = useState([]);
  const [catData, setCatData] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  
  class Cat{ //cat object
    constructor(_id, image){ //the id and image are passed when creating the object
      this._id = _id;
      this.image = image;
    };
    name = faker.person.firstName(); //these values are randomly generated with faker
    breed = faker.animal.cat();
    cost = faker.commerce.price();
  };
  
  const getAllCats = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

      if (!response.ok) {
        throw new Error("Something's not right...");
      }
      
      const data = await response.json();
      setCatImages(data);
      
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const setUpCatArray = () => { //this puts all the cat images + their randomly generated info in a single array. it does this by:
    let catDataCopy = []; // 1. making a blank array
    catImages.map((catImg, index) => {
      catDataCopy.push(new Cat(index, catImg.url)); //for every image, making a new Cat object using that image & then pushing that object into the new array
    })
    setCatData(catDataCopy); //setting catData as the array generated
  }

  useEffect(() => { //on first run:
    getAllCats(); //put the api data in its own array
    setUpCatArray(); //set up the cat data array
  }, []); //this is causing some issues. page only loads after like 3 refreshes. one of these probably shouldnt be in useEffect

  return (
    <>
      <div className="navBar">
        <h1>Cats4Life</h1>
        <p>🛒</p>
      </div>
      <div className="catContainer">
        {catData.map((catObj) => { //for every object in catData, generate a CatCard component using its data
          return (
            <CatCard catInfo={catObj}/>
          )
        })}
      </div>
      <div className="basket">
      </div>
    </>
  )
}

export default App
