import { createSlice } from '@reduxjs/toolkit'
import { BooksState } from '../types/booksTypes'

const initialState: BooksState = {
  allBooks: [],
  copyBooks: []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.allBooks = action.payload
      state.copyBooks = action.payload
    }
  }
})

export const { addBooks } = booksSlice.actions
export default booksSlice.reducer
