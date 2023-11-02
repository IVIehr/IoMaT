import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";

export default function useLogin() {
  return useMutation(
    async (values) => {
      const { data } = values;
      const response = await axios({
        url: "http://77.237.82.37:4041/auth/login",
        method: "post",
        data,
      });
      return response.data;
    },
    {
      onSuccess: (response, values) => {
        const { successCallBack } = values;
        if (response.success) {
          window.localStorage.setItem("AIS:ACCESS_TOKEN", response.data.token);
          successCallBack();
          toast.success(response.message);
        } else {
          toast.error(response.error);
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
}
