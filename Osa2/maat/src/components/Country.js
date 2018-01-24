import React from 'react'

const Country = ({country}) => {

    return(
        <div>
            <h1> {country.name} </h1>
            <p> capital: {country.capital}</p>
            <p> population: {country.population}</p>
            <img src={country.flag} width="200px" height="100px"/>
        </div>
        
    )
}

export default Country