import Image from "next/image";

interface ButtonProps {
  label: string;
  iconURL: string;
  altText: string;
  type?: "primary" | "secondary";
}

const Button = ({ label, iconURL, altText, type = "primary" }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center rounded-full items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        type === "primary"
          ? "bg-coral-red border-coral-red text-white"
          : "bg-white border-slate-gray text-slate-gray"
      }`}
    >
      {label}

      {iconURL !== "" ? (
        <Image
          src={iconURL}
          alt={altText}
          width={20}
          height={20}
          className="ml-2 rounded-full w-5 h-5"
        />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
