import { useLoaderData } from "react-router-dom";

export const useData = <Data = unknown>() => useLoaderData() as Data;
