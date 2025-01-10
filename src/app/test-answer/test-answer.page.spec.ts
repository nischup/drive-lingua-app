import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestAnswerPage } from './test-answer.page';

describe('TestAnswerPage', () => {
  let component: TestAnswerPage;
  let fixture: ComponentFixture<TestAnswerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
