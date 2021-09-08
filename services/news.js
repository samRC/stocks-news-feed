import axios from "axios";
import config from "./config";

const mockData = [
  {
    guid: "1",
    title: "One",
    link: "https://example.com/1",
    pubDate: new Date(),
    description: "First",
    source: "news-1",
  },
  {
    guid: "2",
    title: "Two",
    link: "https://example.com/2",
    pubDate: new Date(),
    description: "Second",
    source: "news-2",
  },
  {
    guid: "3",
    title: "Three",
    link: "https://example.com/3",
    pubDate: new Date(),
    description: "Third",
    source: "news-3",
  },
];

const getNewsOf = (symbol) => {
  return axios.get(`${config.URL}/news/${symbol}`).then((res) => res.data);
};

export default { getNewsOf };
