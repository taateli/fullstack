import React from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: ''
        }
    }

    componentWillMount() {
        console.log('will mount')
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled')
            this.setState({ persons: response.data })
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
            alert('Henkilö on jo olemassa')

        } else {
            this.setState({
                persons,
                newName: '',
                newNumber: '',
                filter: ''

            })
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
      this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter) === true)


        return (
            <div>
                <h1>Puhelinluettelo</h1>


                <div>
                    Rajaa: <input value={this.state.filter}
                        onChange={this.handleFilterChange}/>
                </div>

                <PersonForm state={this.state} 
                addPerson={this.addPerson} 
                handleNameChange={this.handleNameChange} 
                handleNumberChange={this.handleNumberChange}/>

                <Persons personsToShow={personsToShow} />
            </div>
        )
    }
}

export default App