export const newsListOptions = {
  method: "POST",
  url: "https://yh-finance.p.rapidapi.com/news/v2/list",
  params: { region: "US", snippetCount: "1" },
  headers: {
    "content-type": "text/plain",
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
  },
  data: '"Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page"',
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
