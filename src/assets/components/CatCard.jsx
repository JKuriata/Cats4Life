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
            <p className="costText">£{(props.catInfo).cost}</p>
          </div>
          <button onClick={props.basketAdd}>ADD ME!!</button>
        </div>
    );
}

export default CatCard;