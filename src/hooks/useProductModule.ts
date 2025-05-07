/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQuery } from "@tanstack/react-query";

const useProductModule = () => {
  const getAll = async () => {
    return await axiosClient.get("/products").then((r) => r.data);
  };

  const getDetail = async (id: number | string) => {
    return axiosClient.get(`/products/${id}`).then((r) => r.data);
  };

  const createProduct = async (payload: any) => {
    return await axiosClient
      .post("/products/create", payload)
      .then((r) => r.data);
  };

  const updateProduct = async (id: number | string, payload: any) => {
    return await axiosClient
      .put(`/products/update/${id}`, payload)
      .then((r) => r.data);
  };

  const deleteProduct = async (id: number | string) => {
    return await axiosClient
      .delete(`products/delete/${id}`)
      .then((r) => r.data);
  };
  const useGetAllProducts = () => {
    const { data, isLoading } = useQuery({
      queryFn: getAll,
      select: (data) => data,
      queryKey: ["/products"],
    });

    return { data, isLoading };
  };

  const useDetailProduct = (id: number) => {
    const { data, isLoading } = useQuery({
      queryFn: () => getDetail(id),
      select: (data) => data,
      queryKey: ["/products/detail"],
    });

    return { data, isLoading };
  };

  const useCreateProduct = () => {
    const mutate = useMutation({
      mutationFn: (payload: any) => createProduct(payload),
      onSuccess: (res) => {
        console.log(res.data);
      },
      onError: (err) => {
        console.log(err);
      },
    });

    return mutate;
  };

  const useUpdateProduct = (id: number | string) => {
    const mutate = useMutation({
      mutationFn: (payload: any) => updateProduct(id, payload),
      onSuccess: (res) => {
        console.log(res.data);
      },

      onError: (err) => {
        console.log(err);
      },
    });

    return mutate;
  };

  const useDeleteProduct = (id: number | string) => {
    const mutate = useMutation({
      mutationFn: () => deleteProduct(id),
      onSuccess: (res) => {
        console.log(res.data);
      },
      onError: (err) => {
        console.log(err);
      },
    });

    return mutate;
  };

  return {
    useGetAllProducts,
    useDetailProduct,
    useCreateProduct,
    useUpdateProduct,
    useDeleteProduct,
  };
};

export default useProductModule;
