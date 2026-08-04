import { Link } from "react-router-dom";
import { AdmiralBlue11 } from "@/components/icons/logos";

const Navbar = () => {
  return (
    <nav className="flex h-19 items-center justify-between mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-25 md:mt-10.25 md:h-13.5">
      <AdmiralBlue11
        width={200}
        height={54}
        className="h-auto w-37.5 max-w-full md:w-auto"
      />

      <div className="flex items-center justify-center gap-10">
        <ul className="hidden items-center gap-12 font-normal lg:flex">
          <li>
            <Link
              to="/"
              className="text-primary-1000 no-underline hover:opacity-80"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#why-us"
              className="text-primary-1000 no-underline hover:opacity-80"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#services"
              className="text-primary-1000 no-underline hover:opacity-80"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="#contact-us"
              className="text-primary-1000 no-underline hover:opacity-80"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="rounded-[13px] bg-primary px-4 py-2 font-normal text-white transition-transform hover:scale-105">
          Book a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
