
import { Footer } from "./_components/footer";
import GetStarted from "./_components/get-started";
import { Heading } from "./_components/heading";
import { Hero } from "./_components/hero-section";
import Multitenancy from "./_components/multitenancy";
import { Testimony } from "./_components/testimonies";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Multitenancy/>
        <GetStarted/>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
