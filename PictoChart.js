var icon = "\uf005";
var fontSize = 24;
var iconSpace = 3;
var legendSpace = 20;
var legendX = 300;
var legendY = 20;
var legendTitle = "Ratings";
var color = d3.scale.ordinal()
				.range(["#8d5524", "#e0ac69", "#c68642", "#ffdbac", "#f1c27d"]);
var dataRating = [5, 4, 3, 2, 1]
var dataIcons = [[dataRating[0], icon], [dataRating[1], icon], [dataRating[2], icon], [dataRating[3], icon], [dataRating[4], icon]];
var dataText = ["When you hover over the stars...", "...you can show additional information next to the chart...", "...In this tutorial I will explain...", "...how you can make this interactive pictogram chart...", "...and customize the colors and icons."];
var data = [[dataRating[0], icon, dataText[0]], [dataText[0], icon, dataText[0]], [dataText[0], icon, dataText[0]], [dataText[0], icon, dataText[0]], [dataText[0], icon, dataText[0]], [dataText[0], icon, dataText[0]],
		    [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]],	[dataText[1], icon, dataText[1]],	[dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], [dataText[1], icon, dataText[1]], 
			[dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], [dataText[2], icon, dataText[2]], 
			[dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], [dataText[3], icon, dataText[3]], 
			[dataText[4], icon, dataText[4]], [dataText[4], icon, dataText[4]], [dataText[4], icon, dataText[4]], [dataText[4], icon, dataText[4]]
			];

function updateText(className, newText){
	$(className).text(newText);
}

function PictoChart(d) {	
	var row = 0;
	var chart = d3.select("svg")
					.attr("transform", "translate(0, 0)");

	var icons = chart.selectAll("g")
					.data(d).enter()
						.append("g");
	
	icons.append("text")
		.on("mouseover", function(d){ updateText("p", d[2]); })
		.attr("x", function(d, i){ return ((i%10 + 1) * (fontSize + 1 + iconSpace)) - fontSize;})
		.attr("y", function(d, i){ if(i%10 == 0){row++}; return row * fontSize;})
		.attr('font-family', 'FontAwesome')
		.attr('font-size', fontSize)
		.attr("fill", function(d){ return color(d);})
		.text(function(d) { return "\u00A0 " + d[1]; });
		
	var legend = chart.append('g')
		.attr('class', 'legend')
		.attr('transform', function(d, i) { return "translate(" + legendX + ", " + legendY + ")"; });
	
	legend.append("text")
		.attr("transform", "translate(0, 5)")
		.text(legendTitle);
		
	var legendItems = legend.selectAll("g")
		.data(dataIcons).enter()
			.append("g")
				.attr("class", "item")
				.attr("transform", function(d, i){ return "translate(0, " + (i*legendSpace + fontSize) + ")"; });
	
	legendItems.append("text")
		.attr('font-family', 'FontAwesome')
		.attr("fill", function(d){ return color(d);})
		.text(function(d) { return d[1]; });
	
	legendItems.append("text")
		.attr("transform", function(d){ return "translate(" + legendSpace + ", 0)"; })
		.text(function(d) { return d[0]; });
}