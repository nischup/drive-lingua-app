import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter8Page } from './chapter8.page';

describe('Chapter8Page', () => {
  let component: Chapter8Page;
  let fixture: ComponentFixture<Chapter8Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
