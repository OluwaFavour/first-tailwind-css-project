import Image from "next/image";
import { services } from "../constants";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center gap-9 flex-wrap"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="flex-1 sm:w-[21.875rem] sm:min-w[21.875rem] w-full rounded-[20px] shadow-3xl px-10 py-16"
        >
          <div className="flex justify-center items-center bg-coral-red w-11 h-11 rounded-full">
            <Image
              src={service.imgURL}
              alt={service.label}
              width={24}
              height={24}
            />
          </div>
          <h3 className="text-3xl mt-5 font-palanquin font-bold leading-normal">
            {service.label}
          </h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
