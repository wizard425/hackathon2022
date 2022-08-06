import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadEditorComponent } from './payload-editor.component';

describe('PayloadEditorComponent', () => {
  let component: PayloadEditorComponent;
  let fixture: ComponentFixture<PayloadEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayloadEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
