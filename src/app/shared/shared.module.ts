import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WebRendererComponent } from "./web-renderer/web-renderer.component";
import { FluidPhysicsModule } from "./renderer/fluid-physics/fluid-physics.module";

@NgModule({
  declarations: [WebRendererComponent],
  imports: [CommonModule],
  exports: [WebRendererComponent, FluidPhysicsModule]
})
export class SharedModule {}
