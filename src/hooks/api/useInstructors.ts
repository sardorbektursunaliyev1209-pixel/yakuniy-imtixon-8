import { useQuery } from "@tanstack/react-query";
import api from "../../config/axios";
import Endpoints from "../../config/endpoints";

export const useInstructors = () => {
  return useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await api.get(Endpoints.public.instructors);
      console.log("INSTRUCTORS:", res.data);
      return res.data.data.items;
    },
  });
};
