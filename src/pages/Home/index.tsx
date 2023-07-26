import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooks } from '../../redux/booksSlice'
import { Book } from '../../types/booksTypes.d'
import { getBooks } from '../../utils/Fetchs/getBooks'

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

interface Props {
  books: BooksState
}

export default function Home (): React.ReactNode {
  const dispatch = useDispatch()
  const books = useSelector((state: Props) => state.books.allBooks)
  useEffect(() => {
    if (books.length === 0) {
      const fetchData = (): void => {
        getBooks()
          .then((books: Book[]) => dispatch(addBooks(books)))
          .catch((error: Error) => console.error('Error fetching books:', error))
      }

      fetchData()
    }
  }, [])

  console.log(books)
  return (
    <div>
      Home

      {books.length > 0 && JSON.stringify(books)}

    </div>
  )
}
