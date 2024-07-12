import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookList from "./components/BookList";
import BookDetails from "./pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
      },
    ],
  },
]);

export { router }