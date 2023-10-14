import Card from "./Card";

function DownArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className="w-[14px] h-[14px] text-red-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );
}

function UpArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className="w-[14px] h-[14px] text-green-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      />
    </svg>
  );
}

function IncomeCard({ data }) {
  return (
    <Card className="flex flex-grow min-w-fit items-center gap-5">
      <div
        className={`w-[50%] flex-grow max-w-[90px] aspect-square ${data.bgColor} bg-opacity-40 rounded-full flex justify-center items-center`}
      >
        {<data.imgSrc className={`${data.textColor} w-[60%] h-[60%]`} />}
      </div>
      <div className="w-[50%] flex-grow">
        <p className="font-semibold tracking-wide text-slate-400">
          {data.title}
        </p>
        <p className="text-4xl font-bold">{data.income}</p>
        <p className="flex gap-1 flex-wrap">
          <span
            className={`flex gap-1 items-center font-bold ${
              data.profit ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.profit ? <UpArrowIcon /> : <DownArrowIcon />}{" "}
            {data.incomePercentage}
          </span>{" "}
          <span>this {data.period}</span>
        </p>
      </div>
    </Card>
  );
}

export default IncomeCard;
