import './App.css';
import { Route, Routes } from 'react-router-dom';
import {AllCats} from './component/AllCats';
import FavoriteCats from './component/FavoriteCats';
import LayoutMenu from './Layouts/LayoutMenu'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMenu />}>
          <Route index element={<AllCats />} />
          <Route path="/favoriteCats" element={<FavoriteCats />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
