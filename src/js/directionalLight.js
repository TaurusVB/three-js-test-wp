import * as THREE from "three";

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

export default directionalLight;
