import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteCombo, findComboByGame} from "@apis/combo.ts";
import {useGameDate} from "@components/game/GameDateContext.tsx";


export const useDeleteCombo = () => {
  const mutation = useMutation({
    mutationFn: ({comboId}: { comboId: number }) =>
        deleteCombo(comboId),
    onSuccess: () => {
    },
    onError: () => {
    },
  });

  return mutation
};


export const useComboByGame = () => {
  const { selectedDate } = useGameDate();
  const formattedDate = selectedDate.toISOString().split("T")[0];

  const { data, error, isLoading } = useQuery({
    queryKey: ["combo", formattedDate],
    queryFn: () => findComboByGame(formattedDate),
    staleTime: 600000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
};
