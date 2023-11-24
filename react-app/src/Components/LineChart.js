import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function LineChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    const width = 600;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 30 };

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    svg.selectAll("path").remove();
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", line);
  };

  return <svg ref={chartRef} width={600} height={200}></svg>;
}

export default LineChart;
