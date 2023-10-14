import Card from "@/components/common/Card.jsx";
import SearchBar from "../../common/SearchBar";
import { useEffect, useRef, useState } from "react";
import Select from "../../common/Select";
import ProductsTable from "./ProductsTable";
function ProductSell() {
  const [options, setOptions] = useState([{ label: "Dummy Option", value: 1 }]);
  const [data, setData] = useState([]);
  const [currProducts, setCurrProducts] = useState([]);
  const [currTotalProducts, setCurrTotalProducts] = useState([]);
  const selectRef = useRef();
  const inputRef = useRef();

  // Initial Data Fetch from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
    console.log("data");
  }, []);

  // Whenever the data is fetched, current products and category list is updated
  useEffect(() => {
    setCurrProducts(data);
    const categories = data.map((product) => {
      return { label: product.category, value: product.category };
    });
    setOptions(
      categories.filter((cat, index) => {
        return index === categories.findIndex((c) => cat.label === c.label);
      })
    );
    console.log("ref");
  }, [data]);

  // Whenever the current Products state is updated total number is products current displaying is updated
  useEffect(() => {
    setCurrTotalProducts(currProducts.length);
  }, [currProducts]);

  function handleCategoryChange() {
    const category = selectRef.current.value;
    if (category) {
      setCurrProducts(data.filter((product) => product.category === category));
    } else {
      setCurrProducts(data);
    }
  }

  function handleSearchQuery() {
    const query = inputRef.current.value.toLowerCase();
    if (query) {
      setCurrProducts(
        data.filter((product) => {
          const index = product.title.trim().toLowerCase().indexOf(query);
          return index > -1;
        })
      );
    } else {
      setCurrProducts(data);
    }
  }

  return (
    <Card>
      <div className="flex justify-between flex-wrap gap-5">
        <h3 className="text-2xl font-bold">
          Product Sell ({currTotalProducts})
        </h3>
        <div className="flex gap-4 flex-wrap">
          <SearchBar
            className="bg-slate-100 text-slate-600  max-md:w-full"
            ref={inputRef}
            handleSearchQuery={handleSearchQuery}
          />
          <Select
            ref={selectRef}
            options={options}
            handleCategoryChange={handleCategoryChange}
            className="bg-slate-100 text-slate-600 max-md:w-full"
          />
        </div>
      </div>
      <ProductsTable data={currProducts} />
    </Card>
  );
}

export default ProductSell;
