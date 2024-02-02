import React, { useState } from 'react';

const CatCard = (props) => {
  const [addedToBasket, setAddedToBasket] = useState(false);

  const handleAddToBasket = () => {
    if (!addedToBasket) { // Check if the cat has not been added to the basket
      props.basketAdd(); // Add the cat to the basket
      setAddedToBasket(true); // Update state to indicate that the cat has been added
    }
  };

  let catID = `cat${props.catInfo._id}`;
  
  return (
    <div className="catCard" id={catID}>
      <div className='imgContainer'>
        <img src={props.catInfo.image} alt={props.catInfo.name}/>
      </div>
      <div className='catCardText'>
        <h2>{props.catInfo.name}</h2>
        <p>{props.catInfo.breed}</p>
        <div className="costBuy">
          <p className="costText">£{props.catInfo.cost}</p>
          <button onClick={handleAddToBasket} disabled={addedToBasket}>
            {addedToBasket ? 'Added to Basket' : 'Add to Basket'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
