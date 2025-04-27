"use client";

import { SearchResultItem } from "@/components/searchResult";
import { isLoadingAtom } from "@/lib/atom";
import { data } from "@/lib/data";
import { useAtom } from "jotai";
import { useEffect } from "react";

const loadDuration = 500;

const SearchResult = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  useEffect(() => {
    // Set loading to true initially
    setIsLoading(true);

    // Set a timeout to stop loading after a certain time (e.g., 2 seconds)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, loadDuration);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl">
      {isLoading ? (
        <div>検索中</div> // Replace with your spinner component if needed
      ) : (
        <>
          <h1 className="text-4xl font-bold m-10">検索結果</h1>
          <table className="w-[80vw] table-fixed" cellSpacing={10}>
            <tbody>
              {data.map((item, index) => (
                <SearchResultItem
                  key={index}
                  title={item.title}
                  summary={item.summary}
                  i={index}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SearchResult;
