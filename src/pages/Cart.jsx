import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItems from '../components/CartItems';
import CartTotal from '../components/CartTotal';
import { useState, useEffect } from 'react';
function Cart() {
  const [cart, setCart] = useState(
    window.sessionStorage.getItem('cart')
      ? JSON.parse(window.sessionStorage.getItem('cart'))
      : []
  );
  function handleDelete(item) {
    setCart((cart) => cart.filter((element) => element.id !== item.id));
  }
  function changeAmount(item, amount) {
    let element = cart.find((ele) => ele.id == item.id);
    element.amount = amount;
    setCart((cart) => [...cart]);
  }
  useEffect(() => {
    window.sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-row m-16 h-full gap-10">
        <CartItems
          cart={cart}
          handleDelete={handleDelete}
          changeAmount={changeAmount}
        ></CartItems>
        <CartTotal cart={cart}></CartTotal>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Cart;
