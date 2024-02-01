import React from 'react';

const BasketCat = ({ catInfo, basketRemove, totalCost }) => {
    return (
      <div className="basketCat">
        <div className="basketImgContainer">
          <img src={catInfo.image} alt={catInfo.name} />
        </div>
        <div className="basketCatInfo">
          <p>{catInfo.name}</p>
          <p>{catInfo.cost}</p>
          <button onClick={basketRemove}>Remove</button>
        </div>
      </div>
    );
  };
  
  export default BasketCat;
