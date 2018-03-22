// Load the Visualization API and the corechart package.
$("document").ready(function() {

  var data = {
    day: [
      ["eth", 3, 6, 34],
      ["btc", 2, 12, 7],
      ["prl", 23, 2, 34],
    ],
    week: [
      ["eth", 3, 6, 34],
      ["btc", 2, 2, 7],
      ["prl", 23, 2, 34],
    ],
    month: [
      ["eth", 34, 7, 4],
      ["btc", 25, 42, 17],
      ["prl", 78, 42, 34],
    ],
    year: [
      ["eth", 3, 6, 34],
      ["btc", 2, 17, 7],
      ["prl", 23, 2, 34],
    ]
  }
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    var options = {
      title: 'Tweets breakdown',
      series: {
        targetAxisIndex: 1
      },
      chartArea: {
        width: '80%',
        height: '80%'
      },
      legend: {
        position: 'bottom'
      }
    };

    for (time_frame in data) {
      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn('string', 'Coin');
      dataTable.addColumn('number', 'Positive');
      dataTable.addColumn('number', 'Neutral');
      dataTable.addColumn('number', 'Negative');
      dataTable.addRows(
        data[time_frame]
      );


      var chart = new google.visualization.ColumnChart(document.getElementsByClassName('chart-' + time_frame)[0]);
      var chart2 = new google.visualization.ColumnChart(document.getElementsByClassName('chart2-' + time_frame)[0]);

      chart.draw(dataTable, options);
      chart2.draw(dataTable, options);
      $(".chart-" + time_frame).not(".chart-day").addClass("d-none")
      $(".chart2-" + time_frame).not(".chart2-day").addClass("d-none")

    }


  }

  $(".sentiment-analysis__time-control").on("click", function() {
    var time_frame = $(this).data("time");

    $(".sentiment-analysis__chart").each(function() {


      if ($(this).hasClass("chart-" + time_frame) || $(this).hasClass("chart2-" + time_frame)) {

        $(this).removeClass("d-none");

      } else {

        $(this).addClass("d-none")

      }

    });
  })



});
