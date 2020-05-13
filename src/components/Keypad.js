// Code Keypad Component Here
import React, { Component } from 'react'

export default class KeyPad extends React.Component{
    Keypad = () => {
        console.log('Entering password...')
    }
    
    render() {
        return <input type="password" onKeyUp={this.Keypad}></input>
    }
}