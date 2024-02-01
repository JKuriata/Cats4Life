import { useState, useEffect } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';
import CatCard from './assets/components/CatCard';

function App() {
  const [error, setErrorMsg] = useState("");
  const [catData, setCatData] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpen, setBasketOpen] = useState(false); // State to control basket visibility

  class Cat { //cat object
    constructor(_id, image) { //the id and image are passed when creating the object
      this._id = _id;
      this.image = image;
    }
    name = faker.person.firstName(); //these values are randomly generated with faker
    breed = faker.animal.cat();
    cost = faker.commerce.price();
  }

  const getAllCats = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

      if (!response.ok) {
        throw new Error("Something's not right...");
      }
      
      const data = await response.json();
      //now we set up catData array with cat images given to us by the api
      let catDataSetup = []; //generate empty array to hold info to be set as catData later
      data.forEach((catImg, index) => {
        catDataSetup.push(new Cat(index, catImg.url)); //for every image, making a new Cat object using that image & then pushing that object into the new array
      });
      setCatData(catDataSetup); //setting catData as the array generated
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => { //on first run:
    getAllCats(); //get the api data and place it into the cat info array
  }, []);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen); // Toggle basket visibility
  };

  return (
    <>
      <div className="navBar">
        <h1>Cats4Life</h1>
        <button onClick={toggleBasket}>🛒</button> {/* Toggle basket visibility on click */}
      </div>
      <div className="catContainer">
        {catData.map((catObj) => ( //for every object in catData, generate a CatCard component using its data
          <CatCard key={catObj._id} catInfo={catObj} />
        ))}
      </div>
      <div className={`basket ${basketOpen ? 'open' : ''}`}> {/* Apply 'open' class when basket is open */}
        <h2>Basket</h2>
        {/* Add items to the basket here */}
      </div>
    </>
  );
}

export default App;
