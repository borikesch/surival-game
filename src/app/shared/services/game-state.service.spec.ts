import { GameState } from '../models/game-state.model';
import { GameStateService } from './game-state.service';

describe('GameStateService', () => {
  let gameStateService;

  const compareEventState = (gameState: GameState, gameStateCompare: GameState) => {
    expect(gameState.eventState.eventCompleted).toBe(gameStateCompare.eventState.eventCompleted);
    expect(gameState.eventState.eventStarted).toBe(gameStateCompare.eventState.eventStarted);
    expect(gameState.eventState.firstEvent).toBe(gameStateCompare.eventState.firstEvent);
    expect(gameState.eventState.firstEventType).toBe(gameStateCompare.eventState.firstEventType);
    expect(gameState.eventState.isFromDayToNight).toBe(gameStateCompare.eventState.isFromDayToNight);
    expect(gameState.eventState.isFromNightToDay).toBe(gameStateCompare.eventState.isFromNightToDay);
    expect(gameState.eventState.secondEvent).toBe(gameStateCompare.eventState.secondEvent);
    expect(gameState.eventState.secondEventType).toBe(gameStateCompare.eventState.secondEventType);
    expect(gameState.eventState.thirdEvent).toBe(gameStateCompare.eventState.thirdEvent);
  };

  const compareResources = (gameState: GameState, gameStateCompare: GameState) => {
    expect(gameState.resources.fire).toBe(gameStateCompare.resources.fire);
    expect(gameState.resources.food).toBe(gameStateCompare.resources.food);
    expect(gameState.resources.health).toBe(gameStateCompare.resources.health);
    expect(gameState.resources.wood).toBe(gameStateCompare.resources.wood);
  };

  beforeEach(() => {
    localStorage.removeItem('gameState');
    gameStateService = new GameStateService();
  });

  describe('getGameState', () => {
    it('should initially return a clean gameState object', () => {
      const gameStateDummy = new GameState();

      const gameState: GameState = gameStateService.getGameState();

      expect(gameState.day).toBe(gameStateDummy.day);
      compareEventState(gameState, gameStateDummy);
      compareResources(gameState, gameStateDummy);
    });

    it('should return the current gameState when day update', () => {
      const gameStateDummy = new GameState();
      gameStateDummy.day = 21;
      gameStateService.updateGameState(gameStateDummy);

      const gameState: GameState = gameStateService.getGameState();

      expect(gameState.day).toBe(gameStateDummy.day);
      compareEventState(gameState, gameStateDummy);
      compareResources(gameState, gameStateDummy);
    });

    it('should return the current gameState when resources update', () => {
      const gameStateDummy = new GameState();
      gameStateDummy.resources.fire = 12;
      gameStateDummy.resources.food = 245;
      gameStateDummy.resources.health = 37;
      gameStateDummy.resources.wood = 73;
      gameStateService.updateGameState(gameStateDummy);

      const gameState: GameState = gameStateService.getGameState();

      expect(gameState.day).toBe(gameStateDummy.day);
      compareEventState(gameState, gameStateDummy);
      compareResources(gameState, gameStateDummy);
    });

    it('should return the current gameState when eventState update', () => {
      const gameStateDummy = new GameState();
      gameStateDummy.eventState.isFromDayToNight = true;
      gameStateDummy.eventState.isFromNightToDay = false;
      gameStateDummy.eventState.eventCompleted = true;
      gameStateDummy.eventState.eventStarted = true;
      gameStateService.updateGameState(gameStateDummy);

      const gameState: GameState = gameStateService.getGameState();

      expect(gameState.day).toBe(gameStateDummy.day);
      compareEventState(gameState, gameStateDummy);
      compareResources(gameState, gameStateDummy);
    });
  });

  describe('UpdateGameState', () => {
    it('should update the gameState', () => {
      gameStateService.updateGameState({});
      const gameStateDummy = new GameState();

      gameStateService.updateGameState(gameStateDummy);
      const gameState: GameState = gameStateService.getGameState();

      expect(gameState.day).toBe(gameStateDummy.day);
      compareEventState(gameState, gameStateDummy);
      compareResources(gameState, gameStateDummy);
    });
  })

  describe('ResetGameState', () => {
    it('should reset the gameState', () => {
      gameStateService.updateGameState({});
      const gameStateDummy = new GameState();

      gameStateService.resetGameState();
      const gameState: GameState = gameStateService.getGameState();

      expect(gameState.day).toBe(gameStateDummy.day);
      compareEventState(gameState, gameStateDummy);
      compareResources(gameState, gameStateDummy);
    });
  });
});


