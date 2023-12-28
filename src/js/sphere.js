import * as THREE from "three";
import * as dat from "dat.gui";

const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: false,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-10, 10, 0);
sphere.castShadow = true;

const gui = new dat.GUI();

const options = {
  sphereColor: "#ffea00",
  wireframe: false,
  speed: 0.01,
};

gui.addColor(options, "sphereColor").onChange(changeSphereColor);

gui.add(options, "wireframe").onChange(changeWireframe);

gui.add(options, "speed", 0, 0.1);

function changeSphereColor(e) {
  sphere.material.color.set(e);
}

function changeWireframe(e) {
  sphere.material.wireframe = e;
}

export { options as sphereOptions };

export default sphere;
