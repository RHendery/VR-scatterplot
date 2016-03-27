//this creates the blue cube lines.
		function createCube(data, xScale, yScale, zScale, xExent, yExent, zExent)
		{	

        var vpts = {
            xMax: xExent[1],
            xCen: (xExent[1] + xExent[0]) / 2,
            xMin: xExent[0],
            yMax: yExent[1],
            yCen: (yExent[1] + yExent[0]) / 2,
            yMin: yExent[0],
            zMax: zExent[1],
            zCen: (zExent[1] + zExent[0]) / 2,
            zMin: zExent[0]
        }
		

		 var lineGeo = new THREE.Geometry();
         lineGeo.vertices.push(
            v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zCen)), v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zCen)), v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zCen)),
            v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zCen)), v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zCen)),
			v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zCen)), v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zCen)),
            v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zCen)), v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMin)),
			v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMin)), v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMax)),
			v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMax)), v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMin)),
			v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zMin)), v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zMax)),
			v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMax)), v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zMax)),
			v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zMin)), v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zMin)),
			v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zMax)), v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMax)),
			v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMax)), v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMax)),
			v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMin)), v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMin)),
			v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMax)), v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMax)),
			v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMin)), v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMin)),
			v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zCen)), v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zCen)),
			v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zCen)), v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zCen)),
			v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zCen)), v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMax)),
			v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMax)), v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMax)),
			v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMin)), v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMin)),
			v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMin)), v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMin)),
			v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMax)), v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMax))

        );
		
		  var lineMat = new THREE.LineBasicMaterial({
            color: 0x000000FF
           
        });
        var line = new THREE.Line(lineGeo, lineMat);
        line.type = THREE.Lines;
        scatterPlot.add(line);
		}
		
	