import React from 'react'


const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}

const Yhteensa = (props) => {
    
    const yhteensa = props.osat.reduce(function(sum, osa) {
        return sum + osa.tehtavia
    }, 0)
    return (
        <p>yhteensä {yhteensa} tehtävää</p>
    )

}

const Kurssi = (props) => {

    return (
        <div>
        <Otsikko otsikko={props.kurssi.nimi}/>
        
        {props.kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
        
        <Yhteensa osat={props.kurssi.osat} />
        </div>
    )

}


const Osa = ({ osa }) => {
    return (
      <p>{osa.nimi} {osa.tehtavia}</p>
    )
  }


export default Kurssi