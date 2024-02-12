import { useState, useEffect } from 'react';
import { getJSONData } from '../../tools/Toolkit'; 
import { UserAccount } from '../../tools/data.model'; 

const useAuthStatus = (): UserAccount & { isLoading: boolean } => {
  const [userAccount, setUserAccount] = useState<UserAccount & { isLoading: boolean }>({
    _id: '',
    firstName: '',
    lastName: '',
    createdAt: undefined,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const fetchAuthStatus = async () => {
      // Use getJSONData from your tools to fetch the authentication status
      const data = await getJSONData('/api/auth/status');// NEED PATH
      if (data) {
        setUserAccount({
          ...data,
          isLoading: false,
        });
      } else {
        setUserAccount((prevState: any) => ({ ...prevState, isLoading: false }));
      }
    };

    fetchAuthStatus();
  }, []);

  return userAccount;
};

export default useAuthStatus;
