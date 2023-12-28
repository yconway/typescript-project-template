import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core'
import { FlashCardTile } from 'src/app/interfaces/flashCards/flash-card-tile'

@Component({
	selector: 'app-flash-card-tile',
	templateUrl: './flash-card-tile.component.html',
	styleUrls: ['./flash-card-tile.component.scss'],
})
export class FlashCardTileComponent {
	@Input() flashCardInfo?: FlashCardTile
	@Input() display: 'front' | 'back' = 'front'
	@Output() answerRevealedEvent = new EventEmitter<boolean>()

	answerRevealed = false

	ngOnChanges(changes: SimpleChanges) {
		if (changes['flashCardInfo']) {
			this.display = 'front'
			this.answerRevealed = false
		}
	}

	flipCard() {
		this.display = this.display === 'front' ? 'back' : 'front'
		this.answerRevealed = true
		this.answerRevealedEvent.emit(this.answerRevealed)
	}
}
