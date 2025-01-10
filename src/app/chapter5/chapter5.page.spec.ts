import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter5Page } from './chapter5.page';

describe('Chapter5Page', () => {
  let component: Chapter5Page;
  let fixture: ComponentFixture<Chapter5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
