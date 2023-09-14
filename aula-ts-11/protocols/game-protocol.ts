export type Game = {
  id: number;
  title: string;
  platform: string;
};

export type CreateGameData = Omit<Game, "id">;
