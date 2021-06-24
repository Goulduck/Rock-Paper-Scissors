import React from 'react'
import Player from './Player'

const weapons = ['rock', 'paper', 'scissors']

export default class Game extends React.Component {
    state = {
        playerOne: weapons[0],
        playerTwo: weapons[0],
        winner: null
    }

    startGame =  () => {
        let count = 0
        let gameInterval = setInterval(() => {
            count++
            this.setState({
                playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
                winner: ''
            })
            if (count > 5) {
                clearInterval(gameInterval)
                this.setState({
                    winner: this.calculateWinner()
                })
            }
        }, 100)
    }

    calculateWinner = () => {
        const {playerOne, playerTwo} = this.state
        if (playerOne === playerTwo) return 'Oops, It\'s a draw'
        if ((playerOne === 'scissors' && playerTwo === 'paper') || (playerOne === 'rock' && playerTwo === 'scissors') || (playerOne === 'paper' && playerTwo === 'rock') ) return 'Player One'
        return 'Player Two'
    }

    selectWeapon = weapon => {
        this.setState({
            playerOne: weapon
        })
    }
    
    render () {
        const {winner, playerOne, playerTwo} = this.state
        const status = winner ? `Winner: ${winner}` : 'Rock Paper Scissors'
        return (
            <>
                <div className="status">{status}</div>
                <div className='players-section'>
                    <div className='player-section' >
                        <Player weapon={playerOne}/>
                    </div>
                    <div className='player-section' >
                        <Player weapon={playerTwo}/>
                    </div>
                </div>
                <div className='weapon-buttons'>
                    {weapons.map(weapon => (
                        <button key={weapon} className='weapon-select-btn' onClick={() => this.selectWeapon(weapon)}>{weapon}</button>
                    ))}
                </div>
                
                <button className='start-btn' onClick={this.startGame}>Start Game</button>
            </>
        )
    }
}