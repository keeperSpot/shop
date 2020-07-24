import { useSelector } from 'react-redux';

export const useUser = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return { user, isAuthenticated };
};
