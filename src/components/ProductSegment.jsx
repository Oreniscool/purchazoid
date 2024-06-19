import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Product({ itemInfo, handleClick, addToCart }) {
  const [amount, setAmount] = useState(1);
  return (
    <div className="relative z-10">
      <div className="fixed h-screen w-screen bg-filter top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/4 rounded-md bg-white p-10 flex gap-10 items-center">
        <div
          className="absolute top-3 left-3"
          onClick={() => handleClick(null)}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="xl"
            className="text-red-400 hover:text-red-600 transition-all"
          ></FontAwesomeIcon>
        </div>
        <img
          className="w-1/2 h-3/4 object-contain border-2 rounded-lg"
          src={itemInfo.image}
          alt={itemInfo.title}
        />
        <div className="flex flex-col items-center h-full w-1/2 justify-between">
          <div className="flex flex-col items-center gap-7 justify-center h-1/2">
            <h3 className="text-xl font-semibold">{itemInfo.title}</h3>
            <p className="font-light text-sm text-gray overflow-clip h-3/4">
              {itemInfo.description}
            </p>
          </div>
          <div className="flex flex-col items-center gap-7 justify-center h-1/2">
            <h4>
              Item price:
              <span className="text-accent-500 text-2xl">
                {' $' + itemInfo.price}
              </span>
            </h4>
            <input
              aria-label="Enter number of this item to add"
              placeholder="Enter amount"
              type="number"
              value={amount}
              onChange={(event) => setAmount(parseInt(event.target.value))}
              min="1"
              max="10"
              className="border-2 w-1/2"
            ></input>
            <button
              className="rounded bg-primary-600 p-2 hover:bg-secondary-500 transition-all text-white"
              onClick={() => addToCart(itemInfo, amount)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  itemInfo: PropTypes.object,
  handleClick: PropTypes.func,
  addToCart: PropTypes.func,
};
export default Product;
