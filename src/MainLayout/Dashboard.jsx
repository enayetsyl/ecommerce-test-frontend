import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <div className="pt-5 flex flex-row gap-5 items-center justify-center">
        <Link to={'/dashboard/admin/add-product'}>
        <button className="bg-yellow-500 p-5 font-bold text-white">Add Product</button>
        </Link>
        <Link to={'/dashboard/admin/all-products'}>
        <button className="bg-yellow-500 p-5 font-bold text-white">All Products</button>
        </Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
