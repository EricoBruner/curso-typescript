type Game = {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string | Date;
};

const game2: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14", // pode ser um Date. também pode ser vazio
};

const games2: Game[] = [game2];

function play2(game: Game) {
  // runs the game
  console.log(game);
}

play2(games2[0]);
