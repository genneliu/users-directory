import React from 'react';

import {data} from './data';
import { useState } from "react";

const Form = ({ cards, setCards }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // add card and update the cards
    setCards([
      ...cards,
      {
        id: 2,
        firstName: firstName,
        lastName: lastName
      }
    ]);
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" onChange={updateFirstName} value={firstName} />
      <input type="text" onChange={updateLastName} value={lastName} />
    </form>
  );
};

export default Form;
