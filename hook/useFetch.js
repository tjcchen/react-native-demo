/**
 * useEffect hook, tell React that your component needs to do something after render.
 */
import { useState, useEffect } from 'react';
import axios from 'axios';
// TODO: find the workaround to load environment variable
// import { RAPID_API_KEY } from '@env'; // Find environment variable in .env file
// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      // 'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Key': '96e506e25cmsh1fde8dbeb72c6b1p1d43bejsn4a5acdddbccd',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      // query: 'Python developer in Texas, USA',
      // page: '1',
      // num_pages: '1',
      ...query
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch
  };
};

export default useFetch;
