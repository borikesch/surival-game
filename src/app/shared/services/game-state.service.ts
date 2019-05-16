import { Injectable } from '@angular/core';
import { GameState } from '../models/game-state.model';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  getGameState(): GameState {
    if (localStorage.getItem('gameState') === null) {
      localStorage.setItem('gameState', JSON.stringify(new GameState()));
    }
    return JSON.parse(localStorage.getItem('gameState'));
  }

  updateGameState(gameState: GameState): void {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }

  resetGameState(): void {
    localStorage.setItem('gameState', JSON.stringify(new GameState()));
  }
}
