import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/spin.gif";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import noFound from "../assets/noData.gif"

const Products = () => {
  const { data, fetchAllProducts, categoryOnlyData, brandOnlyData } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 8;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchAllProducts();
      setLoading(false);
    };
    load();
  }, []);

  // Reset page on filter/search change
  useEffect(() => {
    setPage(1);
  }, [search, category, brand, priceRange]);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  // Filter products
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || item.category === category) &&
      (brand === "ALL" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.max(1, Math.ceil(filteredData?.length / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10 lg:mt-18 mt-10">
        {loading ? (
          <div className="flex items-center justify-center h-[400px]">
            <img src={Loading} alt="Loading..." className="w-20 h-20" />
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row gap-8">
              <FilterSection
                search={search}
                setSearch={setSearch}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                category={category}
                setCategory={setCategory}
                handleCategoryChange={(e) => setCategory(e.target.value)}
                handleBrandChange={(e) => setBrand(e.target.value)}
                categoryOnlyData={categoryOnlyData}
                brandOnlyData={brandOnlyData}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-4">
                {filteredData?.slice(startIndex, endIndex).map((Product, index) => (
                  <ProductCard key={index} Product={Product} />
                ))}

                {filteredData?.length === 0 && (
                  <div className="col-span-4 text-center  text-gray-500 mt-10">
             <img className=" w-[700px]" src={noFound} alt="" srcset="" />
                  </div>
                )}
              </div>
            </div>

            {filteredData?.length > 0 && (
              <div className="flex justify-center mt-6">
              <Pagination 
  pageHandle={pageHandler}  // ✅ match prop name
  page={page} 
  dynamicPage={dynamicPage} // ✅ fix typo
/>

              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
