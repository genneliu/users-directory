import {data} from './data';
import { useState } from "react";

const Form = ({ data, setCards }) => {
  const [id, setID] = useState("")  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [employer, setEmployer] = useState("");
  const [title, setTitle] = useState("");
  const [favMovies, setfavMovies] = useState("");

  // const updateId = (e) => {
  //   setID(id++);
  // };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateCountry = (e) => {
    setCountry(e.target.value);
  };

  const updateEmployer = (e) => {
    setEmployer(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateFavMovies = (e) => {
    setfavMovies(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // add card and update the cards
    setCards([
      {
        firstName: data.name.first,
        lastName: data.name.last,
        city: data.city,
        country: data.country,
        employer: data.employer,
        title: data.title,
        favMovies: [data.favoriteMovies]
      }

    ]);
    
  };


  return (
    <div>
      <form onSubmit={submitForm} id="add-form">
        <input type="text" placeholder="First Name" onChange={updateFirstName} value={firstName} />
        <input type="text" placeholder="Last Name" onChange={updateLastName} value={lastName} />
        <input type="text" placeholder="City" onChange={updateCity} value={city} />
        <input type="text" placeholder="Country" onChange={updateCountry} value={country} />
        <input type="text" placeholder="Employer" onChange={updateEmployer} value={employer} />
        <input type="text" placeholder="Job Title" onChange={updateTitle} value={title} /> 
        <input type="text" placeholder="Favorite Movies" onChange={updateFavMovies} value={favMovies} /> 
        <button className="blue-buttons"  id="add-form"> New  </button>
      </form>
    </div>
  );
};

export default Form;
