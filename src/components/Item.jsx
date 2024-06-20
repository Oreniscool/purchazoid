/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function getTitle(title) {
  const max = 40;
  if (title.length > max) {
    return title.substring(0, max) + '...';
  }
  return title;
}

function Amount({ itemInfo, changeAmount }) {
  const [amount, setAmount] = useState(itemInfo.amount);
  useEffect(() => {
    changeAmount(itemInfo, amount);
  }, [amount]);
  return (
    <div className="flex w-3/4 justify-between items-center">
      <FontAwesomeIcon
        icon={faMinus}
        size="xs"
        className="border-2 p-2 rounded-full hover:bg-gray-100"
        onClick={() => {
          if (amount > 1) setAmount((amount) => amount - 1);
        }}
      />
      <div className="border-2 py-1 px-3 rounded-lg text-xl">{amount}</div>
      <FontAwesomeIcon
        icon={faPlus}
        size="xs"
        className="border-2 p-2 rounded-full hover:bg-gray-100"
        onClick={() => {
          if (amount < 10) setAmount((amount) => amount + 1);
        }}
      />
    </div>
  );
}
function Item({ itemInfo, handleClick, section, handleDelete, changeAmount }) {
  return (
    <div
      className="group flex flex-col justify-between items-center bg-white rounded overflow-hidden shadow-lg p-5  transition-all hover:shadow-xl px-10 hover:scale-105 z-0 cursor-pointer gap-2"
      onClick={() => {
        handleClick(itemInfo);
      }}
    >
      <img src={itemInfo.image} alt={itemInfo.title} className="w-24" />
      <h3 className="text-xl group-hover:text-accent-500 transition-all cursor-pointer">
        {getTitle(itemInfo.title)}
      </h3>
      <p className="group-hover:text-secondary-300 transition-all cursor-pointer">
        {'$' + itemInfo.price}
      </p>
      {section == 'shop' ? (
        ''
      ) : (
        <Amount itemInfo={itemInfo} changeAmount={changeAmount}></Amount>
      )}
      <div>
        {section == 'shop' ? (
          <button className="rounded bg-primary-600 p-2 hover:bg-secondary-500 transition-all text-white">
            Add to cart
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDelete(itemInfo)}
            size="xl"
            className="text-red-400 hover:text-red-600 transition-all"
          />
        )}
      </div>
    </div>
  );
}
export default Item;
