import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Category from './Category.jsx';

async function getItemsAPI(items) {
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  for (let i = 0; i < categories.length; i++) {
    let response = await fetch(
      `https://fakestoreapi.com/products/category/${categories[i]}?limit=5`
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

  //Effect to print updated items
  useEffect(() => {
    console.log(items);
  }, [items]);

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
    <div className="h-full m-16 flex flex-col gap-20">
      <Category
        categoryName={"men's clothing"}
        items={items["men's clothing"]}
      ></Category>
      <Category
        categoryName={"women's clothing"}
        items={items["women's clothing"]}
      ></Category>
      <Category
        categoryName={'electronics'}
        items={items.electronics}
      ></Category>
      <Category categoryName={'jewelery'} items={items.jewelery}></Category>
    </div>
  );
}
export default ShopItems;
