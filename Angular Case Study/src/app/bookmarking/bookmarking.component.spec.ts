import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkingComponent } from './bookmarking.component';

describe('BookmarkingComponent', () => {
  let component: BookmarkingComponent;
  let fixture: ComponentFixture<BookmarkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
