import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";
import union from "@/assets/Union.png";
import pointer from "@/assets/images/cta-pointer.png";

const NotFound = () => {
  return (
    <div className="flex w-full flex-col">
      <Navbar />

      <main className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-25 mt-8 sm:mt-9 md:mt-10 lg:mt-12 xl:mt-12.75 mb-8 sm:mb-16 md:mb-24 lg:mb-32 xl:mb-33.75 rounded-lg bg-primary lg:rounded-[48px]">
        <div className="relative mx-auto max-w-360 px-6 pt-5 pb-18.25 sm:px-10 md:px-16 lg:px-20 lg:pt-[118.5px] lg:pb-[118.5px] xl:px-25.25">
          {/* decorative: dot, top right */}
          <div className="absolute h-4 w-4 rounded-full bg-white left-[87.5%] top-[13.05%] lg:left-[89.44%] lg:top-[9.65%] lg:h-5 lg:w-5" />

          {/* decorative: dot, bottom left */}
          <div className="absolute h-4 w-4 rounded-full bg-secondary left-[12.99%] bottom-31.25 lg:left-[18.47%] lg:bottom-26.25 lg:h-5 lg:w-5" />

          {/* logo: flex on mobile, absolute-overlapping on lg */}
          <div className="flex h-15.5 w-15.5 items-center justify-center lg:absolute lg:top-25 lg:left-11.75 lg:h-28.75 lg:w-28.75">
            <img
              width={69}
              height={69}
              src={union}
              alt=""
              className="h-[41.4px] w-[41.4px] lg:h-17.25 lg:w-17.25"
            />
          </div>

          <div>
            <h1 className="mt-0 text-center font-lora text-[32px] font-semibold leading-[1.2] text-white lg:font-(family-name:--font-poppins) lg:text-[56px] lg:font-bold">
              Oops! <span className="text-secondary">404</span>
              <br />
              Page Not Found
            </h1>
            <p className="mx-auto mt-8 w-full max-w-259.25 text-center font-lora text-[16px] font-normal leading-[1.2] text-white lg:mt-12 lg:font-(family-name:--font-poppins) lg:text-[24px]">
              The page you&apos;re looking for might have been removed, had its
              name changed, or is temporarily unavailable.
            </p>

            <div className="mx-auto mt-8 text-center lg:mt-12">
              <Link
                to="/"
                className="inline-flex items-center rounded-2xl bg-secondary px-6 py-2 font-lora text-[16px] font-normal leading-[1.2] text-primary-1000 no-underline transition-transform hover:scale-105 lg:font-(family-name:--font-poppins) lg:text-[24px] lg:leading-none"
              >
                Back to Home
                <img
                  src={pointer}
                  alt="arrow"
                  className="ml-1 inline-block h-10 w-auto"
                  height={48}
                  width={48}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
