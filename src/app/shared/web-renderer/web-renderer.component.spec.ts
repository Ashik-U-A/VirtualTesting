import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRendererComponent } from './web-renderer.component';

describe('WebRendererComponent', () => {
  let component: WebRendererComponent;
  let fixture: ComponentFixture<WebRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
