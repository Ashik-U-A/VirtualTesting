import { Component, OnInit, ElementRef, Input } from "@angular/core";
import * as THREE from "three";

@Component({
  selector: "app-web-renderer",
  templateUrl: "./web-renderer.component.html",
  styleUrls: ["./web-renderer.component.css"]
})
export class WebRendererComponent implements OnInit {
  @Input() width: string;
  @Input() diemension: string;

  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;

  private animations: Array<Function>;

  constructor(private ref: ElementRef) {
    this.animations = [];
  }

  get rendererObject() {
    return this.renderer;
  }

  get cameraObject() {
    return this.camera;
  }

  get sceneObject() {
    return this.scene;
  }

  addAnimationFunction(f: Function) {
    this.animations.push(f);
  }

  render(): void {
    let _self = this;
    this.animations.forEach(animation => {
      animation();
    });
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      _self.render();
    });
  }

  initializeRenderer(): void {
    let canvas = this.ref.nativeElement.querySelector("canvas#primary");
    if (this.width) {
      canvas.style.width = this.width;
      let ratio: Array<number> = this.diemension
        .split(":")
        .map(x => parseFloat(x));
      let e_width = canvas.getBoundingClientRect().width;

      canvas.style.height = (ratio[1] * e_width) / ratio[0] + "px";
      this.renderer.setSize(e_width, canvas.getBoundingClientRect().height);
      this.camera.aspect = ratio[0] / ratio[1];
      this.camera.updateProjectionMatrix();
    }
  }

  ngOnInit() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.ref.nativeElement.querySelector("canvas#primary")
    });
    this.camera = new THREE.PerspectiveCamera();
    this.scene = new THREE.Scene();

    this.initializeRenderer();
    this.render();
  }
}
