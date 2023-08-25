import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";

export default function useAddBoat() {
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");
  const queryClient = useQueryClient();

  return useMutation(
    async (values) => {
      const { data } = values;
      const boatData = { ...data, inTransit: false };

      const response = await axios({
        url: "http://77.237.82.37:4041/vessel/add",
        method: "post",
        data: boatData,
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
          queryClient.invalidateQueries("all-boats");
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
