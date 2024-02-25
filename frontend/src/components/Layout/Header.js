import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              🛒 WanderWise
            </Link>
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              
              {!auth?.user ? (
                <>
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                </>
              ) : (
                <>
                    <NavLink>
                      {auth?.user?.name}
                    </NavLink>
                        <NavLink to="/dashboard" className="dropdown-item">
                          Dashboard
                        </NavLink>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                </>
              )}
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;