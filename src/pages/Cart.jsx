import './Cart.css';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Cart = () => {
  const {cartItems, setCartItems,total, setTotal} = useContext(AuthContext)
  // console.log(cartItems)
  useEffect(() => {

    const subtotal = cartItems.reduce((acc, product) => acc + product.sale_price * product.quantity, 0);
    setTotal(subtotal)
    
  },[cartItems, setTotal])



  const handleDelete = id => {
    const updatedCartItems = cartItems.filter((product) => product._id !== id)
    setCartItems(updatedCartItems)
  }

  return (
    <section className="aw_cart">
      <div className="container">
        <h2>Your Cart</h2>
        <div className="aw_cart-wrapper">
          {/* cart details */}
          <div className="aw_cart-details">
            <h4>Cart Details</h4>
            {
              cartItems.length > 0 ? (
                <table>
              <thead>
                <tr>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">S. Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              {
                cartItems.map(product => (
                  <tbody key={product._id}>
                {/* single item */}
                <tr>
                  <td data-label="Thumbnail">
                    <img src={product.featured_image} alt="" />
                  </td>
                  <td data-label="Title">{product.title}</td>
                  <td data-label="quantity">{product.quantity}</td>
                  <td data-label="S. Price">
                    <b>${product.sale_price}</b>
                  </td>
                  <td data-label="toal">
                    <b>{product.quantity * product.sale_price}</b>
                  </td>

                  <td onClick={() => handleDelete(product._id)} data-label="Delete">
                    <FaTimes className="trash" />
                  </td>
                </tr>
              </tbody>
                ))
              }
            </table>
              ) : (
                <p>You have no items to</p>
              )
            }
            <Link to="/shop">
              <button>Return To Shop</button>
            </Link>
          </div>
          {/* cart totals */}
          <div className="aw_cart-totals">
            <div className="aw_cart-total">
              <h4>Cart Totals</h4>
           {
            cartItems.length > 0 ? (
              <>
              <table>
              <thead>
                <tr>
                  <th scope="col">Sub Total</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* single item */}
                <tr>
                  <td data-label="Sub Total">${total}</td>
                  <td data-label="Total">
                    <b>${total}</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to="/checkout">
              <button>Proceed To Checkout</button>
            </Link>
              </>
            ) : (
              <table>
              <thead>
                <tr>
                  <th scope="col">Sub Total</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* single item */}
                <tr>
                  <td data-label="Sub Total">$0</td>
                  <td data-label="Total">
                    <b>$0</b>
                  </td>
                </tr>
              </tbody>
            </table>

            )
           }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;