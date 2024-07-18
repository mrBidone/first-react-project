
import './App.css'

import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <Product name="Taco with lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={12.99}/>
      <Product name="Taco with beef"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={20.99}/>
      <Product name="Taco with chees"
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={30.99}/>
    </div>
  );
}


