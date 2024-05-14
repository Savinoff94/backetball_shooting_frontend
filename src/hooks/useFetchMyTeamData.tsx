import { useContext, useEffect } from 'react';
import { Context } from '../index';

type FunctionOrNull = (() => void) | null;

const useFetchMyTeamData = (callback: FunctionOrNull = null) => {

  const { myTeamStoreInstance } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {

      await myTeamStoreInstance.fetchMyTeamUsers();

      if(callback) {

        callback();
      }
    };

    fetchData();
  }, [myTeamStoreInstance]);

};

export default useFetchMyTeamData;