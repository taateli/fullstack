import React from 'react'
import axios from 'axios'
import Countries from './components/Countries'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            filter: ''
        }
    }

    


    componentWillMount() {
        console.log('will mount')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ countries: response.data })
            })
    }



    handleCountryClick = (name) => () => {
       this.setState({ filter: name.toLowerCase() })
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value.toLowerCase() })
    }



    render() {

        const countriesToShow =
            this.state.countries.filter(countries => countries.name.toLowerCase().includes(this.state.filter) === true)
        console.log(countriesToShow)


        return (
            <div>
                <div>
                    find countries :<input value={this.state.filter}
                        onChange={this.handleFilterChange} />
                </div>
                
                <Countries countriesToShow={countriesToShow} handleCountryClick={this.handleCountryClick} />
            </div>
        )
    }
}

export default App
