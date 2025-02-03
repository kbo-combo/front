import {useMutation} from "@tanstack/react-query";
import {deleteCombo} from "@apis/combo.ts";


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
