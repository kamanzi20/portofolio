gsap.registerPlugin(ScrollTrigger);

/* -------- LENIS SMOOTH SCROLL -------- */
const lenis = new Lenis({
  duration: 1.2,
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* -------- HERO ANIMATION -------- */
gsap.from(".hero-title", {
  y: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

/* -------- BENTO SCROLL ANIMATION -------- */
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".bento",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  stagger: 0.15,
  duration: 1.2,
  ease: "power4.out"
});

/* -------- KINETIC TEXT DISTORT -------- */
gsap.to(".kinetic-text", {
  scrollTrigger: {
    trigger: ".kinetic",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  skewY: 10,
  scale: 1.2
});

/* -------- THREE.JS 3D GLASS SPHERE -------- */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("three-canvas"),
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshPhysicalMaterial({
  color: 0x4B1F3A,
  metalness: 0.3,
  roughness: 0.1,
  transmission: 1,
  thickness: 1.5,
  clearcoat: 1
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 8;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.003;
  sphere.rotation.x += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});