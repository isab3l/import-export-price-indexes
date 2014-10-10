$(document).ready(function() {
	ChartGenerator.context = document.getElementById("myChart").getContext("2d");

	$.ajax({
		  url: "/data",
		  dataType: "json"
		})
		.done(function( data ) {
    		if ( console && console.log ) {
      			ChartGenerator.data.labels = data[0]
      			ChartGenerator.data.datasets[0].data = data[1]
				ChartGenerator.chart = new Chart(ChartGenerator.context).Line(ChartGenerator.data);
      		}
  		});


});

var ChartGenerator = {
	data: {
    	labels: ["January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July"],
    	datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
	        }//,
	        // {
	        //     label: "My Second dataset",
	        //     fillColor: "rgba(151,187,205,0.2)",
	        //     strokeColor: "rgba(151,187,205,1)",
	        //     pointColor: "rgba(151,187,205,1)",
	        //     pointStrokeColor: "#fff",
	        //     pointHighlightFill: "#fff",
	        //     pointHighlightStroke: "rgba(151,187,205,1)",
	        //     data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90]
	        // }
    	]
	}
}