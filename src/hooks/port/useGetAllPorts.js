import { useQuery } from "react-query";
import axios from "axios";

export default function useGetAllPorts() {
  const key = "all-ports";

  return useQuery(
    key,
    async ({ signal }) => {
      const response = await axios({
        url: "http://77.237.82.37:4041/port/get",
        method: "get",
        signal,
      });
      return response.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
}
