import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter1Page } from './chapter1.page';

describe('Chapter1Page', () => {
  let component: Chapter1Page;
  let fixture: ComponentFixture<Chapter1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
