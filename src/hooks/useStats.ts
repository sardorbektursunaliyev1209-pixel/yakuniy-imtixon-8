import { useQuery } from "@tanstack/react-query";
import api from "../config/axios";
import Endpoints from "../config/endpoints";

export const useStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await api.get(Endpoints.public.stats);
      console.log("STATS:", res.data);
      return res.data.data ?? res.data;
    },
  });
};
