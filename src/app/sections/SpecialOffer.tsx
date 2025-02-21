import Image from "next/image";
import { offer } from "../../../public/images";
import Button from "../components/Button";
import { arrowRight } from "../../../public/icons";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="flex justify-center items-center max-container max-xl:flex-col-reverse gap-10"
    >
      <div className="flex-1 max-lg:hidden">
        <Image
          src={offer}
          alt="Special Offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconURL={arrowRight} altText="Arrow Right" />
          <Button label="Learn more" iconURL="" altText="" type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
