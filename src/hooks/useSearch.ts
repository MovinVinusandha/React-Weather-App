import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FeatchSearchResponse } from "../interfaces/SearchResponse";

const useSearch = ( searchText: string ) => {
  const [searchResult, setSearchResult] = useState<FeatchSearchResponse>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FeatchSearchResponse>(`/search.json?q=${searchText}`, { signal: controller.signal })
      .then((res) => setSearchResult(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
    });

      return () => controller.abort();
  }, [searchText]);

  return { searchResult, error };
};

export default useSearch;