import Template from './Template';
import { SmallBall, StackedLeft, ThreeContainer } from './styled';
import { calc, easing, everyFrame, value, tween, physics } from 'popmotion';
import trackVisibility from './track-visibility';
const three = import('three');

const code = `const sphere = new THREE.Mesh(geometry, material);
const sphereY = value(5, (v) => sphere.position.y = v);

const gravity = physics({
  from: sphereY.get(),
  acceleration: - 9.8,
  restSpeed: false
}).pipe(
  (v) => (v <= 1) && gravity.setVelocity(10),
  (v) => Math.max(1, v)
).start(sphereY);`;

class Example extends React.Component {
  componentDidMount() {
    if (this.props.isVisible) this.startAnimation();
  }
  
  componentWillReceiveProps({ isVisible: willBeVisible }) {
    const { isVisible } = this.props;
    if (!isVisible && willBeVisible) this.startAnimation();
    if (isVisible && !willBeVisible) this.stopAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }
  
  startAnimation() {
    three.then((THREE) => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xFAFAFA);
      const container = document.getElementById('three-example');
      container.innerHTML = '';
      const camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(renderer.domElement);
      
      camera.position.y = 8;
      const cameraDistance = 10;
      const cameraRotation = value(0, (v) => {
        const { x, y } = calc.pointFromAngleAndDistance({ x: 0, y: 0 }, v, cameraDistance);
      
        camera.position.x = x;
        camera.position.z = y;
        camera.lookAt(0, 3, 0);
      });
      
      // Add sphere
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color: 0xFF1C68 });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      
      const sphereY = value(5, (v) => sphere.position.y = v);
      
      // Add grid
      const gridSize = 20;
      const gridDivisions = 20;
      const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x14D790, 0x14D790);
      scene.add(gridHelper);
      
      // Add lights
      const spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(100, 1000, 100);
      spotLight.castShadow = false;
      scene.add(spotLight);
      const spotLight2 = new THREE.SpotLight(0xffffff);
      spotLight2.position.set(100, -1000, 100);
      spotLight2.castShadow = false;
      scene.add(spotLight2);
      
      // Render loop
      const render = () => renderer.render(scene, camera);
      everyFrame().start(render);
      
      // Rotate camera
      tween({
        from: 0,
        to: 360,
        loop: Infinity,
        ease: easing.linear,
        duration: 12000
      }).start(cameraRotation);

      // Bounce ball
      const gravity = physics({
        from: sphereY.get(),
        acceleration: - 9.8,
        restSpeed: false
      }).start((v) => {
        if (v <= 1) {
          v = 1;
          gravity.setVelocity(10);
        }
      
        sphereY.update(v);
      });

      this.sphereY = sphereY;
      this.cameraRotation = cameraRotation;
    });
  }

  stopAnimation() {
    this.cameraRotation && this.cameraRotation.stop();
    this.sphereY && this.sphereY.stop();
  }

  render() {
    return (
      <ThreeContainer id="three-example"></ThreeContainer>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/WXgPKp?editors=0010">
    <Example isVisible={isVisible} />
  </Template>
));
