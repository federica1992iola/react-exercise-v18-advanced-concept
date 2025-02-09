import { useSelector } from "react-redux";
import { RootState } from "./bookStore";

export const allBooksSelector = useSelector((state: RootState) => state.books);