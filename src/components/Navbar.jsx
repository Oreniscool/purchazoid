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
      ? 'underline decoration-2 text-accent-400 bg-background-700 p-1 px-2 rounded-lg transition-all'
      : 'hover:underline hover:bg-background-700 p-1 rounded-lg decoration-2 px-2 transition-all';
  };
  return (
    <nav className="flex w-100 justify-center text-lg py-2 gap-16 border-solid border-b-2 fixed left-0 top-0 w-full bg-background-900 z-10 relative">
      <h1 className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-2xl font-semibold absolute top-1/5 left-10">
        Purchazoid
      </h1>
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
