/* eslint-disable no-unused-vars */
import { Book } from './modules/book-class.js';
import { clearFields } from './modules/clearFields.js';
import { createListOfBooks } from './modules/showBooks.js';
import { DateTime } from './modules/luxon.min.js';

if (localStorage.getItem('My Books') === null) {
  localStorage.setItem('My Books', JSON.stringify([]));
}

const Localstoragebook = JSON.parse(localStorage.getItem('My Books'));

const updateLocalStorage = () => {
  localStorage.setItem('My Books', JSON.stringify(Localstoragebook));
};

const showBooks = () => {
  const listOfBooks = document.querySelector('.container');
  listOfBooks.innerHTML = `
                  <ul class="book-ul"/>
                  ${createListOfBooks(Localstoragebook)}</ul>
              `;
};

const addNewBook = (bookTitle, bookAuthor) => {
  const myBook = new Book(bookTitle, bookAuthor);
  Localstoragebook.push(myBook);
  updateLocalStorage();
  showBooks();
  clearFields();
};

const removeBook = (i) => {
  Localstoragebook.splice(i, 1);
  updateLocalStorage();
  showBooks();
  clearFields();
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.book-title');
  const author = document.querySelector('.author-name');
  e.preventDefault();
  addNewBook(title.value, author.value);
});

window.onload = showBooks();

// ======== NAVIGATIONS =================
const contactLink = document.querySelector('.contact-us');
const listOfBooks = document.querySelector('.container');
const booksection = document.querySelector('.add-book');
const listLink = document.querySelector('.list');
const contactSection = document.querySelector('.contact');
const addNewLink = document.querySelector('.add-new');
const titleBookOne = document.querySelector('.books-title');

// Luxon Date
const showDate = document.querySelector('.our-date');
showDate.innerHTML = DateTime.now();

// Single page Part
listLink.addEventListener('click', (e) => {
  e.preventDefault();
  titleBookOne.style.display = 'block';
  listOfBooks.style.display = 'block';
  contactSection.style.display = 'none';
  booksection.style.display = 'none';
});

addNewLink.addEventListener('click', (e) => {
  e.preventDefault();
  booksection.style.display = 'block';
  listOfBooks.style.display = 'none';
  contactSection.style.display = 'none';
  titleBookOne.style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  booksection.style.display = 'none';
  listOfBooks.style.display = 'none';
  contactSection.style.display = 'block';
  titleBookOne.style.display = 'none';
});