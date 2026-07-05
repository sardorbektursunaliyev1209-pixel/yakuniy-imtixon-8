import { useQuery } from "@tanstack/react-query";
import api from "../../config/axios";
import Endpoints from "../../config/endpoints";

export const useCourses = (params?: {
  search?: string;
  category?: string;
  level?: string;
  sort?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ["courses", params],
    queryFn: async () => {
      const res = await api.get(Endpoints.public.courses, { params });
      console.log("COURSES:", res.data);
      return res.data.data.items ?? res.data.data ?? res.data;
    },
  });
};
