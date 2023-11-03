const xValues = ["Vegetables", "Wheat", "Pulses", "Groundnuts", "Fruits"];
const yValues = [10, 25, 10, 30, 25];
const barColors = ["#a7c957", "#b91d47", "#00aba9", "#9c6644", "#ffbe0b"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Healthy Foods",
    },
  },
});
