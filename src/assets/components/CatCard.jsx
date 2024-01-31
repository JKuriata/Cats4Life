const CatCard = (info) => {
  let catInfo = info.catInfo;
    return (
        <div className="catCard" key={catInfo.id}>
            <div className='imgContainer'>
            <img src={catInfo.image}/>
          </div>
          <div className='catCardText'>
            <h2>{catInfo.name}</h2>
            <p>{catInfo.breed}</p>
            <h3>£{catInfo.cost}</h3>
          </div>
        </div>
    );
}

export default CatCard;