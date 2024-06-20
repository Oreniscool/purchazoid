import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

Amount.propTypes = {
  itemInfo: PropTypes.object,
  changeAmount: PropTypes.func,
};
export default Amount;
