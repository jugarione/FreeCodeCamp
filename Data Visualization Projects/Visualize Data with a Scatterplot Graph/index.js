let url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

let data = [];
// D3

const req = new XMLHttpRequest();
req.open("GET", url, true);
req.send();
req.onload = function () {
  json = JSON.parse(req.responseText);
  data = json;
};
document.addEventListener("DOMContentLoaded", () => {
  const width = 900;
  const height = 500;
  padding = 60;

  const years = data.map((x) => {
    return new Date(x.Year);
  });

  const times = data.map((x) => {
    return new Date(x.Seconds);
  });
  const xScale = d3
    .scaleTime()
    .domain([d3.min(years) - 1, d3.max(years)])
    .range([padding, width - padding]);

  const yScale = d3
    .scaleTime()
    .domain([d3.max(times), d3.min(times)])
    .range([height - padding, 10]);

  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("data-xvalue", (d, i) => years[i].getTime())
    .attr("data-yvalue", (d, i) => times[i].getTime())
    .attr("cx", (d, i) => xScale(years[i]))
    .attr("cy", (d, i) => yScale(times[i]))
    .attr("r", "5");
  const formatedTime = d3.timeFormat("%M:%S");
  const yAxis = d3.axisLeft(yScale).tickFormat(formatedTime);

  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", "translate(60,0)")
    .call(yAxis);

  const xAxis = d3.axisBottom(xScale).tickFormat((d) => d.getTime());
  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0, " + (height - padding) + ")")
    .call(xAxis);
});
