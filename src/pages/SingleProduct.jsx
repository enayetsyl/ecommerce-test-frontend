import { Link, useLoaderData } from 'react-router-dom';
import './SingleProduct.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SingleProduct = () => {
  const product = useLoaderData()
  const {title, regular_price, desc, featured_image, gallery_image, sale_price} = product
  // console.log(title, regular_price, desc, featured_image, gallery_image, sale_price)
  const {setCartItems} = useContext(AuthContext)
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('l')
  const [color, setColor] = useState('white')
  // console.log(setCartItems)

  const handleAddToCart = () => {
    const productToAdd = {...product, quantity, size, color }
    setCartItems((prevCartItems) => [...prevCartItems, productToAdd])
  }

  return (
    <section className="aw_single-product-item">
      <div className="container">
        <div className="aw_single-product-item-wrapper">
          {/* image and cart */}
          <div className="aw_single-product-item-contents">
            {/* images */}
            <div className="aw_single-product-item-images">
              <div>
                <img src={featured_image} alt="" className="featured-image" />
              </div>
              <div className="gallery-images">
                <img src={gallery_image} alt="" />
                <img src={gallery_image} alt="" />
                <img src={gallery_image} alt="" />
              </div>
            </div>
            {/* add to cart */}
            <div className="aw_single-product-item-cart">
              <h3>{title}</h3>
              <p>
                <span>${regular_price}</span> ${sale_price}
              </p>
              <p className="short-desc">
                {desc}
              </p>
              <form action="">
                {/* size */}
                <div className="aw_product-item">
                  <label htmlFor="size">Size</label>
                  <select name="size" required
                  value={size}
                  onChange={(e) =>setSize(e.target.value)}
                  >
                    <option hidden>Choose Size</option>
                    <option value="xs">XS</option>
                    <option value="l" defaultChecked>L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                {/* color */}
                <div className="aw_product-item">
                  <label htmlFor="color">Color</label>
                  <select name="color"
                  required
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  
                  >
                    <option value="white" defaultChecked>
                      White
                    </option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                  </select>
                </div>
                {/* quantity */}
                <div className="aw_product-item">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" 
                  required
                  name='quantity'
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
                </div>
                {/* button */}
                <Link to={'/cart'}>
                <button onClick={handleAddToCart}>Add To Cart</button>
                </Link>
              </form>
            </div>
          </div>
          {/* details */}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;