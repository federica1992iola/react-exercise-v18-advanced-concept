import { useEffect, useState } from "react";
import { useFetchData } from "src/customHook/FetchingData";

export const TableFetchData = () => {
    const { data, isLoading, fetchData } = useFetchData();
    const [areDataToRefetch, setAreDataToRefetch] = useState<boolean>(false);

    useEffect(() => {
        if (areDataToRefetch) {
            fetchData(); 
            setAreDataToRefetch(false);
        }
    }, [areDataToRefetch, fetchData]);

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => setAreDataToRefetch(true)}>Refetch data</button>
            <div>
                {!isLoading ? 
                 <ul>
                    {data?.map((d: any, index: number) => (
                            <li key={index}>
                                <b>{d.title}</b>: {d.body}
                            </li>
                        )
                    )}
                </ul>
                : <h4>isLoading...</h4>
                } 
            </div>
        </div>
    );
}