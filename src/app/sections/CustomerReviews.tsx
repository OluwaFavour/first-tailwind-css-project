import Image from "next/image";
import { reviews } from "../constants";
import { star } from "../../../public/icons";

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container">
      <h3 className="text-center text-4xl font-bold font-palanquin">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="text-center info-text mt-4 max-w-lg m-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="px-24 grid grid-cols-2 max-sm:grid-cols-1 gap-14 mt-24 content-center justify-items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Image
              src={review.imgURL}
              alt={`head shot of ${review.customerName}`}
              className="rounded-full object-cover w-[7.5rem] h-[7.5rem]"
            />
            <p className="text-center mt-6 max-w-sm info-text">
              {review.feedback}
            </p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
              <Image
                src={star}
                alt="star icon"
                className="object-contain h-[1.5rem] w-[1.5rem]"
              />
              <p className="text-xl font-montserrat text-slate-gray">(4.5)</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
              {review.customerName}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
