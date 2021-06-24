import React from 'react'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissors from '../assets/scissors.png'


const Player = ({ weapon }) => (
    <img src={ weapon === 'rock' ? rock : weapon === 'scissors' ? scissors : paper } alt="rock paper scissors"/>
)

export default Player