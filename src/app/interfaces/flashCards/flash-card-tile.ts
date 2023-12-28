export interface FlashCardFace {
	text: string
}

export interface FlashCardTile {
	front: FlashCardFace
	back: FlashCardFace
}
