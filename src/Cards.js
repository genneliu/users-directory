import React, {useState} from 'react';
import {data} from './data';
import './Structure.css';


export default function Cards(props){
  const [cardNumber, setCardNumber] = useState(1);

      return (
        <div>
            <div className="card">
                {data.filter(e => e.id === props.cardNumber).map(e => {
                  return (
                    <div key={e.id}>
                        <h1 className="person-name">{e.name.first} {e.name.last}</h1>
                          <h2 className="person-id"> {e.id} / {data.length} </h2> 
                          <div>
                            <h2 className="person-info"> From: {e.city}, {e.country} </h2>
                            <h2 className="person-info"> Job Title: {e.title} </h2>
                            <h2 className="person-info"> Employer {e.employer} </h2>
                          </div>

                        <div>
                          <ol>
                            Favorite Movies: 
                            {e.favoriteMovies.map((favoriteMovie) => <li> {favoriteMovie}</li>)} 
                          </ol>
                        </div>

                      
                    </div>
                );
                })}
            </div>
        </div>
      );
 }
  



  // const favoriteMovies = {data.favoriteMovies};
  // const MoviesList = favoriteMovies.map((favoriteMovie) => <li> {favoriteMovie} </li>)


// export function Information() {
    
//     var contentKeys = Object.keys(data);
//     console.log(data)
//     var people = contentKeys.map((t) => 
//         data[t].map((e) => <div> {e.id }</div>
//         )
//     );
//     return <div> {people} </div>
// }