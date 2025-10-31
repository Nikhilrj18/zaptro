import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // fetch all products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=150');
      setData(res.data); // store data in state9
      // console.log(res);
      const ProductsData = res.data.products
      setData(ProductsData)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const getUniqueCategory = (data, Property) => {
      let newVal = data?.map((curElem) => {
        return curElem[Property];
      });
      newVal = ["ALL",...new Set(newVal)];
      return newVal;
    };
    const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand")
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};


export const getData = ()=> useContext(DataContext)