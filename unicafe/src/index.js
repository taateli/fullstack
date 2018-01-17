import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0,
            lukumaara: 0
        }
    }


    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            keskiarvo: this.state.keskiarvo + 1,
            lukumaara: this.state.lukumaara + 1
            //kaikki: this.state.kaikki.concat('v')
        })
        renderoi()
        console.log("hyvä")
    }


    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            lukumaara: this.state.lukumaara + 1
            //kaikki: this.state.kaikki.concat('v')
        })
        renderoi()
        console.log("neut")
    }


    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            keskiarvo: this.state.keskiarvo - 1,
            lukumaara: this.state.lukumaara + 1
            //kaikki: this.state.kaikki.concat('v')
        })
        renderoi()
        console.log("huono")
    }



    render() {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <Button
                    handleClick={this.klikHyva}
                    text="hyvä"
                />
                <Button
                    handleClick={this.klikNeutraali}
                    text="neutraali"
                />
                <Button
                    handleClick={this.klikHuono}
                    text="huono"
                />
                <Statistics
                    state={this.state} 
                />
            </div>
        )
    }

}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    if (props.state.lukumaara === 0) {
        return(
            <div>
                <h1>Statistiikka</h1>
                <em>yhtään palautetta ei ole annettu</em>
            </div>
        )
    }
    
    return (
        <div>
        <h1>Statistiikka</h1>
        <Statistic
        text = "hyvä"
        value = {props.state.hyva}
        />
        <Statistic
        text = "neutraali"
        value = {props.state.neutraali}
        />
        <Statistic
        text = "huono"
        value = {props.state.huono}
        />
        <Statistic
        text = "keskiarvo"
        value = {props.state.keskiarvo / props.state.lukumaara}
        />
        <Statistic
        text = "positiivisia"
        value = {((props.state.hyva / props.state.lukumaara) * 100).toFixed(2) + "%"}
        />
    </div>

    )
}

const Statistic = ({text, value}) => {
    return(
        <p>{text}: {value}</p>
    )
}


const renderoi = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}

renderoi()