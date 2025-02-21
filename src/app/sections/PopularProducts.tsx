import { products } from "../constants";
import { star } from "../../../public/icons";
import Image from "next/image";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start items-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-14 sm:gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start w-full max-sm:w-full max-sm:items-center"
          >
            <Image src={product.imgURL} alt={product.name} />

            <div className="mt-8 flex justify-start gap-2.5">
              <Image src={star} alt="rating icon" width={24} height={24} />
              <p className="text-slate-gray font-montserrat text-xl leading-normal">
                (4.5)
              </p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
              {product.name}
            </h3>
            <p className="mt-2 text-coral-red leading-normal font-montserrat text-2xl font-semibold">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
