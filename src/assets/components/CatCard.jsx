const CatCard = (props) => {
  let catID = `cat${(props.catInfo)._id}`;
    return (
        <div className="catCard" id={catID}>
            <div className='imgContainer'>
            <img src={(props.catInfo).image}/>
          </div>
          <div className='catCardText'>
            <h2>{(props.catInfo).name}</h2>
            <p>{(props.catInfo).breed}</p>
            <div className="costBuy">
            <p className="costText">£{(props.catInfo).cost}</p>
            <button onClick={props.basketAdd}>Add to Basket</button>
            </div>
          </div>

        </div>
    );
}

export default CatCard;