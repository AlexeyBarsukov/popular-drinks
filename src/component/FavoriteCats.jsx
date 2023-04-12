import {useEffect, useState} from "react";

const FavoriteCats = () => {
  const [stateStorageFavorites, setStateStorageFavorites] = useState(() => localStorage.getItem('favoritesDrinks'))
  const [stateFavorite, setStateFavorite] = useState([])
  const [state, setState] = useState(null);
  console.log('стейт фаворитов', state);
  console.log('массив должен быть из ID', stateFavorite);

  const REACT_APP_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  useEffect(()=>{
    async function getAllDrinks() {
      const response = await fetch(REACT_APP_URL);
      const data = await response.json();
      setState(data);
    }
    getAllDrinks()

    setStateFavorite(JSON.parse(stateStorageFavorites))
  },[])

  const removingFavoritesDrinksFromLocalStorage = (id) => {
    // Получаем данные из localStorage
    const storageData = localStorage.getItem('favoritesDrinks');

    if (storageData) {
      // Преобразуем данные из строки JSON в массив
      const favoritesDrinks = JSON.parse(storageData);

      // Удаляем переданный ID из массива
      const updatedFavorites = favoritesDrinks.filter(drinkId => drinkId !== id);

      // Обновляем данные в localStorage
      localStorage.setItem('favoritesDrinks', JSON.stringify(updatedFavorites));

      // Обновляем состояние stateFavorite, чтобы отобразить изменения на странице
      setStateFavorite(updatedFavorites);
    }
  }


  return (
      <div>
        <div className="table-drinks">
          {state && state.drinks.filter(drink => stateFavorite.includes(drink.idDrink)).map((drink) =>(
              <div className="item-drink" key={drink.idDrink}>
                <img className="img-drinks" src={drink.strDrinkThumb} alt={''}/>
                <button id={drink.idDrink} className='btn btn-danger' onClick={()=>removingFavoritesDrinksFromLocalStorage(drink.idDrink)}>Удалить из избранного</button>
              </div>
          ))}
        </div>
      </div>
  )
};
export default FavoriteCats;
