import React from "react";
import { IBook } from "./bookReducer";

//REACT CONTEXT
export const BookContext = React.createContext<IBook>({id: 1, title: 'Alice nel paese delle meraviglie'});