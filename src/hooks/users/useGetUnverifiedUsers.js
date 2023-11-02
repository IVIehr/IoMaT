import { useQuery } from "react-query";
import axios from "axios";

export default function useGetUnverifiedUsers({ token }) {
  const key = "unverified-users";

  return useQuery(
    key,
    async ({ signal }) => {
      const response = await axios({
        url: "http://77.237.82.37:4041/admin/users/unverified?offset=0&size=10",
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
