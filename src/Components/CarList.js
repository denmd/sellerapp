import React  from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';

const CarList = ({ carData ,searchTerm}) => {
    
    const { page } = useParams();
    const currentPage = page ? parseInt(page) : 1;
   
  const itemsPerPage = 6;
  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
 
let currentData;

if (searchTerm.trim() !== "") {
  currentData = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
} else {
  currentData = carData.slice(startIndex, endIndex);
}


if (currentData.length === 0 ) {
    return (
      <div className="error-message">
        <p>No cars found for the search term "{searchTerm}".</p>
      </div>
    );
  }
  return (
    <div className="cards-container">
        
      {currentData.map((car, index) => (
        <Card key={index} data={car} />
      ))}
       
    </div>
    
  );
};

export default CarList;
