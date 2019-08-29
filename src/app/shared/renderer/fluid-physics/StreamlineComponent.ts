import { Object3D } from "three";
import { PressureComponent } from "./PressureComponent";

export class StreamlineComponent {
  private _objects: Object3D[];
  constructor(
    private _pressureSources: PressureComponent[],
    _objects?: Object3D[]
  ) {
    if (_objects) {
      this._objects = _objects;
    }
    this.drawLines();
  }

  drawLines(): void {
    console.log(this._pressureSources);
    console.log(this._objects);
  }

  private sortPressurePoints() {
    let sortedPressure;
  }
}
