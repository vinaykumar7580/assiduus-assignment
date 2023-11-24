import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);

    const width = 650;
    const height = 200;
    const barWidth = 10;

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i))
      .range([0, width])
      .padding(0.3);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d))
      .attr("fill", "green");
  }, [data]);

  return <svg ref={chartRef} width={600} height={200}></svg>;
};

export default BarChart;
