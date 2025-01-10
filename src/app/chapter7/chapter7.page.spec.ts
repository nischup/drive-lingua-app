import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter7Page } from './chapter7.page';

describe('Chapter7Page', () => {
  let component: Chapter7Page;
  let fixture: ComponentFixture<Chapter7Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
