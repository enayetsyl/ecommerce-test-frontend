import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user, userName, logOut} = useAuth()
  console.log(user, userName)
  return (
    <div className="bg-slate-400 p-2 flex justify-center items-center gap-5">
        <Link to='/'>
        <button className="bg-yellow-400 text-white font-bold text-lg px-5 py-3">Home</button>
        </Link>
        <Link to='/shop'>
        <button className="bg-yellow-400 text-white font-bold text-lg px-5 py-3">Shop</button>
        </Link>
        <Link to='/cart'>
        <button className="bg-yellow-400 text-white font-bold text-lg px-5 py-3">My Cart</button>
        </Link>
        <div>
        {
          user ? (
              <div className="flex justify-center items-center gap-2">
        <button className="bg-yellow-400 text-white font-bold text-lg px-5 py-3" 
        onClick={logOut}
        >Logout</button>
        
        <p>{userName}</p>
              </div>
          ) : (
            <Link to='/login'>
        <button className="bg-yellow-400 text-white font-bold text-lg px-5 py-3">Login</button>
        </Link>
          )
        }
        </div>
    </div>
  );
};

export default Navbar;