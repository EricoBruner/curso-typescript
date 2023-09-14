import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

async function getGames() {
  const games = await gamesRepository.getGames();
  return games;
}

async function createGame(game: Game) {
  try {
    if (await gameAlreadyExists(game)) {
      throw { message: "Game already exists" };
    }

    await gamesRepository.createGame(game);
  } catch (error) {
    console.log(error);
    throw { message: "Server error" };
  }
}

async function gameAlreadyExists(game: Game) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
