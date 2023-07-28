import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooks } from '../../redux/booksSlice'
import { Book, BooksProps } from '../../types/booksTypes.d'
import { getBooks } from '../../utils/Fetchs/getBooks'
import { Table } from '../../components/Table'

export default function Home (): React.ReactNode {
  const dispatch = useDispatch()
  const books = useSelector((state: BooksProps) => state.books.allBooks)
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

  return (
    <div>
      Home

      <Table props={books} />

    </div>
  )
}
