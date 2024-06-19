import '../styles/promotion.css';

function Promotion() {
  return (
    <div className="width-full h-full flex flex-col justify-center items-center text-center gap-5 animation">
      <h1 className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-7xl font-semibold">
        Purchazoid
      </h1>
      <p className="text-xl text-white">Your one stop shop for everything!</p>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}
export default Promotion;
