import Card from "@/components/common/Card.jsx";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

function BarGraph() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyIncome = [
    ...months.map((month) => {
      const income = Math.round(Math.random() * 200000 * 100) / 100;
      return { month, income };
    }),
  ];

  return (
    <Card className="xl:w-[60%] w-full">
      <h3 className="text-2xl font-bold">Overview</h3>
      <p className="font-semibold tracking-wide text-slate-400">
        Monthly Earning
      </p>
      <div className="h-[200] md:h-[300]">
        <ResponsiveContainer
          width="100%"
          height={300}
          className="my-5 overflow-visible"
        >
          <BarChart
            width={700}
            height={300}
            className="w-full"
            data={monthlyIncome}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              height={50}
              tickMargin={10}
            />
            <Bar
              dataKey="income"
              fill="#4f46e5"
              radius={10}
              className="drop-shadow-lg"
              cursor="pointer"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default BarGraph;
