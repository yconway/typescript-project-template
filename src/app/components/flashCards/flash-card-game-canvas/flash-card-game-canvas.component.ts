import { Component } from '@angular/core'
import {
	allSingleCharacterHiragana,
	allSingleCharacterKatakana,
	singleCharacterKatakanaMaru,
} from 'src/app/components/flashCards/lib/flashCardSets/hiragana'
import { FlashCardTile } from 'src/app/interfaces/flashCards/flash-card-tile'

@Component({
	selector: 'app-flash-card-game-canvas',
	templateUrl: './flash-card-game-canvas.component.html',
	styleUrls: ['./flash-card-game-canvas.component.scss'],
})
export class FlashCardGameCanvasComponent {
	allTiles: FlashCardTile[] = shuffle(singleCharacterKatakanaMaru())
	correct: Array<number> = []
	incorrect: Array<number> = []
	currentTile?: FlashCardTile = undefined
	currentIndex: number = 0

	showNextButtons = false

	runFinished: boolean = false
	previousScore: number = 0

	hiraganaMode: boolean = false
	katakanaMode: boolean = false
	testMode: boolean = true

	endGame() {
		this.runFinished = true
		this.previousScore = this.correct.length
		this.currentTile = undefined
		this.showNextButtons = false
	}

	restartGame() {
		console.log({ hiraganaMode: this.hiraganaMode, katakana: this.katakanaMode, test: this.testMode })
		this.allTiles = []
		if (this.katakanaMode) {
			this.allTiles.push(...allSingleCharacterKatakana())
		}
		if (this.testMode) {
			this.allTiles.push(...singleCharacterKatakanaMaru())
		}
		if (this.hiraganaMode) {
			this.allTiles.push(...allSingleCharacterHiragana())
		}
		this.allTiles = shuffle(this.allTiles)
		this.currentIndex = 0
		this.currentTile = this.allTiles[this.currentIndex]
		this.correct = []
		this.incorrect = []
	}
	nextTile() {
		this.showNextButtons = false
		this.currentIndex++
		if (this.allTiles.length === this.currentIndex) {
			this.endGame()
		} else {
			this.currentTile = this.allTiles[this.currentIndex]
		}
	}
	gotItRightClick() {
		this.correct.push(this.currentIndex)
		this.nextTile()
	}
	gotItWrongClick() {
		this.incorrect.push(this.currentIndex)
		this.nextTile()
	}

	answerRevealed(event: boolean) {
		console.log('answer revealed', event)
		this.showNextButtons = event
	}
}

function shuffle<T>(array: T[]): Array<T> {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}
