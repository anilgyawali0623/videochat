import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";
const useSignUp = function () {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });
  return { isPending, error, signupMutaion: mutate };
};

export default useSignUp;
