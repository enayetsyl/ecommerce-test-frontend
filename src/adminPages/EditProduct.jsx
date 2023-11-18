import { useLoaderData } from 'react-router-dom'
import './EditProduct.css';
import useAxios from '../hooks/useAxios';
import swal from 'sweetalert';

const EditProduct = () => {
  const {category, desc, regular_price, sale_price, title, _id} = useLoaderData()
  const axiosSecure = useAxios()

 const handleUpdate = async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target);
    const title = formData.get('title');
    const category = formData.get('category');
    const regular_price = parseFloat(formData.get('regular_price'));
    const sale_price = parseFloat(formData.get('sale_price'));
    const desc = formData.get('desc');
    const updatedProductData = {title, category, regular_price, sale_price, desc}
    console.log(updatedProductData)

    const updateItem = await axiosSecure.patch(`/v1/allproducts/${_id}`, updatedProductData)
    {
      if(updateItem.data.modifiedCount > 0){
        swal("Congratulation!", "Your product updated successfully!", "success");
      }
    }
 }


  return (
    <section className="aw_edit-product">
      <form onSubmit={handleUpdate}>
        <div className="aw_product-items">
          {/* title */}
          <div className="aw_product-item">
            <label htmlFor="title">Product Title</label>
            <input
              type="text"
              defaultValue={title}
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
              defaultValue={category}
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
              defaultValue={regular_price}
            />
          </div>
          {/* sale price */}
          <div className="aw_product-item">
            <label htmlFor="sale_price">Sale Price</label>
            <input
              type="number"
              placeholder="Product Sale Price"
              name="sale_price"
              defaultValue={sale_price}
            />
          </div>
        </div>
        {/* <div className="aw_product-items"> */}
          {/* size */}
          {/* <div className="aw_product-item">
            <label htmlFor="size">Size</label>
            <select name="size">
              <option hidden>Choose Size</option>
              <option value="xs">XS</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div> */}
          {/* color */}
          {/* <div className="aw_product-item">
            <label htmlFor="color">Color</label>
            <select name="color">
              <option value="white" defaultChecked>
                White
              </option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </select>
          </div> */}
        {/* </div> */}
        {/* description */}
        <div className="aw_product-item">
          <label htmlFor="desc">Description</label>
          <textarea placeholder="Product Description" name="desc" rows={5}
          defaultValue={desc}
          />
        </div>
        {/* featured image */}
        {/* <div className="aw_product-item">
          <label htmlFor="featured_image">Featured Image</label>
          <input type="file" name="featured_image" />
        </div> */}
        {/* gallery image*/}
        {/* <div className="aw_product-item">
          <label htmlFor="gallery_image">Gallery Image</label>
          <input type="file" name="gallery_image" />
        </div> */}
        <button>Update Product</button>
      </form>
    </section>
  );
};

export default EditProduct;
