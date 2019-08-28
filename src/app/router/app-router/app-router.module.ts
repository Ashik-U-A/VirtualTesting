import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { AirflowComponent } from "src/app/modules/airflow/airflow.component";
import { ModulesComponent } from "src/app/modules/modules.component";
import { SharedModule } from "src/app/shared/shared.module";

export const applicationRoutes: Route[] = [
  {
    path: "modules/airflow",
    component: AirflowComponent
  },
  {
    path: "modules",
    component: ModulesComponent
  }
];

@NgModule({
  declarations: [AirflowComponent, ModulesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}
