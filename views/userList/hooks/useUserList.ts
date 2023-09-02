import { useEffect, useState } from 'react';
import { getUsersByPage } from '../../../service/userServices';
import { useAppDispatch } from '../../../redux/hooks';
import { setUser } from '../../../redux/context/userSlice';

export default function useUserList() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  
  const getUsersByPageFunc = async (refreshing = false) => {
    try {
      if (!refreshing) {
        setLoading(true);
      }
      const { data } = await getUsersByPage(page);
      const newUsers = refreshing ? data.data : [...users, ...data.data];
      dispatch(setUser(newUsers));
      setUsers(newUsers);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsersByPageFunc();
  }, []);

  return {
    users,
    loading,
    loadMoreData: getUsersByPageFunc,
  };
}
