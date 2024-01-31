import { useState, useEffect } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';


function App() {
  const [error, setErrorMsg] = useState("");
  const [catData, setCatData] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  
  const getAllCats = async () => {

    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

      if (!response.ok) {
        throw new Error("Something's not right...");
      }
      
      const data = await response.json();
      setCatData(data);
      
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  };

useEffect(() => {
  getAllCats();
}, []);

  
  return (
    <>
      <div className="navBar">
        <h1>Cats4Life</h1>
        <p>🛒</p>
      </div>
      <div className="catContainer">
        {catData.map((cat, index) => {
          return (
            <div className="catCard" key={index}>
              <div className='imgContainer'>
                <img src={cat.url}/>
              </div>
              <div className='catCardText'>
                <h2>{faker.person.firstName()}</h2>
                <p>{faker.animal.cat()}</p>
                <h3>£{faker.commerce.price()}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div className="basket">
      </div>
    </>
  )
}

export default App
