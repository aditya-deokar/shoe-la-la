// import { Nav } from "./components";


import Nav from "./components/Nav";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <main className='relative'>
      <Nav /> 
      
      <Home />
      <Product />
      <SingleProduct />
      
    </main>
  );
};

export default App;
