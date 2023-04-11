import "./AllCats.css";
import {useEffect, useState} from "react";

export const AllCats = () => {
  const REACT_APP_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [state, setState] = useState(null);
  const [btn, setBtn] = useState([]);
    console.log('state  btn', btn)
    useEffect(() => {
       async function getAllDrinks() {
            const response = await fetch(REACT_APP_URL);
            const data = await response.json();
           setState(data);
        }
        getAllDrinks()
    }, [])

    const handleFavoriteDrinks = (id) => {
      console.log('just id', id);
      setBtn((prevID)=> [...prevID, id]);

      console.log("массив ID", btn);
    }


  return (
      <>
        <div>
          <h1>Список всех напитков</h1>
          <div>
            <div className="table-drinks">
              {state && state.drinks.map((drink) =>(
                  <div className="item-drink" key={drink.idDrink}>
                    <img className="img-drinks" src={drink.strDrinkThumb}/>
                      <button key={drink.idDrink} id={drink.idDrink} onClick={() => handleFavoriteDrinks(drink.idDrink)}>{btn.includes(drink.idDrink)? '1':'2'}</button>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};