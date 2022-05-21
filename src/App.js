import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import DashBoards from './components/DashBoards/DashBoards';
import Shop from './components/Shop/Shop';
import Food from './components/Shop/Food';
import ViewProducts from './components/DashBoards/ViewProducts';
import ManageProducts from './components/DashBoards/ManageProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='dashboard' element={<DashBoards></DashBoards>}>
            
            <Route path='view-products' element={<ViewProducts></ViewProducts>} />
            <Route path='manage-products' element={<ManageProducts></ManageProducts>} />

          </Route>
          <Route path='shop' element={<Shop></Shop>} />
          <Route path='food/:idMeal' element={<Food></Food>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
