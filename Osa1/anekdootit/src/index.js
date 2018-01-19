import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: [0, 0, 0, 0, 0, 0]
        }
    }


    arvoUusi = () => {
        this.setState({ selected: Math.floor(Math.random() * anecdotes.length) })
      }

    aanesta = () => {
        var aanet = this.state.votes
        aanet[this.state.selected] = aanet[this.state.selected] +1
        
        this.setState({
            votes: aanet
        })
    }

    render() {
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <p>
                has {this.state.votes[this.state.selected]} votes 
                </p>
                <p>
                    <button onClick={this.aanesta}>
                    vote
                    </button>

                    <button onClick={this.arvoUusi}>
                    next anecdote
                    </button>
                </p>        

                <Suurin 
                state = {this.state}
                anecdotes = {this.props.anecdotes}
                />
            </div>
                )
    }
}

const Suurin = (props) => {

    var greatest = findIndexOfGreatest(props.state.votes)

    if (props.state.votes[greatest] === 0) {
        return (
            <div>
            <h2>anecdote with most votes:</h2>
            <em>no votes has been given!</em>
        </div>

        )
    }

    return(
        <div>
            <h2>anecdote with most votes:</h2>
            <p>{props.anecdotes[greatest]}</p>
            <p>has {props.state.votes[greatest]} votes</p>
        </div>    
    )

}


function findIndexOfGreatest(array) {
    var greatest;
    var indexOfGreatest;
    for (var i = 0; i < array.length; i++) {
      if (!greatest || array[i] > greatest) {
        greatest = array[i];
        indexOfGreatest = i;
      }
    }
    return indexOfGreatest;
  }


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const renderoi = () => {
                    ReactDOM.render(
                        <App anecdotes={anecdotes} />,
                        document.getElementById('root')
                    )
                }

                renderoi()