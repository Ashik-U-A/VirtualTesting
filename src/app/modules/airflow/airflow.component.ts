import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { WebRendererComponent } from "src/app/shared/web-renderer/web-renderer.component";
import { AirflowRenderer } from "./airflow.logic";

@Component({
  selector: "app-airflow",
  templateUrl: "./airflow.component.html",
  styleUrls: ["./airflow.component.css"]
})
export class AirflowComponent implements OnInit, AfterViewInit {
  @ViewChild(WebRendererComponent, { static: false }) webRendererComponent;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    new AirflowRenderer(this.webRendererComponent);
  }
}
