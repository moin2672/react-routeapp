import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourites-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favouriteCntxt = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites <span className={classes.badge}>{favouriteCntxt.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
