/* eslint-disable react/prop-types */

import Item from './Item';
function Items({ items, handleClick }) {
  return (
    <div className="flex w-full justify-start gap-10">
      {items.map((item) => (
        <Item
          key={item.id}
          itemInfo={item}
          handleClick={handleClick}
          section={'shop'}
        />
      ))}
    </div>
  );
}

function Category({ categoryName, items, handleClick }) {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <h2 className="text-xl">{categoryName}</h2>
      <hr className="border-2 border-secondary-300 w-full" />
      <Items items={items} handleClick={handleClick}></Items>
    </div>
  );
}
export default Category;
