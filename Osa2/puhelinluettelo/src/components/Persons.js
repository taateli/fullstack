import React from 'react'
import Person from './Person'


const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {personsToShow.map(person => <Person key={person.name} person={person} handleDelete={handleDelete} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Persons