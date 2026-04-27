import * as THREE from 'three';

interface HeroSceneConfig {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
}

export class HeroScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private floorplan: THREE.Group;
  private roomLines: THREE.Line[] = [];
  private animationFrameId: number | null = null;

  constructor(config: HeroSceneConfig) {
    const { canvas, width, height } = config;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf4f2ec);

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 8, 8);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 10, 5);
    this.scene.add(directionalLight);

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20);
    gridHelper.position.set(0, 0, 0);
    gridHelper.material.color.setHex(0xc8a96a);
    (gridHelper.material as THREE.Material).opacity = 0.15;
    (gridHelper.material as THREE.Material).transparent = true;
    this.scene.add(gridHelper);

    // Create floor plan
    this.floorplan = new THREE.Group();
    this.scene.add(this.floorplan);

    this.createFloorPlan();
    this.animate();
  }

  private createFloorPlan(): void {
    const rooms = [
      { pos: [0, 0] as [number, number], size: [3.5, 3.5] as [number, number], label: 'Cozinha' },
      { pos: [4, 0] as [number, number], size: [3.5, 4] as [number, number], label: 'Quarto Principal' },
      { pos: [0, 4] as [number, number], size: [3, 3.5] as [number, number], label: 'Quarto 2' },
      { pos: [7.5, 0] as [number, number], size: [2, 2] as [number, number], label: 'WC' },
      { pos: [3.5, 4] as [number, number], size: [1.5, 3.5] as [number, number], label: 'Corredor' },
    ];

    rooms.forEach(({ pos, size }) => {
      const line = this.createRoom(pos, size);
      this.roomLines.push(line);
      this.floorplan.add(line);
    });
  }

  private createRoom(position: [number, number], size: [number, number]): THREE.Line {
    const [x, y] = position;
    const [width, height] = size;

    const points = [
      new THREE.Vector3(x, 0, y),
      new THREE.Vector3(x + width, 0, y),
      new THREE.Vector3(x + width, 0, y + height),
      new THREE.Vector3(x, 0, y + height),
      new THREE.Vector3(x, 0, y),
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0xc8a96a,
      linewidth: 2,
      transparent: true,
      opacity: 0,
    });

    return new THREE.Line(geometry, material);
  }

  updateProgress(progress: number): void {
    if (!this.floorplan) return;

    const cameraProgress = Math.min(progress * 1.5, 1);
    const cameraZ = THREE.MathUtils.lerp(12, 3, cameraProgress);
    const cameraY = THREE.MathUtils.lerp(8, 6, cameraProgress);

    this.camera.position.z = cameraZ;
    this.camera.position.y = cameraY;

    const lineOpacity = Math.min(progress * 2, 1);

    this.roomLines.forEach((line) => {
      (line.material as THREE.LineBasicMaterial).opacity = lineOpacity;
    });

    this.floorplan.rotation.y = progress * 0.3;
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };

  resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  destroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer.dispose();
    this.roomLines.forEach((line) => {
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    });
  }
}
