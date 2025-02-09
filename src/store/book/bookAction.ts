import { IBook } from "./bookReducer";

interface AddBookAction {
    type: "ADD_BOOK";
    book: IBook;
}
 
interface RemoveBookAction {
    type: "REMOVE_BOOK";
    bookId: number;
}

export type BookAction = AddBookAction | RemoveBookAction; 