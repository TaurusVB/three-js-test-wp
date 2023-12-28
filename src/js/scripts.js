import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import sphere, { sphereOptions } from "./sphere";
import box from "./box";
import plane from "./plane";
import ambientLight from "./ambientLight";
import directionalLight from "./directionalLight";

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(-10, 30, 30);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const axesHelper = new THREE.AxesHelper(3);
const gridHelper = new THREE.GridHelper(30);
const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
const dLightShadowHelper = new THREE.CameraHelper(
  directionalLight.shadow.camera
);

scene.add(axesHelper);
scene.add(sphere);
scene.add(box);
scene.add(plane);
scene.add(gridHelper);
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(dLightHelper);
scene.add(dLightShadowHelper);

let step = 0;

function animate(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;

  step += sphereOptions.speed;
  sphere.position.y = 10 * Math.abs(Math.sin(step));

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
