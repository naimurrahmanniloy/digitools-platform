import { Suspense, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import PremiumSection from "./components/PremiumSection/PremiumSection";
import Rating from "./components/Rating/Rating";
import StepsSection from "./components/StepsSection/StepsSection";
import Pricing from "./components/Pricing/Pricing";

const loadData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const pricing = async () => {
  const res = await fetch("/pricing.json");
  const data = await res.json();
  return data;
};

function App() {
  const fetchData = loadData();
  const fetchPricing = pricing();
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

      <StepsSection />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Pricing fetchPricing={fetchPricing} />
      </Suspense>
    </>
  );
}

export default App;
