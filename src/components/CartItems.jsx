import Item from './Item';
import PropTypes from 'prop-types';

function Items({ cart, handleDelete }) {
  return (
    <div className="grid grid-cols-4 w-full gap-6">
      {cart.map((item) => (
        <Item key={item.id} itemInfo={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

function CartItems({ cart, handleDelete }) {
  return (
    <div className="flex flex-col w-3/4 h-full align gap-5">
      <h2 className="text-left text-2xl">Your cart items</h2>
      <hr className="border-2 border-secondary-300 w-full" />
      <Items cart={cart} handleDelete={handleDelete}></Items>
    </div>
  );
}

Items.propTypes = {
  cart: PropTypes.object,
  handleDelete: PropTypes.func,
};
CartItems.propTypes = {
  cart: PropTypes.object,
  handleDelete: PropTypes.func,
};
export default CartItems;
