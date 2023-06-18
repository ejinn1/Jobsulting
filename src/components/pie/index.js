import React from "react";
import { ResponsivePie } from "@nivo/pie";

function Piechart({ data, index }) {
  const total = data.reduce((sum, item) => sum + item.monthly_counts[index], 0);

  const pieData = data.map((item) => ({
    id: item.keyword,
    value: ((item.monthly_counts[index] / total) * 100).toFixed(2), // 소수점 둘째 자리까지 반올림
  }));

  const handle = {
    padClick: (data) => {
      console.log(data);
    },
    legendClick: (data) => {
      console.log(data);
    },
  };

  return (
    <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
      <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1.8}
        cornerRadius={8}
        colors={[
          "#1bbc9b",
          "#f0c50a",
          "#e77e21",
          "#e84c3e",
          "#9b57b4",
          "#3598db",
          "#9b8c31",
          "#cdbe75",
        ]}
        borderWidth={2}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        theme={{
          labels: {
            text: {
              fontSize: 14,
              fill: "#000000",
            },
          },
          legends: {
            text: {
              fontSize: 12,
              fill: "#000000",
            },
          },
        }}
        onClick={handle.padClick}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "olive",
                },
              },
            ],
            onClick: handle.legendClick,
          },
        ]}
      />
    </div>
  );
}

export default Piechart;
