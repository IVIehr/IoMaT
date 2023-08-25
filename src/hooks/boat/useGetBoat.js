import { useQuery } from "react-query";
import axios from "axios";

export default function useGetBoat({ vesselId }) {
  const key = `vessel-${vesselId}`;
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN"); // Not be needed

  return useQuery(
    key,
    async ({ signal }) => {
      const response = await axios({
        url: "http://77.237.82.37:4041/vessel/get",
        params: { vesselId },
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
