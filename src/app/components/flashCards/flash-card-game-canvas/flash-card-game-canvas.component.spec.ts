import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardGameCanvasComponent } from './flash-card-game-canvas.component';

describe('FlashCardGameCanvasComponent', () => {
  let component: FlashCardGameCanvasComponent;
  let fixture: ComponentFixture<FlashCardGameCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashCardGameCanvasComponent]
    });
    fixture = TestBed.createComponent(FlashCardGameCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
