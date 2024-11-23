import { animals } from "../db/AnimalsDb";
import '../Animal Table/AnimalTable.css';
import React, { useEffect, useState } from 'react'

export default function AnimalTable(props){
    
    const [randomAnimal,setRandomAnimal]= useState(null);
    const [result,setResult]= useState('');

    useEffect(() => {
        generateRandomAnimal();
    }, []);
    
    const generateRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random() * 10)+1; 
        setRandomAnimal(animals[randomIndex]);
        setResult(''); 
    };


    const handleAnimalClick=(selectedAnimal)=>{
        if(selectedAnimal === randomAnimal.name){
            setResult('WIN');
        }else{
            setResult('LOSE');
        }

        setTimeout(() => {
            generateRandomAnimal(); 
          }, 1000);
    };
    
    return(
        <div className='gameContainer'>
            <table className='game-table'>
                <tr>
                    <th colspan="3">
                        <h1>Animal Matching Game</h1>
                    </th>
                </tr>
                <tr>
                    <th>
                        <h3>Result</h3>
                    </th>
                    <th>
                        <h3>Animal Name</h3>
                    </th>
                    <th>
                        <h3>Select the Animal</h3>
                    </th>
                </tr>
            </table>

        </div>
    );
}