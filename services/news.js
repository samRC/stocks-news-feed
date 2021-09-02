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

const getNewsOf = (company) => {
  return mockData;
};

export default { getNewsOf };
