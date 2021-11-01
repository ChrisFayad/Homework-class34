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
  // TODO your code goes in here, return the ul element
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul .style.padding = '20px';
  ul.style.width = 'calc(100% - 41px)';
  books.forEach(book => {
    const li = ul.appendChild(document.createElement('li'));
    li.style.width = 'calc(25% - 51px)';
    li.style.margin = '15px';
    li.style.padding = '10px';
    li.style.minWidth = '350px';
    const p = li.appendChild(document.createElement('p'));
    p.textContent = `${book.title} - ${book.author}`;
    const img = li.appendChild(document.createElement('img'));
    img.style.width = '45%';
    if (book.title === "The Design of Everyday Things") {
      img.setAttribute('src', 'assets/the_design_of_everyday_things.jpg');
    }
    else if (book.title === "The Most Human Human"){
      img.setAttribute('src', 'assets/the_most_human_human.jpg');
    } else {
      img.setAttribute('src', 'assets/the_pragmatic_programmer.jpg');
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
