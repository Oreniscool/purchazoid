import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [currPage, setCurrPage] = useState(window.location.pathname);
  const decideClass = (location) => {
    return currPage == location
      ? 'underline decoration-2 text-accent-500 transition-all'
      : 'hover:underline decoration-2 transition-all';
  };
  return (
    <nav className="flex w-100 justify-center text-lg py-4 gap-16 border-solid border-b-2">
      <Link to="/" className={decideClass('/')}>
        Home
      </Link>
      <Link to="/shop" className={decideClass('/shop')}>
        Shop
      </Link>
      <Link to="/about" className={decideClass('/about')}>
        About
      </Link>
      <Link to="/cart" className={decideClass('/cart')}>
        Cart
      </Link>
    </nav>
  );
}
export default Navbar;
