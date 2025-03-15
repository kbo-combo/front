import {TeamName} from "@constant/player.ts";
import {client} from "@apis/apiClient.ts";
import {GameState} from "@/types/game/game.ts";


export const findGameByDate = async (gameDate: string): Promise<GameResponse[]> => {
  const response = await client.get<GameResponse[]>(
      `/games/daily`,
      {
        params: { gameDate }
      }
  );
  return response.data;
};

export const findGameByYearAndMonth = async (year: number, month: number): Promise<GameDateResponse[]> => {
  const response = await client.get<GameDateResponse[]>(
      `/games`,
  {
    params: { year, month }
  });
  return response.data;
};


export interface GameResponse {
  id: number,
  homeTeam: TeamName,
  awayTeam: TeamName,
  startDate: string,
  startTime: string,
  gameState: GameState,
  homeStartingPitcher: StartingPitcherResponse | null,
  awayStartingPitcher: StartingPitcherResponse | null
}

export interface StartingPitcherResponse {
  pitcherId: number,
  name: string,
}

export interface GameDateResponse {
  gameDate: string,
}
