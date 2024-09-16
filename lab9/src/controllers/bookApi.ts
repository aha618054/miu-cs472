export const createBook = async (book: any) => {
    const response = await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    return response.json();
  };
  
  export const getBooks = async () => {
    const response = await fetch('http://localhost:3000/books');
    return response.json();
  };
  
  export const getBookById = async (bookId: number) => {
    const response = await fetch(`http://localhost:3000/books/${bookId}`);
    return response.json();
  };
  
  export const updateBook = async (bookId: number, book: any) => {
    const response = await fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    return response.json();
  };
  
  export const deleteBook = async (bookId: number) => {
    await fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'DELETE',
    });
  };
  