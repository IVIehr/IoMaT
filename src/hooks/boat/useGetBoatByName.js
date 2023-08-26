import { useQuery } from "react-query";
import axios from "axios";

export default function useGetBoatByName({ vesselName }) {
  const key = ["boats-result", JSON.stringify({ vesselName })];

  return useQuery(
    key,
    async ({ signal }) => {
      const response = await axios({
        url: "http://77.237.82.37:4041/public/vessel/name",
        params: { vesselName },
        method: "get",
        signal,
      });
      return response.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: !!vesselName,
    }
  );
}
