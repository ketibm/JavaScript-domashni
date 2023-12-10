const bookList = document.getElementById("book-list");
function oddListElements() {
  const oddElements = bookList.querySelectorAll(":nth-child(odd)");
  oddElements.forEach(
    (oddElement) => (oddElement.style.backgroundColor = "lightblue")
  );
}
oddListElements();

function changeBookTitle(orderedList, oldTitle, newTitle) {
  let listOfBooks = Array.from(orderedList.children);
  for (let book of listOfBooks) {
    let existingTitle = book.textContent;
    if (existingTitle === oldTitle) {
      book.textContent = newTitle;
      break;
    }
  }
}
const orderedList = document.getElementById("book-list");
changeBookTitle(orderedList, "Lord of the Flies", "The Alchemist");

function removeBook(orderedList, bookTitle) {
  let listOfBooks = Array.from(orderedList.children);
  for (let book of listOfBooks) {
    let title = book.textContent;
    if (title === bookTitle) {
      orderedList.removeChild(book);
      break;
    }
  }
}
removeBook(bookList, "The Catcher in the Rye");

const bookT = document.createElement("h1");
bookT.textContent = "Book Title";
const bookTitle = document.getElementById("book-list");
const li = document.getElementsByTagName("li")[0];
bookTitle.insertBefore(bookT, li);
