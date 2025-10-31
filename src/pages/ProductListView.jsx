import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Assuming you have a CartContext for cart management
const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Assuming useCart is a custom hook for cart management

  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex gap-7 items-center p-2 rounded-md">
        <img
          src={product.images}
          alt={product.title}
          className="h-60 w-60 cursor-pointer rounded-md"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold text-xl line-clamp-3 hover:text-red-500 w-full">
            {product.title}
          </h1>
          <p className="font-semibold flex items-center text-lg">
            <span className="text-4xl">{product.price}</span> (
            {product.discount} % off)
          </p>
          <p>
            FREE delivery <span className="font-semibold">Fri, 21 oct</span>
            <br />
            Or fastest delivery{" "}
            <span className="font-semibold">Wed, 19 oct</span>{" "}
          </p>
          <button onClick={()=>addToCart(product)} className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
