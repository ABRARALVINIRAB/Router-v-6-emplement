import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import ProductsServices from './component/ProductsServices/ProductsServices';
import BecomeAClient from './component/BecomeAClient';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />

          <Route path='productsServices' element={<ProductsServices></ProductsServices>} />
          <Route path='becomeAClient' element={<BecomeAClient></BecomeAClient>} />
          <Route path='about-us' element={<About></About>} />
          <Route path='login' element={<Login></Login>} />
          <Route path='register' element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
