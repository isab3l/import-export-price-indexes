$(document).ready(function() {
	new ChartGenerator("#importsChart", "#imports");
	new ChartGenerator("#exportsChart", "#exports");
	new ChartGenerator("#localityChart", "#localities-of-origin");

});

var ChartListener = function(selectId, chart){
	$(selectId).change(function(){
		var series = $(selectId+" option:selected").val();
		chart.update(series);
	})
}

var ChartGenerator = function(chartId, seriesSelect){
	this.chartId = chartId;
	this.series = $(seriesSelect+" option:selected").val();
	this.listener = new ChartListener(seriesSelect, this);
	this.init();
}

ChartGenerator.prototype.init = function(){
	this.data = {
    	datasets: [{
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
        }]
	}
	var self = this;
	$.ajax({
	  url: "/data",
	  dataType: "json",
	  data: self.series
	})
	.done(function( data ) {
		if ( console && console.log ) {
			self.context = $(self.chartId)[0].getContext("2d");
  			self.data.labels = data[0]
  			self.data.datasets[0].data = data[1]
			self.chart = new Chart(self.context).Line(self.data);
  		}
	});
}

ChartGenerator.prototype.update = function(series){
	var self = this;
	console.log(series);
	$.ajax({
	  url: "/data",
	  dataType: "json",
	  data: series
	})
	.done(function( data ) {
		if ( console && console.log ) {
			self.chart.destroy();
			self.context = $(self.chartId)[0].getContext("2d");
			self.context.canvas.width = 800;
			self.context.canvas.height = 300;
  			self.data.labels = data[0];
  			self.data.datasets[0].data = data[1];
			self.chart = new Chart(self.context).Line(self.data);
			self.chart.update();
  		}
	});
}