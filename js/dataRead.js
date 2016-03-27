

 //this reads the file into a d3 data object array, and you can access all the columns by the labels defined below (x, y, z, label, family, etc)
function dataRead() {
	//d3.text("bigwals-VR.csv", "text/csv", f_csv);
	d3.csv("bigwals-VR.csv", function(d) {
	return {
	x : +d.x, //the plus converts type to an integer for non-text
	y : +d.y,
	z : +d.z, 
	label : d.label,
	family : d.family,
	region : d.region
	};
}, function(data) { 
	scatter(data); //this is in the create_scatterplot.js file
});
	
	

}

	