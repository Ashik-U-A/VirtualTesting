import { WebRendererComponent } from "src/app/shared/web-renderer/web-renderer.component";
import {
  PressureComponent,
  PressureComponentType
} from "src/app/shared/renderer/fluid-physics/PressureComponent";
import { Vector3 } from "three";
import { StreamlineComponent } from "src/app/shared/renderer/fluid-physics/StreamlineComponent";

export class AirflowRenderer {
  constructor(private renderer: WebRendererComponent) {
    this.initializeEnvironment();
  }

  initializeEnvironment() {
    this.renderer.cameraObject.position.z = 5;

    let pressureSource1 = new PressureComponent(this.renderer, {
      type: PressureComponentType.POINT,
      pressure_value: 10,
      position: new Vector3(-1, 0, 0)
    });

    let pressureSource2 = new PressureComponent(this.renderer, {
      type: PressureComponentType.POINT,
      pressure_value: -10,
      position: new Vector3(2, 0, 0)
    });

    this.renderer.sceneObject.add(pressureSource1.mesh);
    this.renderer.sceneObject.add(pressureSource2.mesh);

    let streamline = new StreamlineComponent([
      pressureSource1,
      pressureSource2
    ]);

    this.renderer.addAnimationFunction(() => {});
  }
}
