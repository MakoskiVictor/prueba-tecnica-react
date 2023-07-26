import { Book } from '../../types/booksTypes.d'

export async function getBooks (): Promise<Book[]> {
  const response = await fetch('https://www.anapioficeandfire.com/api/books')
  return await response.json()
}
