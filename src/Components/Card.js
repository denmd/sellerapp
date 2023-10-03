import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGasPump,faTachometerAlt, faCog ,faHeart} from '@fortawesome/free-solid-svg-icons';

function Card({ data, index }) {

  const { image, name, year, seatingCapacity, hybrid, mileage, automaticTransmission, rentPrice } = data;

 
  const rentNow = () => {
    alert('Rent Now');
  }

  return (
    <div className="card">
     

      <div className='car-img'>
     

        <img src={image} alt="Car" />
      </div>
      <div className='details'>
        <div className='rows'>
          <h2>{name}</h2>
          <h2>{year}</h2>
        </div>
        <div className='rows'>
          <div className='capacity'>
            <FontAwesomeIcon icon={faUsers} />
            <p>{seatingCapacity}</p>
          </div>
          <div className='hybrid'>
          <FontAwesomeIcon icon={faGasPump} />
            <p>{hybrid}</p>
          </div>
        </div>
        <div className='rows'>
          <div className='milage'>
        <FontAwesomeIcon icon={faTachometerAlt} />
        <p> {mileage}</p>
        </div>
        
          <div className='automatic'>
          <FontAwesomeIcon icon={faCog} />
          <p> {automaticTransmission}</p>
          </div>
        </div>
      </div>
      <div className='rent_rows'>
        <p> ${rentPrice} /month</p>
        <div className='rent_buttons'>
             <p><FontAwesomeIcon icon={faHeart} /></p>
              <button onClick={rentNow}>Rent Now</button>
  </div>
       
      </div>
    </div>
  );
}

export default Card;
