import { useQuery } from "@tanstack/react-query";
import api from "../../config/axios";
import Endpoints from "../../config/endpoints";

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await api.get(Endpoints.public.testimonials);
      console.log("TESTIMONIALS:", res.data);
      return res.data.data?.items ?? res.data.data ?? res.data;
    },
  });
};
