import Home from "./pages/Home";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Course from "./pages/Course";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";

const App = () => {
  return (
    <>
     <Router>
       <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='Course' element={<Course />} />
        <Route exact path='Book' element={<Book />} />  
        </Routes>  
     </Router>
    </>
  );
}

export default App;
