import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noFound from "../assets/noData.gif";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState("")
  const {addToCart} = useCart()

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      console.log(res);
      const product = res.data;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const OrginalPrice = Math.round(
    SingleProduct.price +
      (SingleProduct.price * SingleProduct.discountPercentage) / 100
  );

  return (
    <>
      {SingleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={SingleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* product images */}
            <div className="w-full">
              <img
                src={SingleProduct.images}
                alt={SingleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">
                {SingleProduct.title}
              </h1>
              <div className="text-gray-700">
                {SingleProduct.brand?.toUpperCase()} /
                {SingleProduct.category.toUpperCase()} / {SingleProduct.model}
              </div>
              <p className="text-xl text-red-500 font-bold">
                ₹{SingleProduct.price}{" "}
                <span className="line-through text-gray-700">
                  ₹{OrginalPrice}
                </span>{" "}
                <span className="bg-red-500 text-white px-4 py-2 rounded-full">
                  {SingleProduct.discountPercentage}% discount
                </span>
              </p>
              <p className="flex items-center gap-4">
                {SingleProduct.description}
              </p>

              {/* qunatity selector */}

              <div className="flex iteam-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></input>
              </div>
              <div className="flex gap-4 mt-4">
                <button onClick={()=>addToCart(SingleProduct)} className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md">
                  <IoCartOutline /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-4 text-center  text-gray-500 mt-10">
          <img className=" w-[700px]" src={noFound} alt="" srcset="" />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
