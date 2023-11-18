import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../adminPages/AddProduct";
import AllProducts from "../adminPages/AllProduct";
import EditProduct from "../adminPages/EditProduct";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
     {
        path: '/admin/add-product',
        element:<AddProduct/>
      },
     {
        path: '/shop',
        element:<Shop/>
      },
     {
        path: '/single-product/:id',
        element:<SingleProduct/>,
        loader: ({params}) => fetch(`http://localhost:5000/v1/allproducts/${params.id}`)
      },
      {
        path: '/checkout',
        element:<Checkout/>
      },
      {
        path: '/cart',
        element:<Cart/>
      },
      {
        path: '/admin/all-products',
        element:<AllProducts/>
      },
      {
        path: '/admin/edit-product/:id',
        element:<EditProduct/>,
        loader: ({params}) => fetch(`http://localhost:5000/v1/allproducts/${params.id}`)
      },
    ]
  },
]);

export default router;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import Blog from './pages/Blog';
// import AllProducts from './adminPages/AllProducts';
// import EditProduct from './adminPages/EditProduct';
// import AddProduct from './adminPages/AddProduct';
// import OrderDetails from './adminPages/OrderDetails';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'



// function App() {
//   const queryClient = new QueryClient()

//   return (
//     <QueryClientProvider client={queryClient}>
//    <BrowserRouter>
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/blog" element={<Blog />} />
//         {/* admin */}
//         <Route path="/admin/add-product" element={<AddProduct />}></Route>
//         <Route path="/admin/all-products" element={<AllProducts />} />
//         <Route path="/admin/order-details" element={<OrderDetails />} />
//         <Route path="/admin/edit-product/:id" element={<EditProduct />} />
//       </Routes>
//     </BrowserRouter>
//     </QueryClientProvider>
//   );
// }

// export default App;
