import Home from "./pages/Home"
import BookDetails from "./pages/BookDetails"
import Cart from "./components/cart/Cart";
import NavbarStore from "./components/NavbarStore";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CommentContextProvider } from "./context/CommentContext";
import MenuStore from "./components/menu/MenuStore";

const App = () => {
  return (
    <CommentContextProvider>
      <Router>
        <div className="App">
          <NavbarStore />
          <MenuStore/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/book" exact element={<BookDetails />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CommentContextProvider>

  );
}

export default App;
