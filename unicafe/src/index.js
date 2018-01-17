import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }
    

    klikHyva = () => {
        this.setState({
          hyva: this.state.hyva + 1
          //kaikki: this.state.kaikki.concat('v')
        })
        renderoi()
        console.log("hyvä")
      }


    klikNeutraali = () => {
        this.setState({
          neutraali: this.state.neutraali + 1
          //kaikki: this.state.kaikki.concat('v')
        })
        renderoi()
        console.log("neut")
      }


    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1
          //kaikki: this.state.kaikki.concat('v')
        })
        renderoi()
        console.log("huono")
      }
    
    render() {
      return (
        <div>
            <h1>Anna palautetta</h1>
          <button onClick={this.klikHyva}>
            hyvä
          </button>
          <button onClick={this.klikNeutraali}>
            neutraali
          </button>
          <button onClick={this.klikHuono}>
            huono
          </button>
          <div>
              <h1>Statistiikka</h1>
              <p>hyvä: {this.state.hyva}</p>
              <p>neutraali: {this.state.neutraali}</p>
              <p>huono: {this.state.huono}</p>
        </div>
        </div>
      )
    }
  
}

const renderoi = () => {
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
}

renderoi()