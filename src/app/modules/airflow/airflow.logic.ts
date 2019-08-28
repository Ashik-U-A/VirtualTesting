import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import { WebRendererComponent } from "src/app/shared/web-renderer/web-renderer.component";
import {
  PressureComponent,
  PressureComponentType
} from "src/app/shared/renderer/fluid-physics/PressureComponent";

export class AirflowRenderer {
  constructor(private renderer: WebRendererComponent) {
    this.initializeEnvironment();
  }

  initializeEnvironment() {
    let geometry = new BoxGeometry(1, 1, 1);
    let mat = new MeshBasicMaterial({ color: 0xffffaa });

    let cube = new Mesh(geometry, mat);
    this.renderer.sceneObject.add(cube);
    this.renderer.cameraObject.position.z = 5;

    let pressureSource1 = new PressureComponent(
      {
        type: PressureComponentType.AREA,
        pressure_value: 1,
        width: 1,
        height: 1
      },
      this.renderer
    );

    let pressureSource2 = new PressureComponent(
      {
        type: PressureComponentType.POINT,
        pressure_value: 1
      },
      this.renderer
    );

    this.renderer.sceneObject.add(pressureSource1.mesh);
    pressureSource1.mesh.position.set(-1, 0, 0);

    this.renderer.sceneObject.add(pressureSource2.mesh);
    pressureSource2.mesh.position.set(1, 0, 0);

    this.renderer.addAnimationFunction(() => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      pressureSource1.mesh.rotation.y += 0.01;
    });
  }
}
