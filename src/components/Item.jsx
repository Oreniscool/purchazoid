/* eslint-disable react/prop-types */
function getTitle(title) {
  const max = 40;
  if (title.length > max) {
    return title.substring(0, max) + '...';
  }
  return title;
}
function Item({ itemInfo }) {
  return (
    <div className="group flex flex-col justify-between items-center bg-white w-fit rounded overflow-hidden shadow-lg p-5  transition-all hover:shadow-xl px-10 hover:scale-105 w-1/4 ">
      <img src={itemInfo.image} alt={itemInfo.title} className="w-24" />
      <h3 className="text-xl group-hover:text-accent-500 transition-all ">
        {getTitle(itemInfo.title)}
      </h3>
      <p className="group-hover:text-secondary-300 transition-all ">
        {'$' + itemInfo.price}
      </p>
      <div>
        <button className="rounded bg-primary-600 p-2 hover:bg-secondary-500 transition-all text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Item;
