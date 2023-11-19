import './AllProduct.css';
import { Link } from 'react-router-dom';
// import image from '../assets/images/1-1.webp';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import swal from 'sweetalert';
import useAxios from '../hooks/useAxios';

const AllProducts = () => {
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

  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
          const res = await axiosSecure.delete(`/v1/allproducts/${id}`);
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
              // refetch to update the ui
              refetch();
             
              swal(" Your  file has been deleted!", {
                icon: "success",
              });
          }
      }
      else {
        swal("Your file is safe!");
      }
  });
  }

  return (
    <section className="aw_all-products">
      <table>
        <caption>Manage Products</caption>
        <thead>
          <tr>
            <th scope="col">Thumbnail</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">R. Price</th>
            <th scope="col">S. Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* single item */}
          {
            isLoading ? (<p>Wait Your Data is loading</p>) : 
            (
             data.map(product => (
              <tr key={product._id}>
              <td data-label="Thumbnail">
                <img src={product.featured_image} alt="" />
              </td>
              <td data-label="Title">{product.title}</td>
              <td data-label="Category">{product.category}</td>
              <td data-label="R. Price">${product.regular_price}</td>
              <td data-label="S. Price">${product.sale_price}</td>
              <td data-label="Edit">
                <Link to={`/dashboard/admin/edit-product/${product._id}`}>
                  <FaEdit />
                </Link>
              </td>
              <td data-label="Delete"
              onClick={() => handleDelete(product._id)}
              >
                <FaTrash className="trash" />
              </td>
            </tr>
             ))
            )
          }
        </tbody>
      </table>
    </section>
  );
};

export default AllProducts;
