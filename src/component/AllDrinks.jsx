import "./AllDrinks.css";
import {useEffect, useState} from "react";

export const AllDrinks = () => {
  const REACT_APP_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [state, setState] = useState(null);
  const [btn, setBtn] = useState([]);
  const [stateStorage, setStateStorage] = useState(() => localStorage.getItem('favoritesDrinks'))
    useEffect(() => {
       async function getAllDrinks() {
            const response = await fetch(REACT_APP_URL);
            const data = await response.json();
           setState(data);
        }
        getAllDrinks()
        const checkingStorage = () => {
           if(stateStorage){
               setBtn(JSON.parse(stateStorage))

           }
           else{
               return null
           }
        }
        checkingStorage()

    }, [])

    const addingFavoritesDrinksInLocalStorage = (id) =>{
       localStorage.setItem('favoritesDrinks', JSON.stringify([...btn, id]))
    }
    const removingFavoritesDrinksInLocalStorage = (id) => {
      if(btn.length > 0) {
          localStorage.setItem('favoritesDrinks', JSON.stringify(btn.filter((item) => item !== id)));
      }
      else{
          localStorage.setItem('favoritesDrinks', JSON.stringify([]));
      }
    }

    const handleFavoriteDrinks = (id) => {
      if(!btn.includes(id)) {
          setBtn((prevID) => [...prevID, id]);
          addingFavoritesDrinksInLocalStorage(id)
      }
      else {
          const filterID = btn.filter((item) => item !== id)
          setBtn(filterID)
          removingFavoritesDrinksInLocalStorage(id)
      }
    }




  return (
      <>
        <div>
          <h1>Выбери любой напиток</h1>
          <div>
            <div className="table-drinks">
              {state && state.drinks.map((drink) =>(
                  <div className="item-drink" key={drink.idDrink}>
                    <img className="img-drinks" src={drink.strDrinkThumb} alt={''}/>
                      <h5>{drink.strDrink}</h5>
                      <button key={drink.idDrink}
                              id={drink.idDrink}
                              className={`btn ${btn && btn.includes(drink.idDrink) ? 'btn-danger' : 'btn-success'}`}
                              onClick={() => handleFavoriteDrinks(drink.idDrink)}>{btn && btn.includes(drink.idDrink)? 'Удалить из избранного ':'Добавить в избранное'}</button>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};