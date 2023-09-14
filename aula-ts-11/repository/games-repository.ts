import { db } from "../database/database";
import { CreateGameData, Game } from "../protocols/game-protocol";

async function getGames() {
  const { rows: games } = await db.query<Game>("SELECT * FROM games;");

  return games;
}

async function createGame(game: CreateGameData) {
  await db.query("INSERT INTO games (title, platform) VALUES ($1, $2);", [
    game.title,
    game.platform,
  ]);
}

async function getGameByTitleAndPlatform({ title, platform }: Game) {
  const {
    rows: [game],
  } = await db.query<Game>(
    "SELECT * FROM games WHERE title=$1 AND platform=$2;",
    [title, platform]
  );

  return game;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
