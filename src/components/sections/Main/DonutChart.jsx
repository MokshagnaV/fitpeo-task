import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import Card from "../../common/Card";
import { useCallback, useState } from "react";

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <text
        x={cx + 4}
        y={cy}
        textAnchor="middle"
        fontWeight={700}
        fontSize={48}
        fill="#000"
      >
        {`${Math.round(percent * 100)}%`}
      </text>
      <text x={cx} y={cy + 20} textAnchor="middle" fontWeight={700} fill="#000">
        {payload.title}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

function DonutChart() {
  const customersData = [
    { title: "New Customers", value: 4846 },
    { title: "Old Customers", value: 3054 },
  ];
  const COLORS = ["#2d1dfd", "#ff05bc"];
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (x, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Card className="xl:w-[40%] w-full">
      <h3 className="text-2xl font-bold">Customers</h3>
      <p className="font-semibold tracking-wide text-slate-400">
        Customers that buy products
      </p>
      <div className=" h-[200px] md:h-[300px]">
        <ResponsiveContainer
          width="75%"
          height="100%"
          className="w-fit rounded-full m-auto my-5  aspect-square shadow-[0px_0px_19px_1px_#00000024]"
        >
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={customersData}
              innerRadius={80}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {customersData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default DonutChart;
