import Card from "./Card";
import { cardsData } from "./data";

const Section3 = () => {
  return (
    <div className="section-3 w-full bg-black text-white col-center">
      <div className="container w-[80%] col-center p-12 mt-16 gap-20">
        <header>
          <div className="w-[50%]">
            <h1 className="font-bold text-lg">Explore the Zentry Universe</h1>
            <p className="text-gray-400">
              Immerse yourself in an IP-rich product universe where AI-driven
              gamification and hyper-personalization lead humans & AI into a
              global play economy.
            </p>
          </div>
        </header>

        <div className="row-2 w-full h-[60vh]">
          <Card {...cardsData[0]} />
        </div>

        <div className="row-3 flex gap-8">
          {/* Left Card */}
          <div>
            <Card {...cardsData[1]} />
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div className="h-[45vh]">
              <Card {...cardsData[2]} />
            </div>
            <div className="h-[45vh]">
              <Card {...cardsData[3]} />
            </div>
          </div>
        </div>

        <div className="row-4 w-full h-[45vh] flex gap-8">
          <Card heading="More comming soon." />
          <Card video="videos/feature-5.mp4" dontStopPlaying />
        </div>
      </div>
    </div>
  );
};

export default Section3;
