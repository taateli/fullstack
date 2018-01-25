import React from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
            error: null
        }
    }

    componentWillMount() {
        personService
            .getAll()
            .then(persons => {
                this.setState({ persons })
            })
    }

    addPerson = (event) => {
        event.preventDefault()

        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }

        const persons = this.state.persons.concat(personObject)

        var hasDuplicate = false;
        persons.map(v => v.name).sort().sort((a, b) => {
            if (a === b) hasDuplicate = true
        })

        if (hasDuplicate) {
            const person = this.state.persons.find(p => p.name === personObject.name)
            const changedPerson = { ...person, number: personObject.number }
            if (window.confirm(`${person.name} on jo luettelossa, päivitetäänkö numero?`)) {
                this.updatePersonInfo(changedPerson)

            }


        } else {
            personService
                .create(personObject)
                .then(response => {
                    this.setState({
                        persons: persons,
                        newName: '',
                        newNumber: '',
                        error: `Henkilö ${personObject.name} lisätty luetteloon`,
                    })
                    setTimeout(() => {
                        this.setState({ error: null })
                    }, 5000)
                })
        }
    }

    updatePersonInfo = (person) => {
        personService
            .update(person.id, person)
            .then(response => {
                const persons = this.state.persons.filter(p => p.id !== person.id)
                this.setState({
                    persons: persons.concat(person),
                    newName: '',
                    newNumber: '',
                    error: `Henkilön ${person.name} numero päivitetty`,
                })
                setTimeout(() => {
                    this.setState({ error: null })
                }, 5000)
            })
            .catch(error => {
                this.setState({persons: this.state.persons.concat(person)})
              })


    }

    handleDelete = (person) => {
        return () => {
            if (window.confirm(`poistetaanko ${person.name}`)) {
                personService
                    .deletePerson(person.id)
                    .then(response => {
                        const persons =
                            this.state.persons.filter(function (el) {
                                return el !== person
                            });
                        this.setState({
                            persons: persons,
                            newName: '',
                            newNumber: '',
                            error: `Henkilö ${person.name} poistettu luettelosta`,
                        })
                        setTimeout(() => {
                            this.setState({ error: null })
                        }, 5000)
                    })
            }
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value })
    }

    render() {


        const personsToShow =
            this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))


        return (
            <div>
                <h1>Puhelinluettelo</h1>

                <Notification message={this.state.error} />


                <div>
                    Rajaa: <input value={this.state.filter}
                        onChange={this.handleFilterChange} />
                </div>

                <PersonForm state={this.state}
                    addPerson={this.addPerson}
                    handleNameChange={this.handleNameChange}
                    handleNumberChange={this.handleNumberChange} />

                <Persons personsToShow={personsToShow} handleDelete={this.handleDelete} />
            </div>
        )
    }
}

export default App