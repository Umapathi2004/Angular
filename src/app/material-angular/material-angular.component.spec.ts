import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAngularComponent } from './material-angular.component';

describe('MaterialAngularComponent', () => {
  let component: MaterialAngularComponent;
  let fixture: ComponentFixture<MaterialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
