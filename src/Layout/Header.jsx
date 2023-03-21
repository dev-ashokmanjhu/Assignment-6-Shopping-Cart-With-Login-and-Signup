import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <h1>Assignment 6</h1>
        </Link>
        <HeaderCartButton />
        <div>
          <Link to="/login">
            <button className={classes.HeaderLoginBtn}>Login</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
