let data = "";

// Fetch data
const req = new XMLHttpRequest();
req.open(
  "GET",
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
  true
);
req.send();
req.onload = function () {
  const json = JSON.parse(req.responseText);
  data = json.data;
};

// D3.js
document.addEventListener("DOMContentLoaded", function () {
  const width = 900;
  const height = 500;
  padding = 60;

  const dates = data.map((x) => {
    return new Date(x[0]);
  });

  const dateMax = new Date(d3.max(dates));
  const xScale = d3
    .scaleTime()
    .domain([d3.min(dates), dateMax])
    .range([padding, width - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([height - padding, 0]);

  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("id", "bars")
    .attr("width", width)
    .attr("height", height);

  const svg2 = d3
    .select("#bars")
    .append("svg")
    .attr("id", "svg2")
    .attr("width", width)
    .attr("height", height - padding);

  const tooltip = d3
    .select("#chart")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", "0");

  svg2
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("fill", "blue")
    .attr("class", "bar")
    .attr("x", (d, i) => xScale(dates[i]))
    .attr("y", (d, i) => yScale(d[1]))
    .attr("width", (width / data.length) * 0.5)
    .attr("data-date", (d, i) => d[0])
    .attr("data-gdp", (d) => d[1])
    .attr("height", (d, i) => d[1])
    .on("mouseover", function (d, i) {
      d3.select(this).transition().duration("50").attr("opacity", ".55");
      tooltip
        .transition()
        .duration("50")
        .style("opacity", "1")
        .attr("data-date", i[0]);
    })
    .on("mouseout", function (d, i) {
      d3.select(this).transition().duration("50").attr("opacity", "1");
      tooltip.transition().duration("50").style("opacity", 0);
      tooltip
        .html(i[0] + "<br>" + "$" + i[1])
        .style("left", d.clientX + 10 + "px")
        .style("top", d.clientY - 20 + "px");
    });

  const yAxis = d3.axisLeft(yScale);
  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", "translate(60,0)")
    .call(yAxis);

  const xAxis = d3.axisBottom(xScale);
  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);
});
