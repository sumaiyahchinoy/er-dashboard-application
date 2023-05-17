import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import axios from "axios";

export const MyResponsiveLine = ({}) => {
  const [graphData, setgraphData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/patientForecast/"
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        jsonToGraphData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const jsonToGraphData = (jsonData) => {
    const data = [
      {
        id: "Predictions",
        data: jsonData.index.map((date, index) => ({
          x: formatDate(date),
          y: jsonData.Predictions[index],
        })),
      },
    ];
    setgraphData(data);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);
    const [month, day, year] = formattedDate.split("/");
    return `${year}-${month}-${day}`;
  };

  return (
    // <ResponsiveLine
    //   data={data}
    //   margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    //   xScale={{ type: "point" }}
    //   yScale={{
    //     type: "linear",
    //     min: "auto",
    //     max: "auto",
    //     stacked: true,
    //     reverse: false,
    //   }}
    //   yFormat=" >-.2f"
    //   axisTop={null}
    //   axisRight={null}
    //   axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: "transportation",
    //     legendOffset: 36,
    //     legendPosition: "middle",
    //   }}
    //   axisLeft={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: "count",
    //     legendOffset: -40,
    //     legendPosition: "middle",
    //   }}
    //   pointSize={10}
    //   pointColor={{ theme: "background" }}
    //   pointBorderWidth={2}
    //   pointBorderColor={{ from: "serieColor" }}
    //   pointLabelYOffset={-12}
    //   useMesh={true}
    //   legends={[
    //     {
    //       anchor: "bottom-right",
    //       direction: "column",
    //       justify: false,
    //       translateX: 100,
    //       translateY: 0,
    //       itemsSpacing: 0,
    //       itemDirection: "left-to-right",
    //       itemWidth: 80,
    //       itemHeight: 20,
    //       itemOpacity: 0.75,
    //       symbolSize: 12,
    //       symbolShape: "circle",
    //       symbolBorderColor: "rgba(0, 0, 0, .5)",
    //       effects: [
    //         {
    //           on: "hover",
    //           style: {
    //             itemBackground: "rgba(0, 0, 0, .03)",
    //             itemOpacity: 1,
    //           },
    //         },
    //       ],
    //     },
    //   ]}
    // />
    <ResponsiveLine
      animate
      data={graphData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      curve="linear"
      colors={{ scheme: "nivo" }}
      lineWidth={3}
      pointSize={4}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      enableGridX={false}
      enableGridY={true}
      enablePoints={true}
      enableCrosshair={false}
      useMesh={true}
      axisBottom={{
        format: "%b %d",
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle",
        tickValues: "every 2 days",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count of Patient",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      xFormat="time:%Y-%m-%d"
      xScale={{
        format: "%Y-%m-%d",
        precision: "day",
        type: "time",
        useUTC: false,
      }}
    />
  );
};
