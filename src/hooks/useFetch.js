import { useState, useEffect } from 'react';
import fetchDataFromApi from '../utils/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(()=>{
    makeApiCall();
  },[endpoint])

  const makeApiCall = async()=>{
    const response = await fetchDataFromApi(endpoint);
    setData(response);
  }

  return (data);
}

export default useFetch;

// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../utils/api";
// const useFetch = (endpoint) => {
//     const [data, setData] = useState();

//     useEffect(() => {
//         makeApiCall();
//     }, [endpoint]);

//     const makeApiCall = async () => {
//         const res = await fetchDataFromApi(endpoint);
//         setData(res);
//     };

//     return { data };
// };
// export default useFetch;
