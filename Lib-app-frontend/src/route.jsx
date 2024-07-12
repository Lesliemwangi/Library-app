import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
<<<<<<< HEAD
import BookList from "./components/BookList";
import BookDetails from "./pages/BookDetails";
=======
import BookDetails from "./pages/BookDetails";
import BookList from "./components/BookList";
import AddBook from "./pages/AddBook";
>>>>>>> main

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
<<<<<<< HEAD
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "books",
        element: <BookList />,
      },
      {
        path: "books/:id",
        element: <BookDetails />,
=======
      { 
        path: "login", 
        element: <Login />
      },
      { 
        path: "signup", 
        element: <Signup />
      },
      { 
        path: "books", 
        element: <BookList />
      },
      { 
        path: "books/:id", 
        element: <BookDetails />
      },
      { 
        path: "add-book", 
        element: <AddBook />
>>>>>>> main
      },
    ],
  },
]);

export { router };
