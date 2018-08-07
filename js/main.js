/* Hidding the Alert Message */
const animationTime = 500;
const $alertSlide = $(".alert__slide");
const $alertCloser = $(".button--close");
$alertCloser.click(function () {
  $alertSlide.slideUp(animationTime);
});

/* Traffic */
Chart.defaults.global.defaultFontColor = 'rgb(50, 50, 50)';
Chart.defaults.global.defaultFontSize = 13;
const $scaleOptions = $(".scale--option");
const hourlyTrafficData = {
  labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
  datasets: [{
    label: "hourly traffic",
    data: [4, 4, 1, 2, 18, 12, 15, 9, 14, 20, 11, 3],
    backgroundColor: "rgba(227, 227, 246, 0.75)",
    lineTension: 0,
    pointBorderColor: "rgb(115, 119, 191)",
    pointRadius: 7,
    pointBorderWidth: 3,
    pointBackgroundColor: "white",
}]};
const dailyTrafficData = {
  labels: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
  datasets: [{
    label: "daily traffic",
    data: [215, 178, 189, 267, 248, 228, 297, 159, 194, 253, 271, 239],
    backgroundColor: "rgba(227, 227, 246, 0.75)",
    lineTension: 0,
    pointBorderColor: "rgb(115, 119, 191)",
    pointRadius: 7,
    pointBorderWidth: 3,
    pointBackgroundColor: "white",
}]};
const weeklyTrafficData = {
  labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
  datasets: [{
    label: "weekly traffic",
    data: [250, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500],
    backgroundColor: "rgba(227, 227, 246, 0.75)",
    lineTension: 0,
    pointBorderColor: "rgb(115, 119, 191)",
    pointRadius: 7,
    pointBorderWidth: 3,
    pointBackgroundColor: "white",
}]};
const monthlyTrafficData = {
  labels: ['Jan', "Feb", "March", "May", "April", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: "monthly traffic",
    data: [5243, 6371, 4102, 6250, 3750, 6258, 3936, 7812, 5286, 4721, 5842, 6792],
    backgroundColor: "rgba(227, 227, 246, 0.75)",
    lineTension: 0,
    pointBorderColor: "rgb(115, 119, 191)",
    pointRadius: 7,
    pointBorderWidth: 3,
    pointBackgroundColor: "white",
}]};
const trafficDrawing = document.getElementById("chart-traffic").getContext('2d');
var trafficChart = new Chart(trafficDrawing, {
  type: "line",
  data: weeklyTrafficData,
  animation: {
    animateScale: true,
    duration: animationTime,
    easing: "linear",
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 2500,
          min: 0,
          stepSize: 500
        },
        gridLines: {
          drawTicks: false,
          color: "rgb(169, 172, 229)",
        }
      }],
      xAxes: [{
        gridLines: {
          drawTicks: false,
          color: "rgb(191, 192, 211)",
        },
      }],
    }
  },
});

$scaleOptions.click(function (event) {
  let target = event.target;
  let scale = target.textContent;
  $scaleOptions.removeClass("scale--selected");
  switch (scale) {
    case "Hourly":
      $($scaleOptions[0]).addClass("scale--selected");
      trafficChart.config.data = hourlyTrafficData;
      trafficChart.options.scales = {
        yAxes: [{
          ticks: {
            max: 24,
            min: 0,
            stepSize: 6
          },
          gridLines: {
            drawTicks: false,
            color: "rgb(169, 172, 229)",
          }
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            color: "rgb(191, 192, 211)",
          },
        }],
      };
      break;
    case "Daily":
      $($scaleOptions[1]).addClass("scale--selected");
      trafficChart.config.data = dailyTrafficData;
      trafficChart.options.scales = {
        yAxes: [{
          ticks: {
            max: 300,
            min: 150,
            stepSize: 50
          },
          gridLines: {
            drawTicks: false,
            color: "rgb(169, 172, 229)",
          }
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            color: "rgb(191, 192, 211)",
          },
        }],
      };
      break;
    case "Weekly":
      $($scaleOptions[2]).addClass("scale--selected");
      trafficChart.config.data = weeklyTrafficData;
      trafficChart.options.scales = {
        yAxes: [{
          ticks: {
            max: 2500,
            min: 0,
            stepSize: 500
          },
          gridLines: {
            drawTicks: false,
            color: "rgb(169, 172, 229)",
          }
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            color: "rgb(191, 192, 211)",
          },
        }],
      };
      break;
    case "Monthly":
      $($scaleOptions[3]).addClass("scale--selected");
      trafficChart.config.data = monthlyTrafficData;
      trafficChart.options.scales = {
        yAxes: [{
          ticks: {
            max: 8000,
            min: 3500,
            stepSize: 1500
          },
          gridLines: {
            drawTicks: false,
            color: "rgb(169, 172, 229)",
          }
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            color: "rgb(191, 192, 211)",
          },
        }],
      };
    break;
  }
  trafficChart.update();
});

/* Daily Traffic */
const trafficDataInWeek = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: "daily traffic",
    data: [228, 297, 159, 194, 253, 271, 239],
    backgroundColor: "rgba(116, 119, 191, 0.75)",
}]};
const dailyTrafficDrawing = document.getElementById("chart-daily-traffic").getContext('2d');
var dailyTrafficChart = new Chart(dailyTrafficDrawing, {
  type: "bar",
  data: trafficDataInWeek,
  animation: {
    animateScale: true,
    duration: animationTime,
    easing: "linear",
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 300,
          min: 150,
          stepSize: 25
        },
        gridLines: {
          drawTicks: false,
          color: "rgb(169, 172, 229)",
        }
      }],
      xAxes: [{
        gridLines: {
          drawTicks: false,
          color: "rgb(191, 192, 211)",
        },
      }],
    }
  },
});

/* Mobile Users */
const mobileData = {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [{
    label: "mobile users",
    data: [197, 102, 474],
    backgroundColor: ["rgba(116, 177, 191, 0.9)", "rgba(129, 201, 143, 0.9)", "rgba(115, 119, 191, 0.9)"],
}]};
const mobileDrawing = document.getElementById("chart-mobile").getContext('2d');
var mobileChart = new Chart(mobileDrawing, {
  type: "doughnut",
  data: mobileData,
  animation: {
    animateScale: true,
    duration: animationTime,
    easing: "linear",
  },
  options: {
    legend: {
      position: "right",
    },
    segmentShowStroke: false,
  }
});
