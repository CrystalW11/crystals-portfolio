import * as THREE from "three";

export const initThreeScene = () => {
  // Set up scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append renderer to the document
  document.body.appendChild(renderer.domElement);

  // Add a light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1); // Bright white light
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Create a basic geometry (for example, a cube)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position the camera
  camera.position.z = 5;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube for some basic animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  animate();

  // Handle window resizing
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
};
