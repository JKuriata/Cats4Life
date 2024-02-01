const CatCard = (info) => {
  let catInfo = info.catInfo;
  let catID = `cat${catInfo._id}`;
    return (
        <div className="catCard" id={catID}> {/* key isnt working here, not sure why. maybe because _id is not a string? */}
            <div className='imgContainer'>
            <img src={catInfo.image}/>
          </div>
          <div className='catCardText'>
            <h2>{catInfo.name}</h2>
            <p>{catInfo.breed}</p>
            <p className="costText">£{catInfo.cost}</p>
          </div>
        </div>
    );
}

export default CatCard;