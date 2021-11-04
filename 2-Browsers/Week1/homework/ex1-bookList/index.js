//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  const ul = document.createElement('ul');
  ul.style.cssText = `
    list-Style: none;
    display: flex;
    flex-Wrap: wrap;
    padding: 20px;
    width: calc(100% - 41px);
  `;
  books.forEach(book => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.style.cssText = `
      width: calc(25% - 51px);
      margin: 15px;
      padding: 10px;
      min-Width: 350px;
    `;
    const p = li.appendChild(document.createElement('p'));
    p.textContent = `${book.title} - ${book.author}`;
    const img = li.appendChild(document.createElement('img'));
    img.style.width = '45%';
    switch (book.isbn) {
      case '978-0465050659':
        img.setAttribute('src', 'assets/the_design_of_everyday_things.jpg');
        img.setAttribute('alt', 'The Design of Everyday Things Cover');
        break;
      case '978-1617933431':
        img.setAttribute('src', 'assets/the_most_human_human.jpg');
        img.setAttribute('alt', 'The Most Human Human Cover');
        break;
      case '978-0201616224':
        img.setAttribute('src', 'assets/the_pragmatic_programmer.jpg');
        img.setAttribute('alt', 'The Pragmatic Programmer Cover');
        break;
      default:
        break;
    }
    if (book.alreadyRead === true) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
  });
  return ul
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
