import { useQuery } from "react-query";
import axios from "axios";

export default function useGetPortByName({ portName }) {
  const key = ["ports-result", JSON.stringify({ portName })];

  return useQuery(
    key,
    async ({ signal }) => {
      const response = await axios({
        url: "http://77.237.82.37:4041/port/get/name",
        params: { portName },
        method: "get",
        signal,
      });
      return response.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: !!portName,
    }
  );
}
