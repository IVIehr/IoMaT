import { useQuery } from "react-query";
import axios from "axios";

export default function useGetMe() {
  const key = "get-me";
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");

  return useQuery(
    key,
    async ({ signal }) => {
      const response = await axios({
        url: "http://77.237.82.37:4041/user/getMe",
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
