import { useState, useEffect } from "react";

export const useFetchData = () => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [controller, setController] = useState<AbortController>(new AbortController());

    const fetchData = async () => {
        const signal = controller.signal;
        setIsLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", { signal });
            const result = await response.json();
            setData(result);
        } catch (error: any) {
            console.error("error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        return () => {
            console.log("Cleaning up...");
            controller.abort();
        };
    }, []); 

    return { data, isLoading, fetchData };
};