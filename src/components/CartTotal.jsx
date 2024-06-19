import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function CartTotal({ cart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost = totalCost + item.price * item.amount;
    });
    setTotal(totalCost);
  }, [cart]);
  return (
    <div className="w-1/4 border-2 h-1/2 rounded bg-white p-8 flex flex-col justify-evenly">
      <h1 className="text-2xl font-semibold">Order summary</h1>
      <div className="flex flex-col w-full h-1/2 justify-evenly">
        <div className="flex w-full justify-between text-gray-400 text-sm">
          <div>Subtotal{'(' + cart.length + ' items)'}</div>
          <div>{'$' + Math.round(total * 100) / 100}</div>
        </div>
        <div className="flex w-full justify-between text-gray-400 text-sm">
          <div>VAT{'(20%)'}</div>
          <div>{'$' + Math.round(total * 0.2 * 100) / 100}</div>
        </div>
        <hr className="border-1 border-secondary-300 w-full " />
        <div className="flex w-full justify-between font-semibold">
          <div>Total</div>
          <div className="text-lg text-accent-400">
            {'$' + Math.round(total * 1.2 * 100) / 100}
          </div>
        </div>
      </div>
      <button className="rounded text-white bg-primary-400 hover:bg-secondary-400 transition-all h-10">
        Checkout
      </button>
    </div>
  );
}

CartTotal.propTypes = {
  cart: PropTypes.object,
};
export default CartTotal;
