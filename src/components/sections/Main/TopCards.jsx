import EarningIcon from "@/assets/icons/EarningIcon";
import OrderIcon from "@/assets/icons/OrderIcon";
import BalanceIcon from "@/assets/icons/BalanceIcon";
import SalesIcon from "../../../assets/icons/SalesIcon";
import IncomeCard from "../../../components/common/IncomeCard.jsx";
function TopCards() {
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
    <div className="flex gap-8 flex-wrap">
      {cardsData.map((card, index) => (
        <IncomeCard key={index} data={card} />
      ))}
    </div>
  );
}

export default TopCards;
