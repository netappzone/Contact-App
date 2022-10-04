import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export type PageLimit = {
  limit: number;
};
const apiSettings = {
  fetchContacts: async ({limit}: PageLimit) => {
    const {data} = await api.get(`?results=${limit}&seed=rdmus`);
    return data.results;
  },
};
export default apiSettings;
