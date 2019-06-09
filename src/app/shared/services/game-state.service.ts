import { Injectable } from '@angular/core';
import { GameState } from '../models/game-state.model';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  public getGameState(): GameState {
    if (localStorage.getItem('gameState') === null) {
      localStorage.setItem('gameState', JSON.stringify(new GameState()));
    }
    return JSON.parse(localStorage.getItem('gameState')) as GameState;
  }

  public updateGameState(gameState: GameState): void {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }

  public resetGameState(): void {
    localStorage.setItem('gameState', JSON.stringify(new GameState()));
  }
}
