import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHouse,
  faShop,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  const [currPage, setCurrPage] = useState(window.location.pathname);
  const decideClass = (location) => {
    return currPage == location
      ? 'underline decoration-2 text-accent-500 transition-all'
      : 'hover:underline decoration-2 transition-all';
  };
  return (
    <nav className="flex w-100 justify-center text-lg py-4 gap-16 border-solid border-b-2 fixed left-0 top-0 w-full bg-background-900 z-10">
      <Link to="/" className={decideClass('/')}>
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link to="/shop" className={decideClass('/shop')}>
        <FontAwesomeIcon icon={faShop} />
      </Link>
      <Link to="/about" className={decideClass('/about')}>
        <FontAwesomeIcon icon={faHeadset} />
      </Link>
      <Link to="/cart" className={decideClass('/cart')}>
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </nav>
  );
}
export default Navbar;
