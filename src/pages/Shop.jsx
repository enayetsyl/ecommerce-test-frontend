import './Shop.css';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Shop = () => {
  const axiosSecure = useAxios();
  const {count} = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const numberOfPages = Math.ceil(count/itemsPerPage)
  const pages = Array.from({ length: numberOfPages }, (_, index) => index+1);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePreviousPage = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }

    const handleNextPage = () => {
      if(currentPage < pages.length -1) {
        setCurrentPage(currentPage + 1)
      }
    }



  console.log(pages)
  console.log(count)
  const { isLoading,  data, refetch } = useQuery({
    queryKey: ['product', currentPage],
    queryFn: () =>
      axiosSecure.get(`/v1/allproducts?page=${currentPage}&size=${itemsPerPage}`)
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
        <div className='pagination'>
          <button onClick={handlePreviousPage}>Previous</button>
          {
            pages.map(page => <button key={page}
            onClick={() => setCurrentPage(page)}
            >{page}</button>)
          }
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Shop;