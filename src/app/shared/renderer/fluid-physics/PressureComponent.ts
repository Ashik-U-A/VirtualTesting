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
    private p: {
      type: PressureComponentType;
      pressure_value: number;
      width?: number;
      height?: number;
    },
    private renderer: WebRendererComponent
  ) {
    this._mesh = this.makePressureObject();
    this.emitParticles();
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

  private emitParticles() {
    let particles = 0;
    let c = setInterval(() => {
      let dir;
      dir = this._mesh.rotation.toVector3(dir);
      new Airparticle(
        this._mesh,
        this.renderer,
        0.01,
        this._mesh.position,
        dir
      );
      particles++;
      if (particles > 10) {
        clearInterval(c);
      }
    }, 1000);
  }
}

class Airparticle {
  constructor(
    r: Object3D,
    s: WebRendererComponent,
    velocity: number,
    position: Vector3,
    direction: Vector3
  ) {
    console.log(direction);
    let p = new Mesh(
      new SphereGeometry(0.01),
      new MeshBasicMaterial({ color: 0xffffff })
    );
    s.sceneObject.add(p);
    p.position.setX(position.x);
    p.position.setY(position.y);

    p.rotation.setFromVector3(direction);

    s.addAnimationFunction(() => {
      p.position.x += velocity;
    });

    setTimeout(() => {
      s.sceneObject.remove(p);
    }, 5000);
  }
}

export enum PressureComponentType {
  POINT,
  AREA
}
