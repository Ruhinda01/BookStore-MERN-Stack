import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditBook from './pages/EditBook';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';



const App = () => {
  return (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBooks />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  )
};

export default App;