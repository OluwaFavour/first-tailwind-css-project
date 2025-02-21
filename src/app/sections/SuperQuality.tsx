import Image from "next/image";
import Button from "../components/Button";
import { shoe8 } from "../../../public/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between w-full items-center max-lg:flex-col gap-10 max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg capitalize">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="info-text lg:max-w-lg mt-4">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" iconURL="" altText="" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center max-lg:hidden">
        <Image
          src={shoe8}
          alt="product detail"
          width={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
