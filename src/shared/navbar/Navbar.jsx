import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiAlignJustify } from "react-icons/fi";
import Button from "../button/Button";

const Navbar = () => {
  const navLinks = (
    <>
      <Link to="/news">News</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </>
  );

  return (
    <nav className="navbar py-6 md:py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden mr-4 text-2xl md:text-3xl hover:text-[var(--clr-accent)]"
          >
            <FiAlignJustify />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/">
          <img src={logo} alt="" className="w-28" />
        </Link>
      </div>

      <div className="navbar-end flex gap-6">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>

        <Link to="/login">
          <Button text="Login"></Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
