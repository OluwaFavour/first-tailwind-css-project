import Image from "next/image";
import { headerLogo } from "../../../public/images";
import { hamburger } from "../../../public/icons";
import { navLinks } from "../constants";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image src={headerLogo} alt="logo" width={130} height={29} />
        </Link>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <Link href={"/"}>
            Sign in <span>/</span> Explore now
          </Link>
        </div>
        <Link href="/" className="hidden max-lg:block">
          <Image src={hamburger} alt="menu" width={24} height={24} />
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
