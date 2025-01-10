import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter2Page } from './chapter2.page';

describe('Chapter2Page', () => {
  let component: Chapter2Page;
  let fixture: ComponentFixture<Chapter2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
