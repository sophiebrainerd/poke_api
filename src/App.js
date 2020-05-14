import React from 'react';
import logo from './logo.svg';
import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';

const Example = (props) => {
    const [monsters, setmonsters] = useState([]);


    const handleclick = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
            .then(response => response.json())
            .then(response => setmonsters(response.results))
    }


    return (
        <div>
            <button onClick={handleclick}>View Pokemon</button>
            {monsters.map((monster, index)=>{
                    return (<div key={index}>{monster.name}</div>)
                })}
        </div>
    );
}
export default Example;
