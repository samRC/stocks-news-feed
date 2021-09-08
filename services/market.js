import axios from "axios";
import config from "./config";

const getTopGainers = () => {
  return axios.get(`${config.URL}/topgainers`).then((res) => res.data);
};

const getNifty50Stocks = () => {
  return axios.get(`${config.URL}/stockslist/nifty50`).then((res) => res.data);
};

export default { getTopGainers, getNifty50Stocks };
