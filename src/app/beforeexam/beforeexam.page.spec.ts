import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeforeexamPage } from './beforeexam.page';

describe('BeforeexamPage', () => {
  let component: BeforeexamPage;
  let fixture: ComponentFixture<BeforeexamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeexamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
