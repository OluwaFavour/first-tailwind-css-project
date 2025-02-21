import Image from "next/image";
import Link from "next/link";
import { footerLogo } from "../../../public/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../../../public/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Image
            src={footerLogo}
            width={150}
            className="m-0"
            alt="Footer Logo"
          />
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Image src={social.src} alt={social.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item, index) => (
                  <li
                    key={index}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="CopyRight"
            className="rounded-full m-0 w-[1.25rem] h-[1.25rem]"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
