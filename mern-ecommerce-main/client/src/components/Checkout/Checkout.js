import './Checkout.css'
import { useState } from 'react';

const Checkout = () => {


    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
      ];
    
      const [cart, setCart] = useState([]);
      const [total, setTotal] = useState(0);
    
      const addToCart = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
      };
    
      const handleCheckout = () => {
        console.log('Processing payment. Total amount:', total);


    return ( 
       <div>
      <h2>Checkout</h2>
      <div>
        <h3>Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - Rs {product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Cart</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Rs {item.price}
            </li>
          ))}
        </ul>
        <p>Total: Rs {total.toFixed(2)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>

     );
};
};
 
export default Checkout;