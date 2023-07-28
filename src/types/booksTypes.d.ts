export interface Book {
  url: string
  name: string
  isbn: string
  authors: Author[]
  numberOfPages: number
  publisher: string
  country: string
  mediaType: string
  released: string
  characters: Character[]
  povCharacters: povCharacter[]
}

type Author = string

type Character = string

type povCharacter = string

interface BooksState {
  allBooks: Book[]
  copyBooks: Book[]
}

export interface BooksProps {
  books: BooksState
}
