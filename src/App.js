import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CarData from "./CarData.json";
import CarList from './Components/CarList.js';


function App() {
  const [currentPage,setCurrentPage]=useState(1)
  const itemsPerPage = 6;
  const totalItems = CarData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  
 
  const handleSearch = (searchTerm) => {
    setCurrentPage(1); 
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
        {currentPage === 1 ? (
            <Link to={`/page/${currentPage}`}>Previous</Link>
          ) : (
            <Link to={`/page/${currentPage}`}  onClick={() => setCurrentPage(currentPage-1)}>Previous</Link>
          )}
          {generatePageNumbers().map((pageNumber) => (
            <Link
              to={`/page/${pageNumber}`}
              key={pageNumber}
              onClick={() => {setCurrentPage(pageNumber);
               setSearchTerm(searchTerm)}}
              
              className={pageNumber === currentPage ? 'active' : ''}
              
            >
              {pageNumber}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link to={`/page/${currentPage}` }  onClick={() => setCurrentPage(currentPage+1)}>Next</Link>
          )}
         
        </div>
      </div>
    </Router>
  );
}

export default App;
