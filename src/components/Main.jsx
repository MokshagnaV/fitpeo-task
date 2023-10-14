import IncomeCard from "./common/IncomeCard";
import EarningIcon from "../assets/icons/EarningIcon";
import OrderIcon from "../assets/icons/OrderIcon";
import BalanceIcon from "../assets/icons/BalanceIcon";
import SalesIcon from "../assets/icons/SalesIcon";

function Main() {
  const cardsData = [
    {
      bgColor: "bg-green-400",
      textColor: "text-green-700",
      imgSrc: (props) => <EarningIcon {...props} />,
      title: "Earning",
      income: "$198k",
      incomePercentage: "37.8%",
      period: "month",
      profit: true,
    },
    {
      bgColor: " bg-violet-400",
      textColor: "text-violet-700",
      imgSrc: (props) => <OrderIcon {...props} />,
      title: "Orders",
      income: "$2.4k",
      incomePercentage: "2%",
      period: "month",
      profit: false,
    },
    {
      bgColor: "bg-blue-400",
      textColor: "text-blue-700",
      imgSrc: (props) => <BalanceIcon {...props} />,
      title: "Balance",
      income: "$2.4k",
      incomePercentage: "2%",
      period: "month",
      profit: false,
    },
    {
      bgColor: "bg-red-400",
      textColor: "text-red-700",
      imgSrc: (props) => <SalesIcon {...props} />,
      title: "Total Sales",
      income: "$89k",
      incomePercentage: "11%",
      period: "month",
      profit: true,
    },
  ];

  return (
    <main className="px-10 py-4 bg-slate-200 flex-grow">
      <div className="py-4 flex justify-between gap-5 flex-wrap">
        <h1 className="text-2xl font-bold">Hello Evano 👋,</h1>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute top-[20%] left-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="pl-8 px-4 py-2 rounded-md focus-visible:outline-none focus-visible:outline-blue-900"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex gap-8 flex-wrap">
        {cardsData.map((card, index) => (
          <IncomeCard key={index} data={card} />
        ))}
      </div>
    </main>
  );
}

export default Main;
