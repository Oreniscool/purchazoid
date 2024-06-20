import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Amount from './Amount';
function getTitle(title) {
  const max = 40;
  if (title.length > max) {
    return title.substring(0, max) + '...';
  }
  return title;
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
Item.propTypes = {
  itemInfo: PropTypes.object,
  handleClick: PropTypes.func,
  section: PropTypes.string,
  handleDelete: PropTypes.func,
  changeAmount: PropTypes.func,
};
export default Item;
