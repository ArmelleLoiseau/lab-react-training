import React, { useState } from 'react';
import profiles from './../data/berlin.json';

const FacebookAdvanced = () => {
  const [isClicked, setIsClicked] = useState(false);

  const countries = [];
  profiles.map((profile) => {
    if (!countries.includes(profile.country)) countries.push(profile.country);
  });

  const displayCountry = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {/* {countries.map((country, index) => {
        return (
            
          {isClicked ? 
          <button key={index} style={{padding: '5px', margin: '5px', backgroundColor: 'blue' }} onClick={displayCountry}>
            {country}
          </button> 
            : <button key={index} style={{padding: '5px', margin: '5px', backgroundColor: 'blue' }}
            onClick={displayCountry}>
            {country}
          </button>}
        );
      })}   */}

      {profiles.map((profile, index) => {
        return (
          <div
            key={index}
            style={{
              width: '90vw',
              height: '200px',
              border: '1px solid black',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: '3px',
            }}
          >
            <img src={profile.img} alt={profile.firstName + profile.lastName} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <p>
                <strong>First name: </strong>
                {profile.firstName}
              </p>
              <p>
                <strong>Last name: </strong>
                {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {profile.country}
              </p>
              {profile.isStudent ? (
                <p>
                  <strong>Type: </strong>Student
                </p>
              ) : (
                <p>
                  <strong>Type: </strong>Teacher
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacebookAdvanced;
