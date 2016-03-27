 
	//This is called by the callback function in the dataRead() function inside the read_data.js file.
	function scatter(data) {

	// These bits of code return a two-item array of min and max values for each column. Used to then scale the points to the size of the window. (and the lines to the size of the data).
var xExtent = d3.extent(data, function(d) {return d.x; });
		
var yExtent = d3.extent(data, function(d) {return d.y; });
		
var zExtent = d3.extent(data, function(d) {return d.z; });
		
	
var xScale = d3.scale.linear()
            .domain(xExtent)
            .range([-50, 50]);
var yScale = d3.scale.linear()
            .domain(yExtent)
            .range([-50, 50]);
var zScale = d3.scale.linear()
            .domain(zExtent)
            .range([-50, 50]);
					
//this createCube function is in a separate file (creates_cube_lines.js) and creates the lines around the outside of the cube.
createCube(data, xScale, yScale, zScale, xExtent, yExtent, zExtent);

//this createPoints function is in a separate file (creates_cube_lines.js) and creates the positions and colors of the points.
createPoints(data, xScale, yScale, zScale, xExtent, yExtent, zExtent);
	
}
		
		