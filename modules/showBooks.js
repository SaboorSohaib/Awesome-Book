// eslint-disable-next-line import/prefer-default-export
export const createListOfBooks = (arr) => {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    let liClass = 'dark-bakcground';
    if (i % 2 === 0) {
      liClass = 'book-li';
    }
    books += `
                <li class= '${liClass}'>${arr[i].title} by ${arr[i].author} <button onclick="removeBook(${i})">Remove</button></li> <br />
                `;
  }
  return books;
};