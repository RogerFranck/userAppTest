import { useGetUserById } from "../../../service/userServices";

interface useUserDetailInterface {
  id: number;
}

export default function useUserDetail({ id }: useUserDetailInterface) {
  const { data, isLoading } = useGetUserById(id);

  return {
    data,
    isLoading,
  };
}
