const BasketCat = (props) => {
      return (
          <div className="basketCat">
            <div className="basketImgContainer">
                <img src={(props.catInfo).image}/>
            </div>
            <div className="basketCatInfo">
                <p>{(props.catInfo).name}</p>
                <button onClick={props.basketRemove}>Remove</button>
            </div>
          </div>
      );
  }
  
  export default BasketCat;