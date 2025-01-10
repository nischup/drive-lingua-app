import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter3Page } from './chapter3.page';

describe('Chapter3Page', () => {
  let component: Chapter3Page;
  let fixture: ComponentFixture<Chapter3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
