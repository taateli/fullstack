import React from 'react'
import Country from './Country'

const Countries = ({countriesToShow, handleCountryClick}) => {


    if (countriesToShow.length > 10) {
        return(
            <div>
                <p>too many matches, specify another filter</p>
            </div>

        )
    } else if (countriesToShow.length === 1) {
        return (
            <div>
                <Country country={countriesToShow[0]} />
            </div>    
        )
    }
    
    
    return(
        <div>
            {countriesToShow.map(country => <div key={country.name} onClick={handleCountryClick({country})}> {country.name} </div>)}
        </div>
        
    )
}

export default Countries