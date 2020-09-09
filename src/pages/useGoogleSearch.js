import { useState, useEffect } from "react";
import API_KEY from "./Keys";

// this key tells google which search engine to use to search
const CONTEXT_KEY = "0d6421b231acb8b0c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //here we get term as input then search the result using custom search api and pass it into useGoogleSearch
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
