import {
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
  Scene,
  Euler,
  Vector3,
  Object3D
} from "three";
import { WebRendererComponent } from "../../web-renderer/web-renderer.component";

export class PressureComponent {
  private _mesh: Mesh;

  constructor(
    private webRenderer: WebRendererComponent,
    private p: {
      type: PressureComponentType;
      pressure_value: number;
      width?: number;
      height?: number;
      position?: Vector3;
      rotation?: Euler;
    }
  ) {
    this._mesh = this.makePressureObject();
    this.renderPressureObject();
  }

  get mesh() {
    return this._mesh;
  }

  private makePressureObject() {
    let pressureMat = new MeshBasicMaterial({ color: 0xaa99ff });
    if (this.p.type === PressureComponentType.POINT) {
      let sphereGeometry: SphereGeometry = new SphereGeometry(0.01);
      return new Mesh(sphereGeometry, pressureMat);
    } else if (this.p.type === PressureComponentType.AREA) {
      let planeGeometry = new PlaneGeometry(this.p.width, this.p.height);
      return new Mesh(planeGeometry, pressureMat);
    }
  }

  private renderPressureObject(): void {
    if (this.p.position) {
      this._mesh.position.set(
        this.p.position.x,
        this.p.position.y,
        this.p.position.z
      );
    }
    if (this.p.rotation) {
      this._mesh.rotation.setFromVector3(this.p.rotation.toVector3());
    }
    this.webRenderer.sceneObject.add(this._mesh);
  }
}

export enum PressureComponentType {
  POINT,
  AREA
}
