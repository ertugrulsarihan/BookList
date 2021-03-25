import BookAdd from "./Components/BookAdd";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";

import BookProvider from "./Context/BookContext";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <BookList />
        <BookAdd />
      </BookProvider>
    </div>
  );
}

export default App;
