import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  ComboCreateRequest,
  ComboListResponse,
  createCombo,
  deleteComboById,
  findComboByGameDate,
  findComboListByParam
} from "@apis/combo.ts";
import {toast} from "react-toastify";
import {useGameDate} from "@/hooks/game/useGame.ts";
import {useHandleError} from "@/hooks/@common/useHandleError.ts";
import {useAtom} from "jotai";
import {comboHitterAtom} from "@/contexts/combo/ComboHitterAtom.ts";

export const useCreateCombo = () => {
  const { formattedDate : comboDate } = useGameDate();
  const handleError = useHandleError();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: ComboCreateRequest) => createCombo(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["combo", comboDate] });

    },
    onError: handleError,
  });
}

export const useDeleteCombo = () => {
  const handleError = useHandleError();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comboId }: { comboId: number; comboDate: string }) =>
        deleteComboById(comboId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["combo", variables.comboDate] });
      toast.success("콤보 삭제 완료!")
    },
    onError: handleError,
  });
};

export const useComboByGame = () => {
  const { formattedDate : comboDate } = useGameDate();
  const { data, error, isLoading } = useQuery({
    queryKey: ["combo", comboDate],
    queryFn: () => findComboByGameDate(comboDate),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading, comboDate };
};

import {TeamName} from "@constant/player.ts";
import {GameType} from "@/types/game/game.ts";


export const useInfiniteComboList = (pageSize: number, gameType: GameType, beforeGameDate?: string) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["combo-list", gameType, beforeGameDate],
    queryFn: ({ pageParam = beforeGameDate}) => findComboListByParam(pageSize, gameType, pageParam),
    initialPageParam: beforeGameDate,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.hasNext || lastPage.content.length === 0) return null;
      return lastPage.content[lastPage.content.length - 1].gameStartDate;
    },
    staleTime: 0,
    select: ({ pages }) =>
        (pages ?? [])
        .filter(page => page !== null && page !== undefined)
        .reduce((acc, page) => acc.concat(page.content ?? []), [] as ComboListResponse[]),
  });

  return {
    data: data ?? [],
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};


export const useHitterComboState = () => {
  const [hitterComboState, setHitterComboState] = useAtom(comboHitterAtom);

  const updateHitterCombo = (gameId: number, homeTeam: TeamName, awayTeam: TeamName) => {
    setHitterComboState({gameId, homeTeam, awayTeam,});};

  return {hitterComboState, updateHitterCombo,};
};
