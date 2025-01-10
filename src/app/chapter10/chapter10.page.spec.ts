import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter10Page } from './chapter10.page';

describe('Chapter10Page', () => {
  let component: Chapter10Page;
  let fixture: ComponentFixture<Chapter10Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
