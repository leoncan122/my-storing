import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [fetchState, setFetchState] = useState({
    state: "",
    data: null,
    error: null,
  });
  useEffect(() => {
    const fetchAsync = async () => {
      try {
        setFetchState((old) => ({ state: "loading", data: null, error: null }));

        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setFetchState({ state: "success", data: data, error: null });
        }
        // setFetchState({ state: "error", data: null, error: null });
      } catch (err: any) {
        setFetchState({
          ...fetchState,
          state: "error",
          error: err,
        });
      }
    };
    fetchAsync();
  }, [url]);
  return fetchState;
};
export default useFetch;
