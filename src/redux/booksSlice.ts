import { createSlice } from '@reduxjs/toolkit'

interface BooksProps {
  url: string
  name: string
  isbn: string
  authors: string
  numberOfPages: number
  publisher: string
  country: string
  mediaType: string
  released: string
}

interface BooksState {
  allBooks: BooksProps[]
  copyBooks: BooksProps[]
}

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
