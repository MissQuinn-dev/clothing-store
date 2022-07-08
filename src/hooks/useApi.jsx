import axios from 'axios';

const useApi = (token) => {
  const defaultOptions = {
    baseURL: `${process.env.REACT_APP_API_URL}/`,
  };

  return {
    get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    patch: (url, data, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
  };
};

export default useApi;
