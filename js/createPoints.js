	function createPoints(data, xScale, yScale, zScale, xExent, yExent, zExent)	
		{
		var particleTexture = THREE.ImageUtils.loadTexture('textures/ball.png');
		   var mat = new THREE.PointsMaterial({
            map: particleTexture,
			transparent: true,
			size: spheresize,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
			vertexColors: THREE.VertexColors
        });

        var pointCount = data.length;
		
        var pointGeo = new THREE.Geometry();
        for (var i = 0; i < pointCount; i++) {
            var x = xScale(data[i].x);
            var y = yScale(data[i].y);
            var z = zScale(data[i].z);

            pointGeo.vertices.push(new THREE.Vector3(x, y, z));
			
			//console.log(data[i].region);
			
			
			
		if (data[i].region == "Africa") {
		   pointGeo.colors.push(new THREE.Color().setRGB(africa_r, africa_g, africa_b));
	
		  }
		  
		   else if (data[i].region == "Australia") {
		  pointGeo.colors.push(new THREE.Color().setRGB(australia_r, australia_g, australia_b));
		  
		  }
		
		   else if (data[i].region == "Eurasia") {
		  pointGeo.colors.push(new THREE.Color().setRGB(eurasia_r, eurasia_g, eurasia_b));
		  
		  }
		   
		    else if (data[i].region == "North America") {
		  pointGeo.colors.push(new THREE.Color().setRGB(america1_r, america1_g, america1_b));
		  
		  }
		  
		   else if (data[i].region == "Papuanesia") {
		  pointGeo.colors.push(new THREE.Color().setRGB(pap_r, pap_g, pap_b));
		  
		  }
		  
		  else if (data[i].region == "South America") {
		 //  console.log(data[i]);
		  pointGeo.colors.push(new THREE.Color().setRGB(america2_r, america2_g, america2_b));
		  
		  }
		  
		  else { pointGeo.colors.push(new THREE.Color().setRGB(0,0,0));
		  
		  }


        }
		var points = new THREE.Points(pointGeo, mat);
        scatterPlot.add(points);
		
		}