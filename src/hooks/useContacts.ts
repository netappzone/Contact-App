import {AxiosError} from 'axios';
import {useQuery} from 'react-query';
import apiSettings, {PageLimit} from '../api/Api';
// import apiSettings, {PageLimit} from '../api/Api';
import {Contact} from '../model/model';

export const useContacts = ({limit}: PageLimit) => {
  return useQuery<Contact[], AxiosError>(
    ['contacts', limit],
    () => apiSettings.fetchContacts({limit}),
    {
      keepPreviousData: true,
    },
  );
};
