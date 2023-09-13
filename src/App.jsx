import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";

const products = [
  {
    id: 1,
    name: "iPhone 9",
    defaultPrice: 549,
    salePrice: 500,
    image: "https://placehold.co/450x300",
    review: true,
  },
  {
    id: 2,
    name: "iPhone X",
    defaultPrice: 799,
    salePrice: 600,
    image: "https://placehold.co/450x300",
    review: false,
  },
  {
    id: 3,
    name: "Samsung Universe 9",
    defaultPrice: 399,
    image: "https://placehold.co/450x300",
    review: true,
  },
];

function App() {
  const [items, setItems] = useState(products);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        const data = await res.json();

        setItems(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <ProductList products={items} />
      <Footer />
    </>
  );
}

export default App;
