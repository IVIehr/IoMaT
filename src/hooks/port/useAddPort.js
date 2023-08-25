import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";

export default function useAddPort() {
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");
  const queryClient = useQueryClient();

  return useMutation(
    async (values) => {
      const { data } = values;
      const response = await axios({
        url: "http://77.237.82.37:4041/port/add",
        method: "post",
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    {
      onSuccess: (response, values) => {
        const { successCallBack } = values;
        if (response.success) {
          toast.success(response.message);
          queryClient.invalidateQueries("all-ports");
          successCallBack();
        } else {
          toast.error(response.message);
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
}
