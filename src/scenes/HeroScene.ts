import * as THREE from 'three';

export const createHeroScene = (container: HTMLElement): THREE.Scene => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0xf4f2ec, 1);
  container.appendChild(renderer.domElement);

  // Create a simple geometry
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial({ color: 0xc8a96a });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Lighting
  const light = new THREE.DirectionalLight(0xffffff, 0.8);
  light.position.set(5, 5, 5);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  camera.position.z = 3;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  window.addEventListener('resize', handleResize);

  return scene;
};
