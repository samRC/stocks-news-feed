import axios from "axios";
import config from "./config";

const getTopGainers = () => {
  return axios.get(`${config.URL}/topgainers`).then((res) => res.data);
};

export default { getTopGainers };
