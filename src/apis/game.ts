import {TeamName} from "@constant/player.ts";


export const findGameByDate = async (gameDate: string): Promise<GameResponse[]> => {
  if (gameDate === null) {
    console.log("hello world")
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          homeTeam: "NC",
          awayTeam: "KIA",
          homePitcherName: "구창모",
          awayPitcherName: "네일",
          gameSchedule: "18:30",
          stadiumName: "창원 NC 파크",
        },
        {
          homeTeam: "DOOSAN",
          awayTeam: "LG",
          homePitcherName: "곽빈",
          awayPitcherName: "임찬규",
          gameSchedule: "18:30",
          stadiumName: "잠실 종합운동장",
        },
        {
          homeTeam: "SSG",
          awayTeam: "SAMSUNG",
          homePitcherName: "김광현",
          awayPitcherName: "원태인",
          gameSchedule: "18:30",
          stadiumName: "랜더스필드",
        },
        {
          homeTeam: "LOTTE",
          awayTeam: "KIWOOM",
          homePitcherName: "박세웅",
          awayPitcherName: "안우진",
          gameSchedule: "18:30",
          stadiumName: "사직야구장",
        },
        {
          homeTeam: "HANWHA",
          awayTeam: "KT",
          homePitcherName: "류현진",
          awayPitcherName: "쿠에바스",
          gameSchedule: "18:30",
          stadiumName: "한화생명 이글스 파크",
        },
      ]);
    }, 500);
  });
};


export interface GameResponse {
  homeTeam: TeamName,
  awayTeam: TeamName,
  homePitcherName: string | null,
  awayPitcherName: string | null,
  gameSchedule: string,
  stadiumName: string,
}
