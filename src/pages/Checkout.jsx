import './Checkout.css';
import useAxios from '../hooks/useAxios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Checkout = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxios()
  const {total, cartItems} = useContext(AuthContext)
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [shippingCost, setShippingCost] = useState(0)

console.log(total)
  const handlePlaceOrder = () => {
    const order = {
      name: document.querySelector('input[name="name"]').value,
      number: document.querySelector('input[name="number"]').value,
      email: document.querySelector('input[name="email"]').value,
      district: document.querySelector('select[name="district"]').value,
      address: document.querySelector('input[name="address"]').value,
      paymentMethod: document.querySelector('input[name="radio-group"]:checked').id,
      tnxID: document.querySelector('input[name="tnxID"]').value,
      subTotal: document.querySelector('.aw_checkout-total [data-label="Sub Total"]').textContent,
      shipping: document.querySelector('.aw_checkout-total [data-label="Shipping"]').textContent,
      total: document.querySelector('.aw_checkout-total [data-label="Total"] b').textContent,
      productDetails:cartItems,
    };
  
    axiosSecure.post('/v1/order', order)
    .then( res => {
      if(res.data.insertedId){
        swal("Congratulation!", "We received your order", "success");
        navigate('/')
      }
    })
    .catch(error => {
      console.log(error)
    })
  };
  const handleDistrictChange = e => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict)
    const newShippingCost = selectedDistrict === 'Dhaka' ? 50 : 100;
    setShippingCost(newShippingCost)
  }
  
  return (
    <section className="aw_checkout">
      <div className="container">
        <h2>Checkout</h2>
        <div className="aw_checkout-wrapper">
          {/* checkout details */}
          <div className="aw_checkout-details">
            <h4>Billing Details</h4>
            <form>
              <div className="aw_checkout-items">
                {/* name */}
                <div className="aw_checkout-item">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </div>
                {/* phone number */}
                <div className="aw_checkout-item">
                  <label htmlFor="number">Phone</label>
                  <input type="tel" placeholder="Phone Number" name="number" 
                  required
                  />
                </div>
              </div>
              <div className="aw_checkout-items">
                {/* email */}
                <div className="aw_checkout-item">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </div>
                {/* district */}
                <div className="aw_checkout-item">
                  <label htmlFor="district">District</label>
                  <select name="district" required
                  onChange={handleDistrictChange}
                  >
                    <option hidden>Choose Your District</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
              </div>
              <div className="aw_checkout-items">
                {/* address */}
                <div className="aw_checkout-item">
                  <label htmlFor="address">Address</label>
                  <input type="tel" placeholder="Your address" name="address"
                  required />
                </div>
              </div>
            </form>
          </div>
          {/* checkout totals */}
          <div className="aw_checkout-totals">
            <div className="aw_checkout-total">
              <h4>Your Order</h4>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Sub Total</th>
                    <th scope="col">Shipping</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* single item */}
                  <tr>
                    <td data-label="Sub Total">${total}</td>
                    <td data-label="Shipping">${shippingCost}</td>
                    <td data-label="Total">
                      <b>${total + shippingCost}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="aw_checkout-payment">
              <h4>Payment</h4>
              <form>
                <p>
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="radio-group"
                    checked
                    onChange={() => {}}
                  />
                  <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                </p>
                <p>
                  <input
                    type="radio"
                    id="bKash"
                    name="radio-group"
                    onChange={() => {}}
                  
                  />
                  <label htmlFor="bKash">Bkash</label>
                </p>
                {/* name */}
                <div className="aw_checkout-item">
                  <label htmlFor="tnxID">Bkash Transaction ID</label>
                  <input
                    type="text"
                    placeholder="Put Bkash Transaction Id"
                    name="tnxID"
                  />
                </div>
                {/* phone number */}
                <div className="aw_checkout-item">
                  <label htmlFor="bkashNumber">Send Money Number</label>
                  <input type="tel" placeholder="01730197620" name="bkashNumber" 
                  readOnly
                  />
                </div>
              </form>

              <button  onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;