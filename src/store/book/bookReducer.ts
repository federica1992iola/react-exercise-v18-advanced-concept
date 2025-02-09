import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookAction } from "./bookAction";


export interface IBook {
    id: number,
    title: string
}

export interface BookState {
    books: IBook[]
};

const initialState: BookState = {
    books: []
};
//OLD STYLE DECLARING REDUCERS

// export default (state = initialState, action: BookAction) => {
//     switch (action.type) {
//         case "ADD_BOOK": {
//             return {
//                 ...state,
//                 books: state.books.concat(action.book)
//             };
//         }
//         case "REMOVE_BOOK": {
//             return {
//                 ...state,
//                 books: state.books.filter(b => b.id !== action.bookId)
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// };

// REDUX TOOLKIT METHOD
const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action: PayloadAction<IBook>) {
            state.books.push(action.payload)
        },
        removeBook(state, action: PayloadAction<IBook>) {
            state.books.filter(b => b.id !== action.payload.id)
        }
    }
});
// ACTIONS
export const { addBook, removeBook } = bookSlice.actions;
// REDUCERS
export default bookSlice.reducer;
