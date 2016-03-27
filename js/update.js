  function update(dt) {
      resize();
      camera.updateProjectionMatrix();
      controls.update(dt);
    }