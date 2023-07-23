import axios from "axios";

const params = {
  headers: {
    Authorization : "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
  },
};

const fetchDataFromApi = async (endpoint) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_PROD_URL + endpoint, params);
    return(data);
  } catch (error) {
      console.log(error);
      return(error);
  }
};

export default fetchDataFromApi;
