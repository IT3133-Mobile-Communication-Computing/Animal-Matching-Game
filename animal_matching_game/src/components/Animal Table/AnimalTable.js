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

    if (!randomAnimal) {
        return <div className="loading">Loading...</div>;
    }


    return(
        <div className='gameContainer'>
            <table className='game-table'>
                <thead>
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
                </thead>
                <tbody>
                <tr>
                    <td className='result-col' width="10%">
                    <h2>{result}</h2></td>

                    <td className='animalname-col' width="20%">
                    <h2>{randomAnimal.name.toUpperCase()}</h2></td>
                    <td className='animalgrid-col' width="70%">
                        <div>
                            <div className='animalgrid'>
                                {animals.map((animal)=>(
                                    <div key={animal.name} className='animalgrid-item' onClick={()=>handleAnimalClick(animal.name)}>
                                        <img src={require(`../assets/img/${animal.img}`)} alt={animal.name} className='animal-image'/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}