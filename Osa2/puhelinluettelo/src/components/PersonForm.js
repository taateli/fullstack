import React from 'react'



const PersonForm = (props) => {

    return (
        <div>
            <h2>Lisää uusi!</h2>
            <form onSubmit={props.addPerson}>
                <div>
                    nimi: <input value={props.state.newName}
                        onChange={props.handleNameChange} />
                </div>
                <div>
                    numero: <input value={props.state.newNumber}
                        onChange={props.handleNumberChange} />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )

}

export default PersonForm