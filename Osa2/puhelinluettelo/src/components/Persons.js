import React from 'react'
import Person from './Person'


const Persons = ({ personsToShow }) => {
  return (
    <div>
    <h2>Numerot</h2>

        {personsToShow.map(person => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default Persons