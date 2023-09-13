import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const productCard = products.map((product) => (
    <div className="col mb-5" key={product.id}>
      <ProductCard
        // image={product.image}
        // name={product.name}
        // defaultPrice={product.price}
        // salePrice={product.salePrice}
        // review={product.review}
        {...product}
      />
    </div>
  ));

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productCard}

          {/* <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2023/07/ban-phim-akko-3098-rf-world-tour-london-01-768x768.jpg"
              }
              name={"AKKO 3098 RF World Tour London"}
              defaultPrice={70}
              salePrice={69.13}
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2023/07/3098-RF-Dracula-Castle-01-768x768.png"
              }
              name={"AKKO 3098 RF Dracula Castle"}
              defaultPrice={70}
              salePrice={69.13}
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2023/06/ban-phim-co-akko-mod007-pc-orange-on-black-768x768.jpg"
              }
              name={"AKKO MOD007 PC Orange on Black"}
              defaultPrice={110}
              salePrice={106.63}
              review
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2023/04/ban-phim-co-akko-3108-rf-ocean-star-001-768x768.png"
              }
              name={"AKKO 3087 RF Ocean Star"}
              defaultPrice={62.46}
              review
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2023/04/ban-phim-co-akko-3087-rf-matcha-red-bean-001-768x768.jpg"
              }
              name={"AKKO 3087 RF Matcha Red Bean"}
              defaultPrice={62.46}
              salePrice={60}
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2021/11/ban-phim-co-akko-3068b-multi-modes-black-pink-ava-akkovn-01-768x768.jpg"
              }
              name={"AKKO 3068B Multi-modes Black Pink"}
              defaultPrice={87.04}
              review
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2022/11/ban-phim-co-akko-3068b-plus-blue-on-white-001-768x768.jpg"
              }
              name={"AKKO 3068B Plus Blue on White"}
              defaultPrice={84}
              salePrice={81.21}
              review
            />
          </div>
          <div className="col mb-5">
            <ProductCard
              image={
                "https://akko.vn/wp-content/uploads/2022/02/ban-phim-co-akko-pc75b-plus-on-white-001-768x768.png"
              }
              name={"AKKO PC75B Plus Blue on White"}
              defaultPrice={104.14}
              review
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
