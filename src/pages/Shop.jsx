import './Shop.css';
import productOne from '../assets/images/1-1.webp';
import productTwo from '../assets/images/1-2.webp';
import productThree from '../assets/images/1-3.webp';
import productFour from '../assets/images/11-1.webp';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Shop = () => {
  const axiosSecure = useAxios();
  const { isLoading,  data, refetch } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosSecure.get('/v1/allproducts')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });
// console.log(data)
  return (
    <section className="aw_shop">
      <div className="container">
        <h2>Our Shop</h2>
        <div className="aw_shop-wrapper">
          {/* single product item */}
         {
          isLoading ? (<p>Your data is loading. Please wait</p>) :
          (
            data.map(product => (
              <div className="aw_single-product" key={product._id}>
            <img src={product.featured_image} alt="featured_image" className="img-fluid" />
            <h4>{product.title}</h4>
            <p>
              <span>${product.regular_price}</span> ${product.sale_price}
            </p>
            <div>
              <Link to={`/single-product/${product._id}`}>
              <button>Select Options</button>
              </Link>
            </div>
          </div>
            ))
          )
         }
          
        </div>
      </div>
    </section>
  );
};

export default Shop;