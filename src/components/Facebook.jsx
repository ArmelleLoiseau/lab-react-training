import React from 'react';
import profiles from './../data/berlin.json'


const Facebook = () => {
    console.log(profiles)
  return (
    <div>
      {profiles.map((profile, index) => {
          return <div key={index} style={{width: "90vw", height: '200px', border:"1px solid black", display:'flex', justifyContent:'flex-start', padding: '3px'}}>
            <img src={profile.img} alt={profile.firstName+profile.lastName}/>
            <div style={{display: 'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'}}>
                <p><strong>First name: </strong>{profile.firstName}</p>
                <p><strong>Last name: </strong>{profile.lastName}</p>
                <p><strong>Country: </strong>{profile.country}</p>
                {profile.isStudent ? <p><strong>Type: </strong>Student</p> 
                :<p><strong>Type: </strong>Teacher</p>}
            </div>
          </div>
      })}
    </div>
)};

export default Facebook;
