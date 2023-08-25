import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";

export default function useSignUp() {
  return useMutation(
    async (values) => {
      const { data } = values;
      const userData = { ...data, legal: false };
      
      const response = await axios({
        url: "http://77.237.82.37:4041/auth/register",
        method: "post",
        data: userData,
      });
      return response.data;
    },
    {
      onSuccess: (response, values) => {
        const { successCallBack } = values;
        if (response.success) {
          toast.success(response.message);
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
