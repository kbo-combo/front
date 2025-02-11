import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {ComboCreateRequest, createCombo, deleteComboById, findComboByGameDate} from "@apis/combo.ts";
import {useGameDate} from "@components/game/GameDateContext.tsx";
import {toast} from "react-toastify";


export const useCreateCombo = () => {
  return useMutation({
    mutationFn: (request: ComboCreateRequest) => createCombo(request),
    onSuccess: () => {
      toast.success("콤보가 생성되었습니다.")
    },
    onError: () => {
      toast.error("콤보 생성 실패.")
    },
  });
}

export const useDeleteCombo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comboId }: { comboId: number; comboDate: string }) =>
        deleteComboById(comboId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["combo", variables.comboDate] });
      toast.success("콤보 삭제 완료!")
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
    queryFn: () => findComboByGameDate(comboDate),
    staleTime: 600000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading, comboDate };
};
