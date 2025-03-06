import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  changeNickname,
  getMemberDetail,
  MemberDetailResponse,
  NicknameChangeRequest
} from "@apis/member.ts";
import {toast} from "react-toastify";

export const useMemberDetail = () => {
  const {data, error, isLoading} = useQuery<MemberDetailResponse, Error>({
    queryKey: ['member'],
    queryFn: () => getMemberDetail(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {data, error, isLoading};
};

export const useChangeNickname = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({request}: { request: NicknameChangeRequest }) =>
        changeNickname(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['member'] });
      toast.success("닉네임 변경 완료")
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  });

  return mutation
};
