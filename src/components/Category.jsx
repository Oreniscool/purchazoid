/* eslint-disable react/prop-types */

import Item from './Item';
function Items({ items }) {
  return (
    <div className="flex w-full justify-start gap-10">
      {items.map((item) => (
        <Item key={item.id} itemInfo={item} />
      ))}
    </div>
  );
}

function Category({ categoryName, items }) {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <h2 className="text-xl">{categoryName}</h2>
      <hr className="border-2 border-secondary-300 w-full" />
      <Items categoryName={categoryName} items={items}></Items>
    </div>
  );
}
export default Category;
