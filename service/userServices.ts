import { USER_API } from "../const/api";
import { setUserDetail } from "../redux/context/userSlice";
import { axiosGet, useGet } from "../utils/fetch";

export const useGetUserById = (id: number) => useGet({ 
  url: `${USER_API}/${id}`, 
  itemList: 'user', 
  store: 'userReducer', 
  setItem: setUserDetail 
})

export const getUsersByPage = (page: number) => axiosGet({ 
  url: `${USER_API}?page=${page}` 
})