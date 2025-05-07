/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "@/lib/axiosClient";
import { useMutation } from "@tanstack/react-query";
import Cookie from "js-cookie";

const useAuthModule = () => {
  const Login = async (payload: any) => {
    return await axiosClient.post("/auth/login", payload).then((r) => r.data);
  };

  const Register = async (payload: any) => {
    return await axiosClient
      .post("/auth/register", payload)
      .then((r) => r.data);
  };

  const useLogin = () => {
    const mutate = useMutation({
      mutationFn: (payload: any) => Login(payload),
      onSuccess: (res) => {
        console.log(res.data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
    return mutate;
  };

  const useRegister = () => {
    const mutate = useMutation({
      mutationFn: (payload: any) => Register(payload),
      onSuccess: (res) => {
        console.log(res.data);
      },
    });

    return mutate;
  };

  const useLogout = () => {
    const token = Cookie.get("token_app");
    if (token) {
      Cookie.remove("token_app");
    } else {
        alert("token not found")
    }
  };
  return { useLogin, useRegister, useLogout };
};

export default useAuthModule;
