import './App.css';
import { Route, Routes } from 'react-router-dom';
import {AllDrinks} from './component/AllDrinks';
import FavoriteDrinks from './component/FavoriteDrinks';
import LayoutMenu from './Layouts/LayoutMenu'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMenu />}>
          <Route index element={<AllDrinks />} />
          <Route path="/favorite" element={<FavoriteDrinks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
