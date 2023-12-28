import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { FlashCardGameCanvasComponent } from './components/flashCards/flash-card-game-canvas/flash-card-game-canvas.component'
import { FlashCardTileComponent } from './components/flashCards/flash-card-tile/flash-card-tile.component'

@NgModule({
	declarations: [AppComponent, HeroesComponent, FlashCardGameCanvasComponent, FlashCardTileComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
