const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018 },
  { id: 2, title: "Deep Work", author: "Cal Newport", year: 2016 },
  { id: 3, title: "Clean Code", author: "Robert Martin", year: 2008 },
  { id: 4, title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 }
];

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Exercise 1: Filter by Author or Year

app.get("/books", (req, res) => {
  const { author, year } = req.query;

  let filteredBooks = books;

  if (author) {
    filteredBooks = filteredBooks.filter(
      book => book.author.toLowerCase() === author.toLowerCase()
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter(
      book => book.year === parseInt(year)
    );
  }

  res.json(filteredBooks);
});

// Exercise 2: Input Validation Middleware

function validateYear(req, res, next) {
  const { year } = req.body;

  const currentYear = new Date().getFullYear();

  if (year !== undefined) {
    if (isNaN(year)) {
      return res.status(400).json({ error: "Year must be a number" });
    }

    if (year < 1500 || year > currentYear) {
      return res.status(400).json({
        error: `Year must be between 1500 and ${currentYear}`
      });
    }
  }

  next();
}

//use it in post route

app.post("/books", validateYear, (req, res) => {
  const { title, author, year } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Exercise 3: Pagination

app.get("/books", (req, res) => {
  let { page = 1, limit = 10 } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedBooks = books.slice(startIndex, endIndex);

  res.json({
    total: books.length,
    page,
    limit,
    data: paginatedBooks
  });
});

//Exercise 4: Create Authors Resource (Full CRUD)

let authors = [
  { id: 1, name: "James Clear", age: 38 },
  { id: 2, name: "Cal Newport", age: 42 }
];

//Create Author

app.post("/authors", (req, res) => {
  const { name, age } = req.body;

  const newAuthor = {
    id: authors.length + 1,
    name,
    age
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// Read all author
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Read single author

app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  res.json(author);
});

//Update author

app.put("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  author.name = req.body.name || author.name;
  author.age = req.body.age || author.age;

  res.json(author);
});

// Delete author

app.delete("/authors/:id", (req, res) => {
  authors = authors.filter(a => a.id != req.params.id);
  res.json({ message: "Author deleted successfully" });
});



//Exercise 5: Search Books by Title

app.get("/books/search", (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title query parameter required" });
  }

  const results = books.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(results);
});
