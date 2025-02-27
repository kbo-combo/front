import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  ComboCreateRequest,
  createCombo,
  deleteComboById,
  findComboByGameDate
} from "@apis/combo.ts";
import {toast} from "react-toastify";
import {useGameDate} from "@/hooks/game/useGame.ts";


export const useCreateCombo = () => {
  const { formattedDate : comboDate } = useGameDate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: ComboCreateRequest) => createCombo(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["combo", comboDate] });
      toast.success("콤보가 생성되었습니다.")
    },
    onError: (error: Error) => {
      toast.error(error.message)
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
