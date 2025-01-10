import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SentencePage } from './sentence.page';

describe('SentencePage', () => {
  let component: SentencePage;
  let fixture: ComponentFixture<SentencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
