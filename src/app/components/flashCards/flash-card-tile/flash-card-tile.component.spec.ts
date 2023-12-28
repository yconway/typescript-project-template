import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardTileComponent } from './flash-card-tile.component';

describe('FlashCardTileComponent', () => {
  let component: FlashCardTileComponent;
  let fixture: ComponentFixture<FlashCardTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashCardTileComponent]
    });
    fixture = TestBed.createComponent(FlashCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
