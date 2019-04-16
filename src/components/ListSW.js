import React from 'react'
import Char from './Char'
import {CharactersContext} from '../App'

const Header = function(){
    return(
        <CharactersContext.Consumer>
            {(value)=>{
               return(
                    <header className="App-header">
                        {value.map((char, key) =>{
                        return(
                            <Char name = {char.name} key= {key} col={char.eye_color}/>
                        )
                        })}
                    </header>
               ) 

            }}
        </CharactersContext.Consumer>
    )
}

export default Header
