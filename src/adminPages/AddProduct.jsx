

import './AddProduct.css';
import useAxios from '../hooks/useAxios';
import swal from 'sweetalert';
import axios from 'axios';
const VITE_IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${VITE_IMAGE_HOSTING_KEY}`


const AddProduct = () => {
  const axiosSecure = useAxios();
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const featuredImage = formData.get('featured_image');
    const galleryImage = formData.get('gallery_image');

    try {
      // Upload featured image
      const featuredImageFormData = new FormData();
      featuredImageFormData.append('image', featuredImage);

      const featuredImageRes = await axios.post(image_hosting_api, featuredImageFormData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      // console.log('Featured Image URL:', featuredImageRes.data);

      // Upload gallery image
      const galleryImageFormData = new FormData();
      galleryImageFormData.append('image', galleryImage);

      const galleryImageRes = await axios.post(image_hosting_api, galleryImageFormData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      // console.log('Gallery Image URL:', galleryImageRes.data);

      // Now you can use the image URLs or other data as needed

      // Rest of your code to handle other form fields and send the product data to your server
      const title = formData.get('title');
      const category = formData.get('category');
      const regular_price = parseFloat(formData.get('regular_price'));
    const sale_price = parseFloat(formData.get('sale_price'));
    const desc = formData.get('desc');

      const productData = {
        title,
        category,
        regular_price,
        sale_price,
        desc,
        featured_image: featuredImageRes.data.data.display_url,
        gallery_image: galleryImageRes.data.data.display_url,
      };
      console.log(productData)
      // Send product data to your server
      axiosSecure
        .post('/v1/addproduct', productData)
        .then((response) => {
          if (response.data.insertedId) {
            swal('Congratulation!', 'You successfully added a product!', 'success');
            
          }
        })
        .catch((error) => {
          console.log('axios post error', error);
        });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <section className="aw_add-product">
      <form onSubmit={handleSubmit}>
        <div className="aw_product-items">
          {/* title */}
          <div className="aw_product-item">
            <label htmlFor="title">Product Title</label>
            <input
              type="text"
              placeholder="Your Product Title"
              name="title"
              required
            />
          </div>
          {/* category */}
          <div className="aw_product-item">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              placeholder="Your Product Category"
              name="category"
            />
          </div>
        </div>
        <div className="aw_product-items">
          {/* regular price */}
          <div className="aw_product-item">
            <label htmlFor="regular_price">Regular Price</label>
            <input
              type="number"
              placeholder="Product Regular Price"
              name="regular_price"
            />
          </div>
          {/* sale price */}
          <div className="aw_product-item">
            <label htmlFor="sale_price">Sale Price</label>
            <input
              type="number"
              placeholder="Product Sale Price"
              name="sale_price"
            />
          </div>
        </div>
        {/* <div className="aw_product-items">
          <div className="aw_product-item">
            <label htmlFor="size">Size</label>
            <select name="size">
              <option hidden>Choose Size</option>
              <option value="xs">XS</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="aw_product-item">
            <label htmlFor="color">Color</label>
            <select name="color">
              <option value="white" defaultChecked>
                White
              </option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </select>
          </div>
        </div> */}
        {/* description */}
        <div className="aw_product-item">
          <label htmlFor="desc">Description</label>
          <textarea placeholder="Product Description" name="desc" rows={5} />
        </div>
        {/* featured image */}
        <div className="aw_product-item">
          <label htmlFor="featured_image">Featured Image</label>
          <input type="file" name="featured_image" />
        </div>
        {/* gallery image*/}
        <div className="aw_product-item">
          <label htmlFor="gallery_image">Gallery Image</label>
          <input type="file" name="gallery_image" />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default AddProduct;


 // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   const formData = new FormData(e.target);
  //   const featured_image = formData.get('featured_image')
  //   const gallery_image = formData.get('gallery_image')
  //   console.log(featured_image)

  //   try {
  //     // Create a new FormData object just for the image
  //     const imageFormData = new FormData();
  //     imageFormData.append('image', featured_image);
  
  //     // Upload only the image
  //     const res = await axios.post(image_hosting_api, imageFormData, {
  //       headers: {
  //         'content-type': 'multipart/form-data',
  //       },
  //     });
  //     console.log(res.data);
  
  //     // Now you can use the image URL or other data as needed
  
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  //   // const form = e.target;
  //   const title = formData.get('title');
  //   const category = formData.get('category');
  //   const regular_price = parseFloat(formData.get('regular_price'));
  //   const sale_price = parseFloat(formData.get('sale_price'));
  //   const desc = formData.get('desc');
  //   const productData = {title, category, regular_price, sale_price, desc, featured_image}
  //   // console.log(productData)

  //   // axiosSecure.post('/v1/addproduct', productData)
  //   // .then((response) => {
  //   //   if(response.data.insertedId){
  //   //     swal("Congratulation!", "You successfully added a product!", "success");
  //   //   }
  //   // })
  //   // .catch ((error) => {
  //   //   console.log('axios post error', error)
  //   // })
  // }
