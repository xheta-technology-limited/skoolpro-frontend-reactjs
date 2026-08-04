import { ContactUs, Navbar, Services } from "./components";
import { Hero } from "./components";
import { WhyUs } from "./components";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ContactUs />
    </div>
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

    //   </main>
    // </div>
  );
}
