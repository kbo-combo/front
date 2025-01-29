import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  changeNickname,
  getMemberDetail,
  MemberDetailResponse,
  NicknameChangeRequest
} from "@apis/member.ts";

export const useMemberDetail = () => {
  const {data, error, isLoading} = useQuery<MemberDetailResponse, Error>({
    queryKey: ['member'],
    queryFn: () => getMemberDetail(),
    staleTime: 6000,
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
    },
    onError: () => {
    },
  });

  return mutation
};
