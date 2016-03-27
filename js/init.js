  function init() {
		
      renderer = new THREE.WebGLRenderer();
      element = renderer.domElement;
      container = document.getElementById('scatterplot');
      container.appendChild(element);

      effect = new THREE.StereoEffect(renderer);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
      camera.position.set(0, 10, 0);
      scene.add(camera);

      controls = new THREE.OrbitControls(camera, element);
      controls.rotateUp(Math.PI / 4);
      controls.target.set(
        camera.position.x + 0.1,
        camera.position.y,
        camera.position.z
      );
      controls.noZoom = true;
      controls.noPan = true;

      window.addEventListener('deviceorientation', setOrientationControls, true); //this calls a function in the "helpers.js" file.


      var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
      scene.add(light);

      window.addEventListener('resize', resize, false);
      setTimeout(resize, 1);
	   
	 
    scene.add(scatterPlot); //this is adding a placeholder sort of scatterplot object. The details of what it looks like don't get defined until later.

    scatterPlot.rotation.y = 0;

	
    
	}
