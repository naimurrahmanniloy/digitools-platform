import { Suspense, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import PremiumSection from "./components/PremiumSection/PremiumSection";
import Rating from "./components/Rating/Rating";

const loadData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const fetchData = loadData();
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <>
      <Navbar selectedProduct={selectedProduct} />
      <Homepage />
      <Rating />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PremiumSection
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          fetchData={fetchData}
        />
      </Suspense>
    </>
  );
}

export default App;
