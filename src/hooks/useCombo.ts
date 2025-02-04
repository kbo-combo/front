import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteComboById, findComboByGame} from "@apis/combo.ts";
import {useGameDate} from "@components/game/GameDateContext.tsx";

export const useDeleteCombo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comboId }: { comboId: number; comboDate: string }) =>
        deleteComboById(comboId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["combo", variables.comboDate] });
    },
    onError: (error) => {
      console.error("삭제 실패:", error);
    },
  });
};

export const useComboByGame = () => {
  const { formattedDate : comboDate } = useGameDate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["combo", comboDate],
    queryFn: () => findComboByGame(comboDate),
    staleTime: 600000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading, comboDate };
};
