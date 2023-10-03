import React, { useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';

const CarList = ({ carData ,searchTerm}) => {
    console.log("heyy")
    const { page } = useParams();
    const currentPage = page ? parseInt(page) : 1;
   
  const itemsPerPage = 6;
  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredCars = carData.filter((car) =>
  car.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const currentData = filteredCars.slice(startIndex, endIndex);
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
