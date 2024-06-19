import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Category from './Category.jsx';
import ProductSegment from './ProductSegment.jsx';
//import fakeItem from './fakeItem.js';

async function getItemsAPI(items) {
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  for (let i = 0; i < categories.length; i++) {
    let response = await fetch(
      `https://fakestoreapi.com/products/category/${categories[i]}?limit=10`
    );
    if (!response.ok) {
      console.log(response.Error);
      throw new Error('Something went wrong!');
    }
    response = await response.json();
    items[categories[i]] = response;
  }
  return items;
}

function ShopItems() {
  const [items, setItems] = useState({
    electronics: [],
    jewelery: [],
    "men's clothing": [],
    "women's clothing": [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);
  const [cart, setCart] = useState(
    window.sessionStorage.getItem('cart')
      ? JSON.parse(window.sessionStorage.getItem('cart'))
      : []
  );

  function addToCart(item, amount) {
    if (cart.find((ele) => ele.id == item.id) !== undefined) {
      let element = cart.find((ele) => ele.id == item.id);
      element.amount += amount;
      setCart((cart) => [...cart]);
      return;
    }
    let tempItem = { ...item };
    tempItem.amount = amount;
    setCart((cart) => [...cart, tempItem]);
  }
  //Effect to get items
  useEffect(() => {
    async function getItems() {
      try {
        let tempItems = { ...items };
        tempItems = await getItemsAPI(tempItems);
        setItems(tempItems);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    getItems();
  }, []);

  //Effect to update session storage on cart update
  useEffect(() => {
    console.log(cart);
    window.sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (error) {
    return <div>An error occurred check your connection!</div>;
  }
  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <CircularProgress color="success"></CircularProgress>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-20 px-20 py-20 overflow-y-scroll ">
      {focusedItem ? (
        <ProductSegment
          itemInfo={focusedItem}
          handleClick={setFocusedItem}
          addToCart={addToCart}
        ></ProductSegment>
      ) : (
        ''
      )}
      <Category
        categoryName={"men's clothing"}
        items={items["men's clothing"]}
        handleClick={setFocusedItem}
      ></Category>
      <Category
        categoryName={"women's clothing"}
        items={items["women's clothing"]}
        handleClick={setFocusedItem}
      ></Category>
      <Category
        categoryName={'electronics'}
        items={items.electronics}
        handleClick={setFocusedItem}
      ></Category>
      <Category
        categoryName={'jewelery'}
        items={items.jewelery}
        handleClick={setFocusedItem}
      ></Category>
    </div>
  );
}
export default ShopItems;
