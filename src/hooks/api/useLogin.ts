import { useMutation } from "@tanstack/react-query";
import api from "../../config/axios";
import Endpoints from "../../config/endpoints";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { identifier: string; password: string }) => {
      const res = await api.post(Endpoints.auth.login, data);
      return res;
    },
  });
};
