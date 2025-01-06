import Card from "./Card";

const Section3 = () => {
  return (
    <div className="section-3 w-full bg-black text-white col-center">
      <div className="w-[80%] border-1 col-center p-12 mt-16 gap-20">
        <div className="row-1 ">
          <div className="w-[40%]">
            <h1 className="font-bold text-lg">Explore the Zentry Universe</h1>
            <p className="text-gray-400">
              Immerse yourself in an IP-rich product universe where AI-driven
              gamification and hyper-personalization lead humans & AI into a
              global play economy.
            </p>
          </div>
        </div>
        <div className="row-2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Section3;
