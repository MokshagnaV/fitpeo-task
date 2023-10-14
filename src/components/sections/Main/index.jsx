import BarGraph from "./BarGraph";
import DonutChart from "./DonutChart";
import Header from "./Header";
import ProductSell from "./ProductSell";
import TopCards from "./TopCards";

function Main() {
  return (
    <main className="px-10 py-4 bg-slate-200 flex flex-col w-full overflow-x-hidden overflow-y-auto">
      <Header />
      <TopCards />
      <div className="my-8 flex gap-8 max-xl:flex-wrap">
        <BarGraph />
        <DonutChart />
      </div>
      <ProductSell />
    </main>
  );
}

export default Main;
