import React, { useState ,useMemo} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CarData from "./CarData.json";
import CarList from './Components/CarList.js';
import { useParams } from 'react-router-dom';

function App() {
  const { page } = useParams();
  const CurrentPage = page ? parseInt(page) : 1;
  const itemsPerPage = 6;
  const totalItems = CarData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
 
 

  return (
    <Router>
      <div className="App">
        <div className='header-container'>
        <Header onSearch={handleSearch} />
        </div>
         
        
        <Routes>
        <Route exact path="/" element={<CarList carData={CarData} searchTerm={searchTerm}  />} />
          <Route path="/page/:page" element={<CarList carData={CarData} searchTerm={searchTerm}  />} />
        </Routes>

        <div className="pagination">
        {CurrentPage === 1 ? (
            <Link to={`/page/${CurrentPage}`}>Previous</Link>
          ) : (
            <Link to={`/page/${CurrentPage - 1}`}>Previous</Link>
          )}
          {generatePageNumbers().map((pageNumber) => (
            <Link
              to={`/page/${pageNumber}`}
              key={pageNumber}
              className={pageNumber === CurrentPage ? 'active' : ''}
            >
              {pageNumber}
            </Link>
          ))}
          {CurrentPage < totalPages && (
            <Link to={`/page/${CurrentPage + 1}`}>Next</Link>
          )}
         
        </div>
      </div>
    </Router>
  );
}

export default App;
