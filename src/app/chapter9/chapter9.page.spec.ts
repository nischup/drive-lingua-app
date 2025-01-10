import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter9Page } from './chapter9.page';

describe('Chapter9Page', () => {
  let component: Chapter9Page;
  let fixture: ComponentFixture<Chapter9Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
