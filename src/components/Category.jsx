import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const { categoryOnlyData } = getData();
  const navigate = useNavigate()

  return (
    <div className="bg-[#101829]">
      {" "}
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-center py-7 px-4">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index}>
              {" "}
              <button onClick={()=>navigate(`/category/${item}`)} className="text-white cursor-pointer bg-red-500 p-3 rounded-md uppercase hover:scale-105">
                {item}
              </button>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
};
export default Category;
