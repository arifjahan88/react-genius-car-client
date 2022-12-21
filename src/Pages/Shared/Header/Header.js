import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const navoptions = (
    <>
      <li className="font-semibold">
        <Link className="mr-2" to="/">
          Home
        </Link>
        <Link className="mr-2" to="/orders">
          Orders
        </Link>

        {user?.uid ? (
          <Link className="mr-2" onClick={logout}>
            Log Out
          </Link>
        ) : (
          <>
            <Link className="mr-2" to="/login">
              Log In
            </Link>
            <Link className="mr-2" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navoptions}
            </ul>
          </div>
          <img className="w-11" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navoptions}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn glass">Apointment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
